const assert = require("node:assert/strict");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");
const port = 4173;
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8"
};

const server = http.createServer((request, response) => {
  let requestPath = decodeURIComponent(new URL(request.url, "http://127.0.0.1").pathname);
  if (requestPath === "/") requestPath = "/index.html";

  const filePath = path.resolve(root, "." + requestPath);
  if (!filePath.startsWith(root + path.sep)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, contents) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
    response.writeHead(200, { "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream" });
    response.end(contents);
  });
});

async function main() {
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(port, "127.0.0.1", resolve);
  });

  const browser = await chromium.launch({ headless: true });
  try {
    const context = await browser.newContext({
      viewport: { width: 393, height: 852 },
      screen: { width: 393, height: 852 },
      deviceScaleFactor: 2.75,
      isMobile: true,
      hasTouch: true,
      userAgent: "Mozilla/5.0 (Linux; Android 14; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36"
    });
    const page = await context.newPage();
    const pageErrors = [];
    page.on("pageerror", error => pageErrors.push(error.message));
    await page.route("**/*", route => {
      const hostname = new URL(route.request().url()).hostname;
      if (hostname === "127.0.0.1") return route.continue();
      return route.abort();
    });

    await page.goto("http://127.0.0.1:" + port + "/", { waitUntil: "load" });
    assert.equal(await page.evaluate(() => matchMedia("(max-width: 700px)").matches), true, "mobile breakpoint should apply");
    assert.equal(await page.evaluate(() => navigator.maxTouchPoints > 0), true, "touch input should be enabled");

    const read = page.locator("#toggle-read");
    assert.equal(await read.getAttribute("aria-pressed"), "true", "Read should be selected on load");
    assert.equal(await read.evaluate(element => element.classList.contains("is-selected")), true, "Read should have selected styling");
    assert.equal(
      await read.evaluate(element => getComputedStyle(element).backgroundColor),
      "rgb(233, 229, 245)",
      "Read should retain the subtle selected background"
    );

    await page.locator("#save-learning-language").tap();
    await page.locator("#language-picker").waitFor({ state: "hidden" });

    await page.locator("#options-menu > summary").tap();
    await page.locator("#toggle-about").tap();
    await page.locator(".about-container h1").waitFor({ state: "visible" });
    const alignment = await page.evaluate(() => ({
      textLeft: document.querySelector("#text").getBoundingClientRect().left,
      aboutLeft: document.querySelector(".about-container h1").getBoundingClientRect().left
    }));
    assert.ok(
      Math.abs(alignment.textLeft - alignment.aboutLeft) <= 1,
      "main text and About content should share the same left alignment: " + JSON.stringify(alignment)
    );

    await page.locator("#toggle-text").first().tap();
    await page.locator(".text-container").waitFor({ state: "visible" });
    await read.tap();
    await page.locator(".text-container").waitFor({ state: "hidden" });
    assert.equal(await read.getAttribute("aria-pressed"), "true", "Read should return to the selected state");

    await page.locator("#options-menu > summary").tap();
    await page.locator("#open-language-settings").tap();
    await page.locator("#language-picker").waitFor({ state: "visible" });
    assert.equal(
      await page.locator("#open-language-settings").getAttribute("aria-expanded"),
      "true",
      "language picker control should report its expanded state"
    );

    assert.deepEqual(pageErrors, [], "page should load without JavaScript errors");
    console.log("Mobile emulation smoke check passed at 393×852 with touch enabled.");
    await context.close();
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});