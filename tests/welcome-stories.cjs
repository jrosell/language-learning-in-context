const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "script.js"), "utf8");
const translations = fs.readFileSync(path.join(root, "translations.js"), "utf8");
const initializeAt = source.lastIndexOf("\ninitialize();");
assert.ok(initializeAt > 0, "the app should have an explicit DOM initialization call");
const appWithoutDOM = source.slice(0, initializeAt);
const documentsKey = "language_learning_text_documents_v1";
const openIdsKey = "language_learning_open_text_ids_v1";
const activeIdKey = "language_learning_active_text_id_v1";

function loadApp({ language, documents, openIds, activeId, fallback = false, fullStorage = false } = {}) {
  const storage = new Map();
  if (language !== undefined) storage.set("learning_language", language);
  if (documents !== undefined) storage.set(documentsKey, JSON.stringify(documents));
  if (openIds !== undefined) storage.set(openIdsKey, JSON.stringify(openIds));
  if (activeId !== undefined) storage.set(activeIdKey, activeId);
  const context = vm.createContext({
    window: {},
    Intl: fallback ? {} : Intl,
    console: { warn() {} },
    localStorage: {
      getItem: key => storage.get(key) ?? null,
      setItem(key, value) {
        if (fullStorage && key === documentsKey) throw new Error("Storage is full");
        storage.set(key, String(value));
      },
      removeItem: key => storage.delete(key)
    }
  });
  vm.runInContext(translations, context);
  vm.runInContext(appWithoutDOM, context);
  return { context, storage };
}

function read(context, expression) {
  return JSON.parse(vm.runInContext("JSON.stringify(" + expression + ")", context));
}

const languages = read(loadApp().context, "learningLanguages");

test("all twelve languages open the three-turn welcome dialogue at its first sentence", () => {
  assert.equal(Object.keys(languages).length, 12);
  for (const [code, language] of Object.entries(languages)) {
    const { context } = loadApp({ language: code });
    const [welcome] = read(context, "textDocuments");
    assert.equal(welcome.content, language.sample, code);
    const turns = welcome.content.split("\n\n");
    assert.equal(turns.length, 3, code + " should have the three approved dialogue turns");
    const speakers = turns.map(turn => turn.split(/[:：]/u)[0].trim());
    assert.equal(speakers[0], speakers[2], code + ": Laura should speak first and last");
    assert.notEqual(speakers[0], speakers[1], code + ": Marta should speak second");
    assert.equal(welcome.activeSentenceIndex, 0, code);
    assert.equal(welcome.isStarter, true, code);
  }
  assert.equal(languages.ca.sample, [
    "Laura: Bon dia! Com et dius?",
    "Marta: Bon dia! Soc la Marta. Soc estudiant.",
    "Laura: Benvinguda, Marta! Soc la Laura. Soc mestra."
  ].join("\n\n"));
});

test("English is the default for new users and unknown saved language codes", () => {
  for (const language of [undefined, "unsupported"]) {
    const { context } = loadApp({ language });
    assert.equal(read(context, "currentLanguage"), "en");
    assert.equal(read(context, "textDocuments[0].content"), languages.en.sample);
  }
});

test("both former welcome versions upgrade without changing IDs, tabs, personal texts, or edited stories", () => {
  for (const [code, language] of Object.entries(languages)) {
    for (const legacyContent of [language.legacySample, language.previousSample]) {
      const customText = { id: "mine", title: "My text", content: legacyContent, activeSentenceIndex: 2, isStarter: false };
      const editedStarter = { id: "edited", title: "Edited welcome", content: legacyContent + "\nMy own words.", activeSentenceIndex: 1, isStarter: true };
      const { context, storage } = loadApp({
        language: code,
        documents: [
          { id: "welcome", title: "My welcome title", content: legacyContent, activeSentenceIndex: 1, isStarter: true },
          customText,
          editedStarter
        ],
        openIds: ["mine", "welcome"],
        activeId: "mine"
      });
      const saved = read(context, "textDocuments");
      assert.equal(saved[0].content, language.sample, code);
      assert.equal(saved[0].id, "welcome", code);
      assert.equal(saved[0].title, "My welcome title", code);
      assert.equal(saved[0].activeSentenceIndex, 0, code);
      assert.deepEqual(saved[1], customText, code);
      assert.deepEqual(saved[2], editedStarter, code);
      assert.deepEqual(JSON.parse(storage.get(documentsKey)), saved, code);
      assert.deepEqual(read(context, "openTextIds"), ["mine", "welcome"], code);
      assert.equal(read(context, "activeTextId"), "mine", code);
    }
  }
});

test("edited welcome texts and reading positions in the new story survive reloads", () => {
  for (const content of ["My own welcome text.", languages.en.sample]) {
    const document = { id: "welcome", title: "My title", content, activeSentenceIndex: 7, isStarter: true };
    const { context } = loadApp({ language: "en", documents: [document] });
    assert.deepEqual(read(context, "textDocuments"), [document]);
  }
});

test("a legacy greeting from an earlier language follows the currently selected language", () => {
  const { context } = loadApp({
    language: "ca",
    documents: [{ id: "welcome", content: languages.de.previousSample, isStarter: true }]
  });
  assert.equal(read(context, "textDocuments[0].content"), languages.ca.sample);
});

test("a full browser store does not discard personal texts during migration", () => {
  const { context } = loadApp({
    language: "en",
    fullStorage: true,
    documents: [
      { id: "welcome", content: languages.en.previousSample, isStarter: true },
      { id: "mine", content: "Keep this personal text.", isStarter: false }
    ]
  });
  assert.equal(read(context, "textDocuments[0].content"), languages.en.sample);
  assert.equal(read(context, "textDocuments[1].content"), "Keep this personal text.");
});

for (const fallback of [false, true]) {
  test("dialogue paragraphs and punctuation survive " + (fallback ? "fallback" : "Intl") + " sentence splitting", () => {
    for (const [code, language] of Object.entries(languages)) {
      const { context } = loadApp({ language: code, fallback });
      const sentences = read(context, "splitTextIntoSentences(textDocuments[0].content)");
      assert.equal(sentences.filter(sentence => /\n\s*\n/.test(sentence.leading)).length, 2, code);
      assert.equal(sentences.filter(sentence => /[:：]/u.test(sentence.text)).length, 3, code);
      assert.ok(sentences.every(sentence => sentence.text.trim()), code);
      const reconstructed = sentences.map(sentence => sentence.leading + sentence.text).join("") + sentences.at(-1).trailing;
      assert.equal(reconstructed, language.sample, code + " should keep every word and punctuation mark");
    }
  });
}

test("fallback playback can address individual Urdu and Hindi questions and answers", () => {
  const { context } = loadApp({ fallback: true });
  const text = "—کیا تم طالب علم ہو؟\n\n—ہاں، میں طالب علم ہوں۔\n\n—क्या तुम छात्र हो?\n\n—हाँ, मैं छात्र हूँ।";
  const sentences = read(context, "splitTextIntoSentences(" + JSON.stringify(text) + ")");
  assert.equal(sentences.length, 4);
});
