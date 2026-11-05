
const learningLanguages = {
    de: { label: "German", menuLabel: "alemany", locale: "de-DE", wiktionary: "de", direction: "ltr", sample: "Guten Tag!" },
    en: { label: "English", menuLabel: "anglès", locale: "en", wiktionary: "en", direction: "ltr", sample: "Hello!" },
    ca: { label: "Catalan", menuLabel: "català", locale: "ca-ES", wiktionary: "ca", direction: "ltr", sample: "Bon dia. Com estàs avui?" },
    vi: { label: "Vietnamese", menuLabel: "vietnamita", locale: "vi-VN", wiktionary: "vi", direction: "ltr", sample: "Xin chào!" },
    zh: { label: "Chinese (Simplified)", menuLabel: "xinès simplificat", locale: "zh-CN", wiktionary: "zh", direction: "ltr", sample: "你好！" },
    ar: { label: "Arabic", menuLabel: "àrab", locale: "ar", wiktionary: "ar", direction: "rtl", sample: "مرحبًا!" },
    ur: { label: "Urdu", menuLabel: "urdú", locale: "ur-PK", wiktionary: "ur", direction: "rtl", sample: "السلام علیکم!" },
    ru: { label: "Russian", menuLabel: "rus", locale: "ru-RU", wiktionary: "ru", direction: "ltr", sample: "Привет!" },
    hi: { label: "Hindi", menuLabel: "hindi", locale: "hi-IN", wiktionary: "hi", direction: "ltr", sample: "नमस्ते!" },
    fr: { label: "French", menuLabel: "francès", locale: "fr-FR", wiktionary: "fr", direction: "ltr", sample: "Bonjour !" },
    es: { label: "Spanish", menuLabel: "castellà", locale: "es-ES", wiktionary: "es", direction: "ltr", sample: "¡Hola!" },
    fil: { label: "Filipino", menuLabel: "filipí", locale: "fil-PH", wiktionary: "tl", direction: "ltr", sample: "Kumusta!" }
};

const savedLanguage = localStorage.getItem("learning_language");
let currentLanguage = learningLanguages[savedLanguage] ? savedLanguage : "de";
let hasSelectedLearningLanguage = Boolean(learningLanguages[savedLanguage]);
let pendingLanguage = currentLanguage;
const TEXT_DOCUMENTS_STORAGE_KEY = "language_learning_text_documents_v1";
const OPEN_TEXT_IDS_STORAGE_KEY = "language_learning_open_text_ids_v1";
const ACTIVE_TEXT_ID_STORAGE_KEY = "language_learning_active_text_id_v1";

function createTextId() {
    return "text-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function loadTextDocuments() {
    try {
        const savedDocuments = JSON.parse(localStorage.getItem(TEXT_DOCUMENTS_STORAGE_KEY));
        if (Array.isArray(savedDocuments) && savedDocuments.length) {
            const documents = savedDocuments
                .filter(document => document && typeof document.content === "string")
                .map(document => ({
                    id: String(document.id || createTextId()),
                    title: String(document.title || "Untitled text"),
                    content: document.content,
                    activeSentenceIndex: Number.isInteger(document.activeSentenceIndex)
                        ? Math.max(0, document.activeSentenceIndex)
                        : 0,
                    isStarter: Boolean(document.isStarter)
                }));
            if (documents.length) return documents;
        }
    } catch (error) {
        console.warn("Could not read saved texts.", error);
    }

    return [{
        id: createTextId(),
        title: "Welcome",
        content: learningLanguages[currentLanguage].sample,
        activeSentenceIndex: 0,
        isStarter: true
    }];
}

function loadOpenTextIds(documents) {
    try {
        const savedIds = localStorage.getItem(OPEN_TEXT_IDS_STORAGE_KEY);
        if (savedIds !== null) {
            const ids = JSON.parse(savedIds);
            if (Array.isArray(ids)) {
                const availableIds = new Set(documents.map(document => document.id));
                return ids.filter(id => availableIds.has(id));
            }
        }
    } catch (error) {
        console.warn("Could not read open text tabs.", error);
    }
    return documents.length ? [documents[0].id] : [];
}

let textDocuments = loadTextDocuments();
let openTextIds = loadOpenTextIds(textDocuments);
let activeTextId = localStorage.getItem(ACTIVE_TEXT_ID_STORAGE_KEY);
if (!openTextIds.includes(activeTextId)) activeTextId = openTextIds[0] || null;
let sentencePlaybackMode = false;
let editingTextId = null;

function hasUnsavedTextEditorChanges() {
    const editor = document.getElementById("text-editor");
    if (editor.hidden) return false;
    const title = document.getElementById("text-title-input").value.trim();
    const content = document.getElementById("text-input").value.trim();
    if (!editingTextId) return Boolean(title || content);
    const textDocument = textDocuments.find(document => document.id === editingTextId);
    return Boolean(textDocument && (title !== textDocument.title || content !== textDocument.content));
}

function confirmDiscardTextEditorChanges() {
    return !hasUnsavedTextEditorChanges() || window.confirm("Discard unsaved text changes?");
}

function getActiveTextDocument() {
    return textDocuments.find(document => document.id === activeTextId) || null;
}

function saveTextWorkspace() {
    try {
        localStorage.setItem(TEXT_DOCUMENTS_STORAGE_KEY, JSON.stringify(textDocuments));
        localStorage.setItem(OPEN_TEXT_IDS_STORAGE_KEY, JSON.stringify(openTextIds));
        if (activeTextId) {
            localStorage.setItem(ACTIVE_TEXT_ID_STORAGE_KEY, activeTextId);
        } else {
            localStorage.removeItem(ACTIVE_TEXT_ID_STORAGE_KEY);
        }
    } catch (error) {
        console.warn("Could not save texts in this browser.", error);
    }
}

function getVocabularyStorageKey(languageCode = currentLanguage) {
    return languageCode === "de" ? "words_customWords" : "words_customWords_" + languageCode;
}

function loadWordsForLanguage(languageCode = currentLanguage) {
    try {
        return JSON.parse(localStorage.getItem(getVocabularyStorageKey(languageCode))) || {};
    } catch (error) {
        console.warn("Could not read saved vocabulary for " + languageCode, error);
        return {};
    }
}

let allWords = loadWordsForLanguage();

function saveCurrentWords() {
    localStorage.setItem(getVocabularyStorageKey(), JSON.stringify(allWords));
}

function ensureGermanStarterWord() {
    if (currentLanguage !== "de" || allWords["Guten"]) return;

    allWords["Guten"] = {
        state: "learning",
        definition: "Das Wort „Guten“ ist der Akkusativ Singular von „gut“, was „gut“ oder „wohl“ bedeutet. Es wird oft in Kombination mit anderen Wörtern verwendet, um jemanden in verschiedenen Tageszeiten oder Situationen freundlich zu begrüßen oder gute Wünsche auszudrücken.",
        examples: [
            {
                text: "Guten Morgen",
                alt: "Ein sonniger Start in den Tag.",
                youtube: "https://youtu.be/S0RsIasa314?si=hRWnDH0bFWs6xcTT"
            },
            {
                text: "Guten Appetit",
                alt: "Ein leckeres Gericht serviert.",
                youtube: "https://youtu.be/uwbxLOkjsOI?si=7lXz0RS7cRgmr36S&t=20"
            }
        ]
    };
    saveCurrentWords();
}

function getWordKey(word) {
    const normalizedWord = word.normalize("NFC");
    return Object.keys(allWords).find(storedWord => storedWord.normalize("NFC") === normalizedWord) || normalizedWord;
}

function escapeHtml(text) {
    return text.replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

function getWordSegments(text) {
    if (typeof Intl !== "undefined" && typeof Intl.Segmenter === "function") {
        try {
            const segmenter = new Intl.Segmenter(learningLanguages[currentLanguage].locale, { granularity: "word" });
            return Array.from(segmenter.segment(text), item => ({
                segment: item.segment,
                isWordLike: Boolean(item.isWordLike)
            }));
        } catch (error) {
            console.warn("Locale word segmentation is unavailable; using the fallback tokenizer.", error);
        }
    }

    try {
        const tokenPattern = new RegExp("[\\p{L}\\p{M}\\p{N}_]+(?:['’][\\p{L}\\p{M}\\p{N}_]+)*|[\\s\\S]", "gu");
        const wordPattern = new RegExp("[\\p{L}\\p{N}]", "u");
        return (text.match(tokenPattern) || []).map(segment => ({
            segment,
            isWordLike: wordPattern.test(segment)
        }));
    } catch (error) {
        return Array.from(text, segment => ({
            segment,
            isWordLike: /[A-Za-z0-9]/.test(segment) || (segment.codePointAt(0) > 127 && !/\s/.test(segment))
        }));
    }
}

function makeWordsClickable(text) {
    return getWordSegments(text).map(({ segment, isWordLike }) => {
        if (!isWordLike) return escapeHtml(segment);

        const wordKey = getWordKey(segment);
        const wordData = allWords[wordKey];
        const classes = ["word"];
        if (wordData) {
            if (wordData.state === "learned") {
                classes.push("learned-word");
            } else if (wordData.state === "learning") {
                classes.push("learning-word");
            } else {
                classes.push("new-word");
            }
            classes.push(wordData.definition && wordData.definition.trim() !== ""
                ? "word-with-definition"
                : "word-without-definition");
        } else {
            classes.push("word-without-definition");
        }

        return '<span class="' + classes.join(" ") + '">' + escapeHtml(segment) + "</span>";
    }).join("");
}

function applyLearningLanguageAttributes() {
    const language = learningLanguages[currentLanguage];
    ["text", "text-input", "text-title-input", "active-text-title", "word-title", "definition", "examples"].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.lang = language.locale;
            element.dir = language.direction;
        }
    });
}

function updateLanguageMenuLabel() {
    document.getElementById("language-menu-label").textContent =
        "Aprenc " + learningLanguages[currentLanguage].menuLabel;
}

function normalizeLanguageSearch(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function renderLearningLanguageOptions() {
    const options = document.getElementById("learning-language-options");
    options.textContent = "";

    Object.entries(learningLanguages).forEach(([code, language]) => {
        const option = document.createElement("label");
        option.className = "language-option";
        option.dataset.searchText = normalizeLanguageSearch(language.label);

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "learning-language";
        radio.value = code;
        radio.checked = code === pendingLanguage;
        radio.addEventListener("change", () => {
            pendingLanguage = code;
        });

        const label = document.createElement("span");
        label.textContent = language.label;
        option.append(radio, label);
        options.append(option);
    });

    applyLearningLanguageSearch();
}

function applyLearningLanguageSearch() {
    const query = normalizeLanguageSearch(
        document.getElementById("learning-language-search").value.trim()
    );
    const options = document.querySelectorAll(".language-option");
    let visibleCount = 0;

    options.forEach(option => {
        option.hidden = Boolean(query) && !option.dataset.searchText.includes(query);
        if (!option.hidden) visibleCount += 1;
    });

    document.getElementById("language-search-empty").hidden = visibleCount > 0;
}

function setTextActionState(mode) {
    const readButton = document.getElementById("toggle-read");
    const changeButton = document.getElementById("toggle-text");

    readButton.setAttribute("aria-pressed", String(mode === "read"));
    changeButton.setAttribute("aria-pressed", String(mode === "change"));
    readButton.classList.toggle("is-selected", mode === "read");
    changeButton.classList.toggle("is-selected", mode === "change");
}

function showReadView() {
    document.getElementById("options-menu").open = false;
    [".about-container", ".text-container", ".words-container", ".definition-box"].forEach(selector => {
        const panel = document.querySelector(selector);
        if (panel) panel.style.display = "none";
    });
    setTextActionState("read");
}

function syncLearningLanguageSelection() {
    document.querySelectorAll('input[name="learning-language"]').forEach(input => {
        input.checked = input.value === pendingLanguage;
    });
}

function resetLanguagePickerSearch() {
    document.getElementById("learning-language-search").value = "";
    applyLearningLanguageSearch();
}

function openLearningLanguageSettings() {
    stopTextPlayback();
    const firstRun = !hasSelectedLearningLanguage;
    pendingLanguage = currentLanguage;
    syncLearningLanguageSelection();
    resetLanguagePickerSearch();
    document.getElementById("language-picker-heading").textContent =
        firstRun ? "Choose your learning language" : "Change learning language";
    document.getElementById("save-learning-language").textContent =
        firstRun ? "Start learning" : "Save language";
    document.getElementById("cancel-learning-language").hidden = firstRun;
    document.getElementById("language-picker").hidden = false;
    document.getElementById("open-language-settings").setAttribute("aria-expanded", "true");
    document.getElementById("options-menu").open = false;
}

function cancelLearningLanguageChange() {
    pendingLanguage = currentLanguage;
    syncLearningLanguageSelection();
    resetLanguagePickerSearch();
    document.getElementById("language-picker").hidden = true;
    document.getElementById("open-language-settings").setAttribute("aria-expanded", "false");
}

function saveLearningLanguage() {
    const nextLanguage = pendingLanguage;
    if (!learningLanguages[nextLanguage]) return;
    stopTextPlayback();

    const oldSample = learningLanguages[currentLanguage].sample;
    const untouchedWelcomeText = textDocuments.find(document =>
        document.isStarter && document.content.trim() === oldSample
    );

    currentLanguage = nextLanguage;
    pendingLanguage = currentLanguage;
    hasSelectedLearningLanguage = true;
    localStorage.setItem("learning_language", currentLanguage);
    allWords = loadWordsForLanguage();
    ensureGermanStarterWord();

    const newSample = learningLanguages[currentLanguage].sample;
    if (untouchedWelcomeText) untouchedWelcomeText.content = newSample;
    saveTextWorkspace();

    resetLanguagePickerSearch();
    document.getElementById("language-picker").hidden = true;
    document.getElementById("open-language-settings").setAttribute("aria-expanded", "false");
    document.getElementById("definition-box").style.display = "none";
    applyLearningLanguageAttributes();
    refreshWordList();
    updateLanguageMenuLabel();

    const wordsContainer = document.querySelector(".words-container");
    if (wordsContainer && wordsContainer.style.display === "block") loadCurrentWords();
}


ensureGermanStarterWord();

function splitTextIntoSentences(text) {
    let rawSegments = [];
    if (typeof Intl !== "undefined" && typeof Intl.Segmenter === "function") {
        try {
            const segmenter = new Intl.Segmenter(learningLanguages[currentLanguage].locale, { granularity: "sentence" });
            rawSegments = Array.from(segmenter.segment(text), item => item.segment);
        } catch (error) {
            console.warn("Sentence segmentation is unavailable; using the fallback splitter.", error);
        }
    }

    if (!rawSegments.length && text.trim()) {
        rawSegments = text.match(/[^.!?。！？]+[.!?。！？]*\s*/g) || [text];
    }

    return rawSegments.map(segment => {
        const leading = (segment.match(/^\s*/) || [""])[0];
        const trailing = (segment.match(/\s*$/) || [""])[0];
        const end = segment.length - trailing.length;
        return { leading, text: segment.slice(leading.length, end), trailing };
    }).filter(segment => segment.text.trim());
}

function getTextTitle(content) {
    const firstSentence = splitTextIntoSentences(content)[0];
    const title = firstSentence ? firstSentence.text.trim() : "Untitled text";
    return title.length > 60 ? title.slice(0, 57).trimEnd() + "…" : title;
}

function renderTextTabs() {
    const tabs = document.getElementById("text-tabs");
    tabs.textContent = "";

    openTextIds.forEach(id => {
        const textDocument = textDocuments.find(document => document.id === id);
        if (!textDocument) return;

        const tab = document.createElement("div");
        tab.className = "text-tab";
        const selectButton = document.createElement("button");
        selectButton.type = "button";
        selectButton.className = "text-tab__select";
        selectButton.setAttribute("role", "tab");
        selectButton.setAttribute("aria-selected", String(id === activeTextId));
        selectButton.setAttribute("aria-controls", "text");
        selectButton.textContent = textDocument.title;
        selectButton.title = textDocument.title;
        selectButton.addEventListener("click", () => openTextDocument(id));

        const closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.className = "text-tab__close";
        closeButton.setAttribute("aria-label", "Close " + textDocument.title);
        closeButton.textContent = "×";
        closeButton.addEventListener("click", () => closeTextDocument(id));

        tab.append(selectButton, closeButton);
        tabs.appendChild(tab);
    });
}

function renderTextDocument() {
    const textElement = document.getElementById("text");
    const titleElement = document.getElementById("active-text-title");
    const textDocument = getActiveTextDocument();
    const language = learningLanguages[currentLanguage];
    textElement.textContent = "";
    textElement.lang = language.locale;
    textElement.dir = language.direction;
    titleElement.lang = language.locale;
    titleElement.dir = language.direction;

    if (!textDocument) {
        titleElement.textContent = "";
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-text-message";
        emptyMessage.textContent = "No text is open. Choose Change or + to open a saved text or add one.";
        textElement.appendChild(emptyMessage);
        return;
    }

    titleElement.textContent = textDocument.title;
    const sentences = splitTextIntoSentences(textDocument.content);
    if (!sentences.length) {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-text-message";
        emptyMessage.textContent = "This text is empty. Choose Change to edit it.";
        textElement.appendChild(emptyMessage);
        return;
    }

    textDocument.activeSentenceIndex = Math.min(textDocument.activeSentenceIndex, sentences.length - 1);
    sentences.forEach((sentence, index) => {
        if (sentence.leading) textElement.appendChild(document.createTextNode(sentence.leading));

        const sentenceElement = document.createElement("span");
        sentenceElement.className = "text-sentence";
        sentenceElement.dataset.sentenceIndex = String(index);
        sentenceElement.tabIndex = 0;
        sentenceElement.setAttribute("role", "group");
        sentenceElement.setAttribute("aria-label", "Sentence " + (index + 1));
        sentenceElement.setAttribute("aria-current", String(index === textDocument.activeSentenceIndex));
        if (index === textDocument.activeSentenceIndex) sentenceElement.classList.add("is-active");

        const sentenceText = document.createElement("span");
        sentenceText.className = "text-sentence__content";
        sentenceText.innerHTML = makeWordsClickable(sentence.text);

        const controls = document.createElement("span");
        controls.className = "sentence-controls";
        controls.hidden = index !== textDocument.activeSentenceIndex;

        const playButton = document.createElement("button");
        playButton.type = "button";
        playButton.className = "sentence-controls__play";
        playButton.dataset.sentenceAction = "play";
        playButton.setAttribute("aria-label", sentencePlaybackMode
            ? "Play the active sentence"
            : "Play from the active sentence through the rest of the text");
        playButton.textContent = "▶ Play";

        const sentenceModeButton = document.createElement("button");
        sentenceModeButton.type = "button";
        sentenceModeButton.className = "sentence-controls__repeat";
        sentenceModeButton.dataset.sentenceAction = "sentence-mode";
        sentenceModeButton.setAttribute("aria-label", "Toggle sentence mode");
        sentenceModeButton.setAttribute("aria-pressed", String(sentencePlaybackMode));
        sentenceModeButton.title = sentencePlaybackMode
            ? "Sentence mode on: Play only the active sentence"
            : "Sentence mode off: Play the full text";
        sentenceModeButton.textContent = "↻";
        sentenceModeButton.classList.toggle("is-selected", sentencePlaybackMode);

        const stopButton = document.createElement("button");
        stopButton.type = "button";
        stopButton.className = "sentence-controls__stop";
        stopButton.dataset.sentenceAction = "stop";
        stopButton.setAttribute("aria-label", "Stop playback");
        stopButton.textContent = "■ Stop";

        controls.append(playButton, sentenceModeButton, stopButton);
        sentenceElement.append(sentenceText, controls);
        textElement.appendChild(sentenceElement);
        if (sentence.trailing) textElement.appendChild(document.createTextNode(sentence.trailing));
    });
}

function renderSavedTextList() {
    const list = document.getElementById("saved-text-list");
    list.textContent = "";

    textDocuments.slice().reverse().forEach(textDocument => {
        const item = document.createElement("li");
        const title = document.createElement("span");
        title.className = "saved-text-list__title";
        title.textContent = textDocument.title;

        const actions = document.createElement("div");
        actions.className = "saved-text-list__actions";
        const openButton = document.createElement("button");
        openButton.type = "button";
        openButton.textContent = openTextIds.includes(textDocument.id) ? "Switch" : "Open";
        openButton.addEventListener("click", () => openTextDocument(textDocument.id));

        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editTextDocument(textDocument.id));

        actions.append(openButton, editButton);
        item.append(title, actions);
        list.appendChild(item);
    });
}

function openTextManager() {
    stopTextPlayback();
    document.getElementById("options-menu").open = false;
    document.querySelector(".text-container").style.display = "block";
    document.querySelector(".words-container").style.display = "none";
    document.querySelector(".about-container").style.display = "none";
    document.querySelector(".definition-box").style.display = "none";
    setTextActionState("change");
    renderSavedTextList();
}

function startNewTextEditor() {
    if (!confirmDiscardTextEditorChanges()) return;
    editingTextId = null;
    document.getElementById("text-editor-error").hidden = true;
    document.getElementById("text-editor-heading").textContent = "New text";
    document.getElementById("text-title-input").value = "";
    document.getElementById("text-input").value = "";
    document.getElementById("save-text-button").textContent = "Save and open";
    document.getElementById("text-editor").hidden = false;
    document.getElementById("text-title-input").focus();
}

function editTextDocument(id) {
    if (!confirmDiscardTextEditorChanges()) return;
    const textDocument = textDocuments.find(document => document.id === id);
    if (!textDocument) return;
    editingTextId = id;
    document.getElementById("text-editor-error").hidden = true;
    document.getElementById("text-editor-heading").textContent = "Edit text";
    document.getElementById("text-title-input").value = textDocument.title;
    document.getElementById("text-input").value = textDocument.content;
    document.getElementById("save-text-button").textContent = "Save changes";
    document.getElementById("text-editor").hidden = false;
    document.getElementById("text-title-input").focus();
}

function saveTextFromEditor() {
    const content = document.getElementById("text-input").value.trim();
    if (!content) {
        document.getElementById("text-editor-error").hidden = false;
        document.getElementById("text-input").focus();
        return;
    }
    document.getElementById("text-editor-error").hidden = true;

    const title = document.getElementById("text-title-input").value.trim() || getTextTitle(content);
    if (editingTextId) {
        const textDocument = textDocuments.find(document => document.id === editingTextId);
        if (!textDocument) return;
        const contentChanged = textDocument.content !== content;
        textDocument.title = title;
        textDocument.content = content;
        textDocument.isStarter = false;
        if (contentChanged) textDocument.activeSentenceIndex = 0;
        if (textDocument.id === activeTextId) renderTextDocument();
        saveTextWorkspace();
        renderTextTabs();
        renderSavedTextList();
        document.getElementById("text-editor").hidden = true;
        return;
    }

    const textDocument = {
        id: createTextId(),
        title,
        content,
        activeSentenceIndex: 0,
        isStarter: false
    };
    textDocuments.push(textDocument);
    document.getElementById("text-editor").hidden = true;
    openTextDocument(textDocument.id);
}

function openTextDocument(id) {
    if (!confirmDiscardTextEditorChanges()) return;
    const textDocument = textDocuments.find(document => document.id === id);
    if (!textDocument) return;
    stopTextPlayback();
    if (!openTextIds.includes(id)) openTextIds.push(id);
    activeTextId = id;
    saveTextWorkspace();
    renderTextTabs();
    renderTextDocument();
    document.getElementById("text-editor").hidden = true;
    showReadView();
}

function closeTextDocument(id) {
    const index = openTextIds.indexOf(id);
    if (index < 0) return;
    stopTextPlayback();
    openTextIds.splice(index, 1);
    if (activeTextId === id) activeTextId = openTextIds[Math.min(index, openTextIds.length - 1)] || null;
    saveTextWorkspace();
    renderTextTabs();
    renderTextDocument();
}

function setActiveSentence(index) {
    const textDocument = getActiveTextDocument();
    if (!textDocument) return;
    const sentences = splitTextIntoSentences(textDocument.content);
    if (!sentences.length) return;
    textDocument.activeSentenceIndex = Math.max(0, Math.min(index, sentences.length - 1));
    saveTextWorkspace();
    renderTextDocument();
}

function stopTextPlayback() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

function playText() {
    const textDocument = getActiveTextDocument();
    if (!textDocument || !("speechSynthesis" in window)) return;

    const sentences = splitTextIntoSentences(textDocument.content);
    if (!sentences.length) return;
    const startIndex = textDocument.activeSentenceIndex;
    const sequence = sentencePlaybackMode
        ? [sentences[startIndex]]
        : sentences.slice(startIndex);

    stopTextPlayback();
    sequence.forEach((sentence, offset) => {
        const utterance = new SpeechSynthesisUtterance(sentence.text.trim());
        utterance.lang = learningLanguages[currentLanguage].locale;
        utterance.onstart = () => setActiveSentence(startIndex + offset);
        window.speechSynthesis.speak(utterance);
    });
}

function refreshWordList() {
    renderTextTabs();
    renderTextDocument();
}

function showDefinition(wordText) {
    wordText = getWordKey(wordText);
    const wordData = allWords[wordText] || { definition: "", examples: [], state: "new" };
    if (!allWords[wordText]) {
        // Keep new words in the shared map used by saveWordState and updateWordColor.
        allWords[wordText] = wordData;
        saveCurrentWords();
    }
    document.getElementById('word-title').innerText = wordText;
    document.getElementById('definition').innerText = wordData.definition;
    document.getElementById('wiktionary').innerHTML = `<a class="edit-button" href="https://${learningLanguages[currentLanguage].wiktionary}.wiktionary.org/w/index.php?search=${encodeURIComponent(wordText)}" target="_blank" rel="noopener">Open Wiktionary</a>`;
    const examplesContainer = document.getElementById('examples');
    examplesContainer.innerHTML = ''; // Clear previous content
    wordData.examples.forEach((example, index) => {
        const exampleDiv = document.createElement('div');
        exampleDiv.classList.add('example');
        let youtubeHtml = ""
        if (example.youtube && example.youtube.trim() !== "") {
            youtubeHtml = ` <p><a class="youtube" href="${example.youtube}" target="_blank">YouTube</a></p>`
        }
        // exampleDiv.innerHTML = `
        //     <div id="example-${index}">
        //     <span id="example-text-${index}">${example.text}</span>
        //     <button class="edit-example" id="edit-example-${index}" onclick="toggleEditExample(${index})">Edit</button>
        //     <p class="image"><a href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(example.alt)}" target="_blank" class="edit-button">Google Images</a> | <a href="#" class="edit-button" onclick="uploadExampleImage(${index}, '${wordText}')">Upload</a><input type="file" id="image-upload-${index}" style="display: none;" accept="image/*" onchange="handleImageUpload(event, index)" /></p>
        //     <div id="example-image-${index}"></div>
        //     <p class="caption">${example.alt}</p>
        //     ${youtubeHtml}
        //     </div>
        // `;
        exampleDiv.innerHTML = `
            <div id="example-${index}">
            <span id="example-text-${index}">${example.text}</span>
            <button class="edit-example" id="edit-example-${index}" onclick="toggleEditExample(${index})">Edit</button>
            <p class="image"><a href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(example.alt)}" target="_blank" class="edit-button">Google Images</a></p>
            <div id="example-image-${index}"></div>
            <p class="caption">${example.alt}</p>
            ${youtubeHtml}
            </div>
        `;
        examplesContainer.appendChild(exampleDiv);
    });
    const stateContainer = document.getElementById('state-selection');
    stateContainer.innerHTML = `
        <div class="wordState">
            <label class="new-word">
                <input type="radio" name="wordState" value="new" ${wordData.state === 'new' ? 'checked' : ''}> New
            </label>
            <label class="learning-word">
                <input type="radio" name="wordState" value="learning" ${wordData.state === 'learning' ? 'checked' : ''}> Learning
            </label>
            <label class="learned-word">
                <input type="radio" name="wordState" value="learned" ${wordData.state === 'learned' ? 'checked' : ''}> Learned
            </label>
        </div>
    `;
    stateContainer.querySelectorAll('input[name="wordState"]').forEach(input => {
        input.addEventListener('change', () => saveWordState(wordText));
    });
    updateWordColor(wordText, wordData.state);
    document.getElementById('definition-box').style.display = 'block';
    loadImages(wordText);
}

function saveWordState(word) {
    const wordKey = getWordKey(word);
    const selectedState = document.querySelector('input[name="wordState"]:checked').value;
    if (!allWords[wordKey]) {
        allWords[wordKey] = { definition: "", examples: [], state: "new" };
    }
    allWords[wordKey].state = selectedState;
    saveCurrentWords();
    console.log(`State for "${wordKey}" saved: ${selectedState}`);
    updateWordColor(wordKey, selectedState);
}
function updateWordColor(word, state) {
    const wordKey = getWordKey(word);
    const wordElements = document.querySelectorAll('.word');
    const wordData = allWords[wordKey];
    wordElements.forEach(element => {
        if (element.innerText.normalize('NFC') === wordKey.normalize('NFC')) {
            element.classList.remove('learned-word', 'new-word', 'learning-word', 'word-with-definition', 'word-without-definition');
            switch (state) {
                case 'new':
                    element.classList.add('new-word');
                    break;
                case 'learning':
                    element.classList.add('learning-word');
                    break;
                case 'learned':
                    element.classList.add('learned-word');
                    break;
            }
            if (element) {
                if (wordData) { // Check if wordData is defined
                    if (wordData.definition && wordData.definition.trim() !== "") {
                        element.classList.add('word-with-definition'); // Bold if definition exists
                        element.classList.remove('word-without-definition'); // Ensure 'without' class is removed
                    } else {
                        element.classList.add('word-without-definition'); // Normal if no definition
                        element.classList.remove('word-with-definition'); // Ensure 'with' class is removed
                    }
                } else {
                    console.warn(`No data found for word: ${word}`); // Log a warning if no data is found
                    element.classList.remove('word-with-definition', 'word-without-definition'); // Remove both classes if no data
                }
            } else {
                console.warn(`Element not found for word: ${word}`); // Log if the element itself is not found
            }
        }
    });
}
function toggleEditDefinition() {
    const editButton = document.getElementById('edit-definition-button');
    const definitionText = document.getElementById('definition');
    const word = document.getElementById('word-title').innerText;
    if (editButton.innerText === "Edit") {
        editButton.innerText = "Save";
        definitionText.innerHTML = `<textarea id="definition-edit" rows="3">${definitionText.innerText}</textarea>`;
    } else {
        editButton.innerText = "Edit";
        const newDefinition = document.getElementById('definition-edit').value;
        definitionText.innerText = newDefinition;
        allWords[word].definition = newDefinition;
        saveCurrentWords();
        updateWordColor(word, allWords[word].state); // Call to update the color and style
        console.log("toggleEditDefinition: Changes saved!");
    }
}
function toggleEditExample(index) {
    const word = document.getElementById('word-title').innerText; // Get the word title
    const exampleData = allWords[word].examples[index];
    const exampleContainer = document.getElementById(`example-text-${index}`);
    const editButton = document.getElementById(`edit-example-${index}`);
    const exampleCaption = document.querySelector(`#example-${index} .caption`);
    const exampleImage = document.querySelector(`#example-${index} .image`);
    const youtubeLink = document.querySelector(`#example-${index} a.youtube`);
    if (editButton.innerText === "Save") {
        const newExampleText = document.getElementById(`example-textarea-${index}`).value;
        const newExampleAlt = document.getElementById(`example-alt-textarea-${index}`).value;
        const newYouTubeLink = document.getElementById(`example-youtube-textarea-${index}`).value;
        exampleData.text = newExampleText;
        exampleData.alt = newExampleAlt;
        exampleData.youtube = newYouTubeLink;
        allWords[word].examples[index] = exampleData;
        saveCurrentWords();
        showDefinition(word);
        console.log("toggleEditExample: Changes saved!");
        editButton.innerText = "Edit";
    } else {
        exampleCaption.style.display = "none";
        exampleImage.style.display = "none";
        if(youtubeLink) youtubeLink.style.display = "none";
        exampleContainer.innerHTML = `
            <textarea id="example-textarea-${index}" rows="2">${exampleData.text}</textarea><br>
            <textarea id="example-alt-textarea-${index}" rows="1">${exampleData.alt}</textarea><br>
            <textarea id="example-youtube-textarea-${index}" rows="1" placeholder="YouTube link">${exampleData.youtube || ''}</textarea><br>
            <button class="remove-button" onclick="removeExample(${index})">Remove</button>
        `;
        editButton.innerText = "Save"; // Change button text to "Save"
    }
}

function removeExample(index) {
    const word = document.getElementById('word-title').innerText;
    allWords[word].examples.splice(index, 1); // Remove the example from the array
    saveCurrentWords();
    showDefinition(word); // Refresh the display
}

function addExample() {
    const examplesContainer = document.getElementById('examples');
    const newExampleDiv = document.createElement('div');
    newExampleDiv.classList.add('example');
    newExampleDiv.innerHTML = `
        <textarea id="new-example-textarea" rows="2" cols="40" placeholder="Usage example"></textarea><br>
        <textarea id="new-example-alt-textarea" rows="1" cols="40" placeholder="Image caption"></textarea><br>
        <textarea id="new-example-youtube-textarea" rows="1" cols="40" placeholder="YouTube link"></textarea><br>
        <button class="edit-example" onclick="saveNewExample()">Save</button><br>
    `;
    examplesContainer.appendChild(newExampleDiv);
    document.getElementById('definition-box').style.display = 'block'; // Keep the definition box visible
}

function saveNewExample() {
    const word = document.getElementById('word-title').innerText;
    const exampleText = document.getElementById('new-example-textarea').value;
    const exampleAlt = document.getElementById('new-example-alt-textarea').value;
    const exampleYouTube = document.getElementById('new-example-youtube-textarea').value;
    if (exampleText.trim() !== "") {
        if (!allWords[word]) {
            allWords[word] = { definition: "", examples: [] }; // Initialize if not exists
        }
        allWords[word].examples.push({
            text: exampleText, alt: exampleAlt, image: null, youtube: exampleYouTube
        });
        saveCurrentWords();
        showDefinition(word);
    } else {
        alert("Das Beispiel darf nicht leer sein.");
    }
}

function downloadCSV() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "state;word;definition;example1;image1;youtube1;example2;image2;youtube2;...\n"; // CSV header
    Object.keys(allWords).forEach(word => {
        const wordData = allWords[word];
        const examples = wordData.examples;
        const exampleEntries = examples.flatMap((example, index) => [
            example.text,
            example.alt,
            example.youtube || ''
        ]).join('";"');
        csvContent += `"${wordData.state}";"${word}";"${wordData.definition}";"${exampleEntries}"\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "words.csv");
    document.body.appendChild(link); // Required for Firefox
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up
}
function loadCurrentWords() {
    let csvContent = "state;word;definition;example1;image1;youtube1;example2;image2;youtube2;...\n"; // CSV header
    Object.keys(allWords).forEach(word => {
        const wordData = allWords[word];
        const examples = wordData.examples;
        const exampleEntries = examples.flatMap((example, index) => [
            example.text,
            example.alt,
            example.youtube || ''
        ]).join(';');
        if(typeof wordData.state == "undefined") wordData.state = "new";
        csvContent += `${wordData.state};${word};${wordData.definition};${exampleEntries}\n`;
    });
    document.getElementById('csv-input').value = csvContent.trim();
}
function updateWordsFromCSV(csvData) {
    const updatedWords = {};
    const lines = csvData.trim().split('\n');
    const startLineIndex = (lines[0].trim().startsWith('state;')) ? 1 : 0;
    for (let i = startLineIndex; i < lines.length; i++) {
        const line = lines[i];
        const regex = /(?:^|;)(?:"([^"]*)"|([^";]*))/g;
        const columns = line.match(regex)?.map(col => col.replace(/^"|"$/g, '').replace(/""/g, '"').replace(/;/g, '').trim());

        if (!columns || columns.length < 2) {
            console.warn(`Skipping line due to insufficient columns: ${line}`);
            continue; // Skip lines that don't have at least state and word
        }
        const state = columns[0].trim();
        const word = columns[1].trim().normalize('NFC');
        const definition = columns.length > 2 ? columns[2].trim() : '';
        const examples = [];
        for (let j = 3; j < columns.length; j += 3) {
            if (columns[j] && columns[j + 1]) {          
                let youtubeString  = columns[j + 2] || '';
                examples.push({
                    text: columns[j].trim(),
                    alt: columns[j + 1].trim(),
                    youtube: youtubeString.trim()
                });
            }
        }
        if (state.toLowerCase() !== "state") {
            updatedWords[word] = {
                state: state,
                definition: definition, 
                examples: examples 
            };
        }
    }
    allWords = updatedWords;
    saveCurrentWords();
    refreshWordList();
    alert("Words updated successfully!");
}
function handleCSVUpload(event) {
    const file = event.target.files[0]; 
    if (!file) {
        alert("Please select a CSV file to upload.");
        return;
    }
    const reader = new FileReader(); 
    reader.onload = function(e) {
        const csvData = e.target.result;
        updateWordsFromCSV(csvData); 
    };
    reader.readAsText(file); 
}
function uploadExampleImage(index, word) {
    document.getElementById(`image-upload-${index}`).click();
    document.getElementById(`image-upload-${index}`).onchange = function(event) {
        handleImageUpload(event, index, word);        
    };
}
function handleImageUpload(event, exampleId, word) {
    const file = event.target.files[0]; // Get the selected file
    if (!file) {
        alert("No file selected!");
        return;
    }
    if (!file.type.startsWith('image/')) {
        alert("Please upload a valid image file.");
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
        const imageDataUrl = e.target.result; // Get the image data URL
        saveImageToStorage(exampleId, word, imageDataUrl); // Call to save image in storage        
    };
    reader.readAsDataURL(file); // Read the file as a data URL
}
function saveImageToStorage(exampleId, word, imageDataUrl) {
    const storedImages = JSON.parse(localStorage.getItem('exampleImages')) || {};
    storedImages[currentLanguage + ";" + word + ";" + exampleId] = {
        image: imageDataUrl
    };
    localStorage.setItem('exampleImages', JSON.stringify(storedImages));
    alert("Image saved successfully for word: " + word);
    loadImages(word);
}
function renderImage(exampleId, imageDataUrl) {
    const imageContainer = document.getElementById(`example-image-${exampleId}`);
    if(!imageContainer) return;
    imageContainer.innerHTML = ''; // Clear previous images, if any
    const img = document.createElement('img');
    img.src = imageDataUrl; // Set the src to the uploaded image data URL
    img.alt = 'Uploaded Example Image'; // Optional alt text
    img.style.maxWidth = '300px'; // Limit width for better visibility
    img.style.display = 'block'; // Ensure the image displays as a block element
    img.style.marginTop = '10px'; // Add some margin for aesthetics
    imageContainer.appendChild(img);
}
function loadImages(word) {
    const storedImages = JSON.parse(localStorage.getItem('exampleImages')) || {};
    document.querySelectorAll('[id^="example-image-"]').forEach(container => {
        const exampleId = container.id.replace("example-image-", "");
        const imageRecord = storedImages[currentLanguage + ";" + word + ";" + exampleId]
            || (currentLanguage === "de" ? storedImages[word + ";" + exampleId] : null);
        if (imageRecord) renderImage(exampleId, imageRecord.image);
    });
}

function downloadAllImages() {
    const storedImages = JSON.parse(localStorage.getItem('exampleImages')) || {};
    const zip = new JSZip();
    const imgFolder = zip.folder("images"); // Create a folder for images in the ZIP file

    let promises = [];

    for (const key in storedImages) {
        const { image } = storedImages[key]; // Get the image data URL
        const fileName = `${key.replace(";", "_")}.png`; // Create a filename (replace semicolon for file name)
        const imgBlob = dataURLtoBlob(image);
        promises.push(imgFolder.file(fileName, imgBlob));
    }
    Promise.all(promises).then(() => {
        zip.generateAsync({ type: "blob" }).then(function(content) {
            // Create a link to download the ZIP file
            const link = document.createElement('a');
            link.href = URL.createObjectURL(content);
            link.download = "uploaded_images.zip"; // Name of the ZIP file
            document.body.appendChild(link);
            link.click(); // Trigger the download
            document.body.removeChild(link); // Clean up the link
        });
    });
}
function dataURLtoBlob(dataURL) {
    const byteString = atob(dataURL.split(',')[1]); // Decode base64
    const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0]; // Extract mime type
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i); // Populate byte array
    }
    return new Blob([ab], { type: mimeString }); // Create a blob
}
function initialize() {
    document.getElementById('load-words-button').onclick = loadCurrentWords;
    document.getElementById('update-words-button').onclick = function() {
        const csvInput = document.getElementById('csv-input').value;
        updateWordsFromCSV(csvInput);
    };
    document.getElementById('download-csv-button').onclick = downloadCSV;
    document.getElementById('add-example-button').onclick = addExample;      
    document.getElementById('edit-definition-button').onclick = toggleEditDefinition;   
    document.getElementById('toggle-words').onclick = function() {
       document.getElementById("options-menu").open = false;
       setTextActionState(null);
       const copyPasteContainer = document.querySelector('.words-container');    
       copyPasteContainer.style.display = 'block';
       const aboutContainer = document.querySelector('.about-container');  
       aboutContainer.style.display = 'none';
       const definitionBox = document.querySelector('.definition-box');
       definitionBox.style.display = 'none';
       const textContainer = document.querySelector('.text-container');
       textContainer.style.display = 'none';       
       loadCurrentWords()
    };
    document.getElementById('toggle-about').onclick = function() {
        document.getElementById("options-menu").open = false;
        setTextActionState(null);
        const aboutContainer = document.querySelector('.about-container');
        aboutContainer.style.display = 'block';
        const copyPasteContainer = document.querySelector('.words-container');    
        copyPasteContainer.style.display = 'none';
        const definitionBox = document.querySelector('.definition-box');
        definitionBox.style.display = 'none';   
        const textContainer = document.querySelector('.text-container');
        textContainer.style.display = 'none';
    };    
    document.getElementById('toggle-text').onclick = openTextManager;
    document.getElementById('toggle-text-about').onclick = function(event) {
        event.preventDefault();
        openTextManager();
    };
    document.getElementById('new-text-button').onclick = startNewTextEditor;
    document.getElementById('add-text-tab').onclick = function() {
        openTextManager();
        startNewTextEditor();
    };
    document.getElementById('save-text-button').onclick = saveTextFromEditor;
    document.getElementById('text-input').addEventListener('input', function() {
        document.getElementById('text-editor-error').hidden = true;
    });
    document.getElementById('cancel-text-edit').onclick = function() {
        if (!confirmDiscardTextEditorChanges()) return;
        document.getElementById('text-editor').hidden = true;
        editingTextId = null;
    };
    document.getElementById('text').addEventListener('click', function(event) {
        const sentence = event.target.closest('.text-sentence');
        const actionButton = event.target.closest('[data-sentence-action]');
        if (actionButton) {
            const sentenceIndex = Number(actionButton.closest('.text-sentence').dataset.sentenceIndex);
            if (actionButton.dataset.sentenceAction === 'play') {
                setActiveSentence(sentenceIndex);
                playText();
            } else if (actionButton.dataset.sentenceAction === 'sentence-mode') {
                stopTextPlayback();
                sentencePlaybackMode = !sentencePlaybackMode;
                renderTextDocument();
            } else if (actionButton.dataset.sentenceAction === 'stop') {
                stopTextPlayback();
            }
            return;
        }

        if (!sentence) return;
        const word = event.target.closest('.word');
        const wordText = word ? word.innerText : "";
        stopTextPlayback();
        setActiveSentence(Number(sentence.dataset.sentenceIndex));
        if (!word) return;

        showDefinition(wordText);
        document.querySelector('.words-container').style.display = 'none';
        document.querySelector('.about-container').style.display = 'none';
        document.querySelector('.text-container').style.display = 'none';
    });
    document.getElementById('text').addEventListener('keydown', function(event) {
        const sentence = event.target.closest('.text-sentence');
        if (!sentence || event.target !== sentence || (event.key !== 'Enter' && event.key !== ' ')) return;
        event.preventDefault();
        stopTextPlayback();
        setActiveSentence(Number(sentence.dataset.sentenceIndex));
    });
    document.getElementById('upload-link').onclick = function(event) {
        event.preventDefault(); 
        document.getElementById('csv-upload').click();
    };
    document.getElementById('csv-upload').addEventListener('change', handleCSVUpload);

    document.getElementById("learning-language-search").addEventListener("input", applyLearningLanguageSearch);
    document.getElementById("toggle-read").onclick = showReadView;
    document.getElementById("open-language-settings").onclick = openLearningLanguageSettings;
    document.getElementById("save-learning-language").onclick = saveLearningLanguage;
    document.getElementById("cancel-learning-language").onclick = cancelLearningLanguageChange;
    renderLearningLanguageOptions();
    showReadView();
    const firstRun = !hasSelectedLearningLanguage;
    document.getElementById("language-picker").hidden = !firstRun;
    document.getElementById("open-language-settings").setAttribute("aria-expanded", String(firstRun));
    document.getElementById("save-learning-language").textContent =
        firstRun ? "Start learning" : "Save language";
    document.getElementById("cancel-learning-language").hidden = firstRun;
    updateLanguageMenuLabel();
    applyLearningLanguageAttributes();
    refreshWordList();
    renderSavedTextList();

}

initialize();


