const assert = require("node:assert/strict");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { chromium } = require("playwright");
const YAML = require("yaml");

const root = path.resolve(__dirname, "..");
const configPath = path.resolve(process.argv[2] || path.join(__dirname, "mobile-emulation.yml"));
const config = YAML.parse(fs.readFileSync(configPath, "utf8"));
const artifactDirectory = path.resolve(root, config.artifactDirectory || "artifacts/mobile-emulation");
const port = Number(config.server?.port || 4173);
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

function safeFileName(value) {
  return value.replace(/[^a-z0-9_-]+/gi, "-").replace(/^-|-$/g, "").toLowerCase();
}

async function runAction(page, action) {
  if (action.type === "tap") {
    await page.locator(action.selector).tap();
    return;
  }
  if (action.type === "fill") {
    await page.locator(action.selector).fill(action.value);
    return;
  }
  if (action.type === "tap-saved-text-read") {
    const row = page.locator("#saved-text-list > li").filter({ hasText: action.title }).first();
    await row.getByRole("button", { name: "Read", exact: true }).tap();
    return;
  }
  if (action.type === "tap-tab-close") {
    await page.getByRole("button", { name: "Close " + action.title, exact: true }).tap();
    return;
  }
  throw new Error("Unsupported action type: " + action.type);
}

async function runAssertion(page, assertion) {
  if (assertion.type === "visible") {
    await page.locator(assertion.selector).first().waitFor({ state: "visible" });
    return;
  }
  if (assertion.type === "hidden") {
    await page.locator(assertion.selector).first().waitFor({ state: "hidden" });
    return;
  }
  if (assertion.type === "text-equals") {
    const actual = (await page.locator(assertion.selector).first().textContent() || "").trim();
    assert.equal(actual, assertion.value, assertion.message || assertion.selector + " text");
    return;
  }
  if (assertion.type === "text-contains") {
    const actual = await page.locator(assertion.selector).first().innerText();
    assert.ok(actual.includes(assertion.value), assertion.message || assertion.selector + " should contain " + assertion.value);
    return;
  }
  if (assertion.type === "attribute-equals") {
    const actual = await page.locator(assertion.selector).first().getAttribute(assertion.name);
    assert.equal(actual, String(assertion.value), assertion.message || assertion.selector + " " + assertion.name);
    return;
  }
  if (assertion.type === "checked") {
    assert.equal(await page.locator(assertion.selector).isChecked(), true, assertion.message || assertion.selector + " should be selected");
    return;
  }
  if (assertion.type === "active-sentence") {
    const active = page.locator('#text .text-sentence[data-sentence-index="' + assertion.index + '"]');
    assert.equal(await active.getAttribute("aria-current"), "true", "sentence " + (assertion.index + 1) + " should be active");
    return;
  }
  if (assertion.type === "mobile-emulation") {
    const state = await page.evaluate(() => ({
      mobileBreakpoint: matchMedia("(max-width: 700px)").matches,
      touchPoints: navigator.maxTouchPoints
    }));
    assert.equal(state.mobileBreakpoint, true, "mobile breakpoint should apply");
    assert.ok(state.touchPoints > 0, "touch input should be enabled");
    return;
  }
  if (assertion.type === "no-horizontal-overflow") {
    const hasOverflow = await page.evaluate(() =>
      document.documentElement.scrollWidth > window.innerWidth ||
      document.body.scrollWidth > window.innerWidth
    );
    assert.equal(hasOverflow, false, "page should not overflow horizontally");
    return;
  }
  if (assertion.type === "same-left-alignment") {
    const lefts = await page.evaluate(selectors => selectors.map(selector => {
      const element = document.querySelector(selector);
      if (!element) throw new Error("Missing alignment element: " + selector);
      return element.getBoundingClientRect().left;
    }), assertion.selectors);
    const difference = Math.max(...lefts) - Math.min(...lefts);
    assert.ok(
      difference <= (assertion.tolerance ?? 1),
      "elements should align on the same left edge: " + JSON.stringify({ selectors: assertion.selectors, lefts, difference })
    );
    return;
  }
  if (assertion.type === "saved-text-read-actions") {
    const result = await page.evaluate(() => {
      const rows = Array.from(document.querySelectorAll("#saved-text-list > li"));
      return {
        rows: rows.length,
        allRead: rows.length > 0 && rows.every(row => row.querySelector(".saved-text-list__actions button")?.textContent.trim() === "Read"),
        welcomeHasDelete: rows.some(row =>
          row.querySelector(".saved-text-list__title")?.textContent.trim() === "Welcome" &&
          Boolean(row.querySelector(".saved-text-list__delete"))
        )
      };
    });
    assert.ok(result.rows > 0, "saved text list should have entries");
    assert.equal(result.allRead, true, "each saved text should use Read as its opening action");
    assert.equal(result.welcomeHasDelete, false, "the welcome text should not have a Delete action");
    return;
  }
  throw new Error("Unsupported assertion type: " + assertion.type);
}

async function takeCapture(page, capture) {
  const screenshotPath = path.join(artifactDirectory, capture.screenshot);
  await fs.promises.mkdir(path.dirname(screenshotPath), { recursive: true });

  try {
    for (const action of capture.actions || []) await runAction(page, action);
  } catch (error) {
    const debugPath = path.join(artifactDirectory, "failed-" + safeFileName(capture.name) + ".png");
    await page.screenshot({ path: debugPath, fullPage: false }).catch(() => {});
    throw error;
  }

  await page.screenshot({ path: screenshotPath, fullPage: Boolean(capture.fullPage) });
  console.log("Saved screenshot: " + path.relative(root, screenshotPath));

  for (const assertion of capture.assertions || []) await runAssertion(page, assertion);
}

async function main() {
  if (!config.device || !config.captures?.length) {
    throw new Error("The YAML config must define a device and at least one capture.");
  }

  let browser;
  let listening = false;
  try {
    await fs.promises.mkdir(artifactDirectory, { recursive: true });
    await new Promise((resolve, reject) => {
      server.once("error", reject);
      server.listen(port, "127.0.0.1", resolve);
    });
    listening = true;

    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      viewport: config.device.viewport,
      screen: config.device.screen || config.device.viewport,
      deviceScaleFactor: config.device.deviceScaleFactor || 1,
      isMobile: Boolean(config.device.isMobile),
      hasTouch: Boolean(config.device.hasTouch),
      userAgent: config.device.userAgent
    });
    context.setDefaultTimeout(config.timeoutMs || 10000);

    const page = await context.newPage();
    const pageErrors = [];
    page.on("pageerror", error => pageErrors.push(error.message));
    await page.route("**/*", route => {
      const hostname = new URL(route.request().url()).hostname;
      if (hostname === "127.0.0.1") return route.continue();
      return route.abort();
    });

    await page.goto("http://127.0.0.1:" + port + "/", { waitUntil: "load" });
    for (const capture of config.captures) {
      console.log("Capture: " + capture.name);
      await takeCapture(page, capture);
    }

    assert.deepEqual(pageErrors, [], "page should run without JavaScript errors");
    console.log("Mobile emulation completed at " +
      config.device.viewport.width + "×" + config.device.viewport.height +
      " with touch enabled.");
    await context.close();
  } finally {
    if (browser) await browser.close();
    if (listening) await new Promise(resolve => server.close(resolve));
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
