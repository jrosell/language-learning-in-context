
const learningLanguages = {
    de: {
        label: "Deutsch",
        searchLabels: ["Deutsch","German"],
        locale: "de-DE",
        wiktionary: "de",
        direction: "ltr",
        legacySample: "Guten Tag!",
        previousSample: [
            "—Guten Morgen!",
            "—Hallo, wie heißt du?",
            "—Ich heiße Alex. Und du?",
            "—Ich heiße Mia. Freut mich!",
            "—Mich auch. Bist du neu hier?",
            "—Ja, heute ist mein erster Tag.",
            "—Für mich auch.",
            "—Bist du Schüler?",
            "—Ja, ich bin Schüler. Ich bin etwas nervös.",
            "—Ich auch.",
            "—Warum?",
            "—Weil ich niemanden kenne.",
            "—Jetzt kennst du mich!",
            "—Stimmt. Wie geht es dir jetzt?",
            "—Besser, danke. Wo ist die Lehrerin?",
            "—Sie ist hier.",
            "—Wo? Ich sehe sie nicht.",
            "—Das bin ich!",
            "—Sie sind die Lehrerin?",
            "—Ja, ich bin die Lehrerin.",
            "—Und Sie sind auch nervös?",
            "—Ja, es ist auch mein erster Tag.",
            "—Dann lernen wir heute beide!",
            "—Ja, willkommen im Unterricht!"
        ].join("\n\n"),
        sample: [
            "[Laura] Guten Morgen! Wie heißt du?",
            "[Marta] Guten Morgen! Ich bin Marta. Ich bin Schülerin.",
            "[Laura] Willkommen, Marta! Ich bin Laura. Ich bin Lehrerin."
        ].join("\n\n")
    },
    en: {
        label: "English",
        searchLabels: ["English"],
        locale: "en",
        wiktionary: "en",
        direction: "ltr",
        legacySample: "Hello!",
        previousSample: [
            "—Good morning!",
            "—Hello, what's your name?",
            "—My name is Alex. And you?",
            "—My name is Mia. Nice to meet you!",
            "—Nice to meet you too. Are you new here?",
            "—Yes, today is my first day.",
            "—Mine too.",
            "—Are you a student?",
            "—Yes, I'm a student. I'm a little nervous.",
            "—Me too.",
            "—Why?",
            "—Because I don't know anyone.",
            "—Now you know me!",
            "—That's true. How are you feeling now?",
            "—Better, thank you. Where is the teacher?",
            "—She's here.",
            "—Where? I can't see her.",
            "—It's me!",
            "—You're the teacher?",
            "—Yes, I'm the teacher.",
            "—And you're nervous too?",
            "—Yes, it's my first day too.",
            "—Then we're both learning today!",
            "—Yes, welcome to class!"
        ].join("\n\n"),
        sample: [
            "[Laura] Good morning! What's your name?",
            "[Marta] Good morning! I'm Marta. I'm a student.",
            "[Laura] Welcome, Marta! I'm Laura. I'm a teacher."
        ].join("\n\n")
    },
    ca: {
        label: "Català",
        searchLabels: ["Català","Catalan"],
        locale: "ca-ES",
        wiktionary: "ca",
        direction: "ltr",
        legacySample: "Bon dia. Com estàs avui?",
        previousSample: [
            "—Bon dia!",
            "—Hola, com et dius?",
            "—Em dic Àlex. I tu?",
            "—Em dic Mia. Encantada!",
            "—Encantat. Ets nova aquí?",
            "—Sí, avui és el meu primer dia.",
            "—El meu també.",
            "—Ets estudiant?",
            "—Sí, soc estudiant. Estic una mica nerviós.",
            "—Jo també.",
            "—Per què?",
            "—Perquè no conec ningú.",
            "—Ara ja em coneixes a mi!",
            "—És veritat. Com estàs ara?",
            "—Millor, gràcies. On és la professora?",
            "—És aquí.",
            "—On? No la veig.",
            "—Soc jo!",
            "—Tu ets la professora?",
            "—Sí, soc la professora.",
            "—I també estàs nerviosa?",
            "—Sí, per a mi també és el primer dia.",
            "—Doncs avui aprenem tots dos!",
            "—Sí, benvingut a classe!"
        ].join("\n\n"),
        sample: [
            "[Laura] Bon dia! Com et dius?",
            "[Marta] Bon dia! Soc la Marta. Soc estudiant.",
            "[Laura] Benvinguda, Marta! Soc la Laura. Soc mestra."
        ].join("\n\n")
    },
    vi: {
        label: "Tiếng Việt",
        searchLabels: ["Tiếng Việt","Vietnamese"],
        locale: "vi-VN",
        wiktionary: "vi",
        direction: "ltr",
        legacySample: "Xin chào!",
        previousSample: [
            "—Chào buổi sáng!",
            "—Chào bạn, bạn tên là gì?",
            "—Mình tên là Alex. Còn bạn?",
            "—Mình tên là Mia. Rất vui được gặp bạn!",
            "—Mình cũng vậy. Bạn mới đến đây à?",
            "—Ừ, hôm nay là ngày đầu tiên của mình.",
            "—Mình cũng vậy.",
            "—Bạn là học sinh à?",
            "—Ừ, mình là học sinh. Mình hơi lo.",
            "—Mình cũng vậy.",
            "—Tại sao?",
            "—Vì mình không quen ai cả.",
            "—Bây giờ bạn quen mình rồi!",
            "—Đúng rồi. Bây giờ bạn thấy thế nào?",
            "—Đỡ hơn rồi, cảm ơn bạn. Cô giáo ở đâu?",
            "—Cô ấy ở đây.",
            "—Ở đâu? Mình không thấy cô ấy.",
            "—Là mình đây!",
            "—Cô là cô giáo ạ?",
            "—Đúng rồi, cô là cô giáo.",
            "—Cô cũng lo ạ?",
            "—Ừ, hôm nay cũng là ngày đầu tiên của cô.",
            "—Vậy hôm nay cả hai cùng học ạ!",
            "—Đúng rồi, chào mừng em đến lớp!"
        ].join("\n\n"),
        sample: [
            "[Laura] Chào buổi sáng! Bạn tên là gì?",
            "[Marta] Chào buổi sáng! Tôi là Marta. Tôi là học sinh.",
            "[Laura] Chào mừng bạn, Marta! Tôi là Laura. Tôi là cô giáo."
        ].join("\n\n")
    },
    zh: {
        label: "中文（简体）",
        searchLabels: ["中文","简体中文","Chinese","Chinese Simplified"],
        locale: "zh-CN",
        wiktionary: "zh",
        direction: "ltr",
        legacySample: "你好！",
        previousSample: [
            "—早上好！",
            "—你好，你叫什么名字？",
            "—我叫亚历克斯，你呢？",
            "—我叫米娅，很高兴认识你！",
            "—我也很高兴，你是新来的吗？",
            "—是的，今天是我的第一天。",
            "—我也是。",
            "—你是学生吗？",
            "—是的，我是学生，我有点紧张。",
            "—我也是。",
            "—为什么？",
            "—因为我谁也不认识。",
            "—现在你认识我了！",
            "—是啊，你现在感觉怎么样？",
            "—好一点了，谢谢，老师在哪里？",
            "—她就在这里。",
            "—在哪里？我没看见她。",
            "—就是我！",
            "—您是老师？",
            "—是的，我是老师。",
            "—您也紧张吗？",
            "—是的，今天也是我的第一天。",
            "—那我们今天都要学习了！",
            "—是的，欢迎来上课！"
        ].join("\n\n"),
        sample: [
            "[Laura] 早上好！你叫什么名字？",
            "[Marta] 早上好！我是玛尔塔。我是学生。",
            "[Laura] 欢迎你，玛尔塔！我是劳拉。我是老师。"
        ].join("\n\n")
    },
    ar: {
        label: "العربية",
        searchLabels: ["العربية","Arabic"],
        locale: "ar",
        wiktionary: "ar",
        direction: "rtl",
        legacySample: "مرحبًا!",
        previousSample: [
            "—صباح الخير!",
            "—مرحبًا، ما اسمك؟",
            "—اسمي أليكس. وأنتِ؟",
            "—اسمي ميا. تشرفت بمعرفتك!",
            "—وأنا أيضًا. هل أنتِ جديدة هنا؟",
            "—نعم، اليوم هو يومي الأول.",
            "—وأنا أيضًا.",
            "—هل أنت طالب؟",
            "—نعم، أنا طالب. أنا متوتر قليلًا.",
            "—وأنا أيضًا.",
            "—لماذا؟",
            "—لأنني لا أعرف أحدًا.",
            "—الآن تعرفينني!",
            "—صحيح. كيف تشعر الآن؟",
            "—أفضل، شكرًا. أين المعلمة؟",
            "—هي هنا.",
            "—أين؟ لا أراها.",
            "—أنا هي!",
            "—أنتِ المعلمة؟",
            "—نعم، أنا المعلمة.",
            "—وأنتِ متوترة أيضًا؟",
            "—نعم، إنه يومي الأول أيضًا.",
            "—إذن نتعلم معًا اليوم!",
            "—نعم، أهلًا بك في الصف!"
        ].join("\n\n"),
        sample: [
            "[Laura] صباح الخير! ما اسمكِ؟",
            "[Marta] صباح الخير! أنا مارتا. أنا طالبة.",
            "[Laura] أهلًا بكِ، مارتا! أنا لورا. أنا معلمة."
        ].join("\n\n")
    },
    ur: {
        label: "اردو",
        searchLabels: ["اردو","Urdu"],
        locale: "ur-PK",
        wiktionary: "ur",
        direction: "rtl",
        legacySample: "السلام علیکم!",
        previousSample: [
            "—صبح بخیر!",
            "—سلام، تمہارا نام کیا ہے؟",
            "—میرا نام الیکس ہے۔ تمہارا؟",
            "—میرا نام میا ہے۔ تم سے مل کر خوشی ہوئی!",
            "—مجھے بھی۔ کیا تم یہاں نئی ہو؟",
            "—ہاں، آج میرا پہلا دن ہے۔",
            "—میرا بھی۔",
            "—کیا تم طالب علم ہو؟",
            "—ہاں، میں طالب علم ہوں۔ میں تھوڑا گھبرایا ہوا ہوں۔",
            "—میں بھی۔",
            "—کیوں؟",
            "—کیونکہ میں کسی کو نہیں جانتی۔",
            "—اب تم مجھے جانتی ہو!",
            "—یہ تو سچ ہے۔ اب تم کیسا محسوس کر رہے ہو؟",
            "—بہتر، شکریہ۔ استانی کہاں ہیں؟",
            "—وہ یہیں ہیں۔",
            "—کہاں؟ مجھے وہ نظر نہیں آ رہیں۔",
            "—میں ہی ہوں!",
            "—آپ استانی ہیں؟",
            "—ہاں، میں استانی ہوں۔",
            "—کیا آپ بھی گھبرائی ہوئی ہیں؟",
            "—ہاں، میرا بھی پہلا دن ہے۔",
            "—تو آج ہم دونوں سیکھیں گے!",
            "—ہاں، کلاس میں خوش آمدید!"
        ].join("\n\n"),
        sample: [
            "[Laura] صبح بخیر! تمہارا نام کیا ہے؟",
            "[Marta] صبح بخیر! میں مارتا ہوں۔ میں طالبہ ہوں۔",
            "[Laura] خوش آمدید، مارتا! میں لورا ہوں۔ میں استانی ہوں۔"
        ].join("\n\n")
    },
    ru: {
        label: "Русский",
        searchLabels: ["Русский","Russian"],
        locale: "ru-RU",
        wiktionary: "ru",
        direction: "ltr",
        legacySample: "Привет!",
        previousSample: [
            "—Доброе утро!",
            "—Привет, как тебя зовут?",
            "—Меня зовут Алекс. А тебя?",
            "—Меня зовут Мия. Приятно познакомиться!",
            "—Мне тоже. Ты здесь новенькая?",
            "—Да, сегодня мой первый день.",
            "—У меня тоже.",
            "—Ты ученик?",
            "—Да, я ученик. Я немного волнуюсь.",
            "—Я тоже.",
            "—Почему?",
            "—Потому что я никого не знаю.",
            "—Теперь ты знаешь меня!",
            "—Верно. Как ты сейчас себя чувствуешь?",
            "—Лучше, спасибо. Где учительница?",
            "—Она здесь.",
            "—Где? Я её не вижу.",
            "—Это я!",
            "—Вы учительница?",
            "—Да, я учительница.",
            "—И вы тоже волнуетесь?",
            "—Да, у меня тоже первый день.",
            "—Значит, сегодня мы оба учимся!",
            "—Да, добро пожаловать на урок!"
        ].join("\n\n"),
        sample: [
            "[Laura] Доброе утро! Как тебя зовут?",
            "[Marta] Доброе утро! Я Марта. Я ученица.",
            "[Laura] Добро пожаловать, Марта! Я Лаура. Я учительница."
        ].join("\n\n")
    },
    hi: {
        label: "हिन्दी",
        searchLabels: ["हिन्दी","हिंदी","Hindi"],
        locale: "hi-IN",
        wiktionary: "hi",
        direction: "ltr",
        legacySample: "नमस्ते!",
        previousSample: [
            "—नमस्ते!",
            "—नमस्ते, तुम्हारा नाम क्या है?",
            "—मेरा नाम एलेक्स है। और तुम्हारा?",
            "—मेरा नाम मिया है। तुमसे मिलकर अच्छा लगा!",
            "—मुझे भी। क्या तुम यहाँ नई हो?",
            "—हाँ, आज मेरा पहला दिन है।",
            "—मेरा भी।",
            "—क्या तुम छात्र हो?",
            "—हाँ, मैं छात्र हूँ। मैं थोड़ा घबराया हुआ हूँ।",
            "—मैं भी।",
            "—क्यों?",
            "—क्योंकि मैं किसी को नहीं जानती।",
            "—अब तुम मुझे जानती हो!",
            "—सही कहा। अब तुम्हें कैसा लग रहा है?",
            "—बेहतर, धन्यवाद। शिक्षिका कहाँ हैं?",
            "—वह यहीं हैं।",
            "—कहाँ? मुझे वह दिखाई नहीं दे रहीं।",
            "—वह मैं हूँ!",
            "—आप शिक्षिका हैं?",
            "—हाँ, मैं शिक्षिका हूँ।",
            "—और आप भी घबराई हुई हैं?",
            "—हाँ, मेरा भी पहला दिन है।",
            "—तो आज हम दोनों सीखेंगे!",
            "—हाँ, कक्षा में तुम्हारा स्वागत है!"
        ].join("\n\n"),
        sample: [
            "[Laura] सुप्रभात! तुम्हारा नाम क्या है?",
            "[Marta] सुप्रभात! मैं मार्टा हूँ। मैं छात्रा हूँ।",
            "[Laura] स्वागत है, मार्टा! मैं लौरा हूँ। मैं शिक्षिका हूँ।"
        ].join("\n\n")
    },
    fr: {
        label: "Français",
        searchLabels: ["Français","French"],
        locale: "fr-FR",
        wiktionary: "fr",
        direction: "ltr",
        legacySample: "Bonjour !",
        previousSample: [
            "—Bonjour !",
            "—Salut, comment tu t'appelles ?",
            "—Je m'appelle Alex. Et toi ?",
            "—Je m'appelle Mia. Enchantée !",
            "—Enchanté. Tu es nouvelle ici ?",
            "—Oui, c'est mon premier jour.",
            "—Moi aussi.",
            "—Tu es élève ?",
            "—Oui, je suis élève. Je suis un peu nerveux.",
            "—Moi aussi.",
            "—Pourquoi ?",
            "—Parce que je ne connais personne.",
            "—Maintenant, tu me connais !",
            "—C'est vrai. Comment tu te sens maintenant ?",
            "—Mieux, merci. Où est la professeure ?",
            "—Elle est ici.",
            "—Où ? Je ne la vois pas.",
            "—C'est moi !",
            "—Vous êtes la professeure ?",
            "—Oui, je suis la professeure.",
            "—Et vous êtes nerveuse aussi ?",
            "—Oui, c'est aussi mon premier jour.",
            "—Alors, on apprend tous les deux aujourd'hui !",
            "—Oui, bienvenue en classe !"
        ].join("\n\n"),
        sample: [
            "[Laura] Bonjour ! Comment tu t'appelles ?",
            "[Marta] Bonjour ! Je suis Marta. Je suis élève.",
            "[Laura] Bienvenue, Marta ! Je suis Laura. Je suis enseignante."
        ].join("\n\n")
    },
    es: {
        label: "Español",
        searchLabels: ["Español","Spanish"],
        locale: "es-ES",
        wiktionary: "es",
        direction: "ltr",
        legacySample: "¡Hola!",
        previousSample: [
            "—¡Buenos días!",
            "—Hola, ¿cómo te llamas?",
            "—Me llamo Álex. ¿Y tú?",
            "—Me llamo Mia. ¡Encantada!",
            "—Encantado. ¿Eres nueva aquí?",
            "—Sí, hoy es mi primer día.",
            "—El mío también.",
            "—¿Eres estudiante?",
            "—Sí, soy estudiante. Estoy un poco nervioso.",
            "—Yo también.",
            "—¿Por qué?",
            "—Porque no conozco a nadie.",
            "—¡Ahora ya me conoces a mí!",
            "—Es verdad. ¿Cómo estás ahora?",
            "—Mejor, gracias. ¿Dónde está la profesora?",
            "—Está aquí.",
            "—¿Dónde? No la veo.",
            "—¡Soy yo!",
            "—¿Tú eres la profesora?",
            "—Sí, soy la profesora.",
            "—¿Y tú también estás nerviosa?",
            "—Sí, para mí también es el primer día.",
            "—¡Pues hoy aprendemos los dos!",
            "—¡Sí, bienvenido a clase!"
        ].join("\n\n"),
        sample: [
            "[Laura] ¡Buenos días! ¿Cómo te llamas?",
            "[Marta] ¡Buenos días! Soy Marta. Soy estudiante.",
            "[Laura] ¡Bienvenida, Marta! Soy Laura. Soy maestra."
        ].join("\n\n")
    },
    fil: {
        label: "Filipino",
        searchLabels: ["Filipino"],
        locale: "fil-PH",
        wiktionary: "tl",
        direction: "ltr",
        legacySample: "Kumusta!",
        previousSample: [
            "—Magandang umaga!",
            "—Kumusta, ano ang pangalan mo?",
            "—Alex ang pangalan ko. Ikaw?",
            "—Mia ang pangalan ko. Masaya akong makilala ka!",
            "—Ako rin. Bago ka ba rito?",
            "—Oo, unang araw ko ngayon.",
            "—Ako rin.",
            "—Estudyante ka ba?",
            "—Oo, estudyante ako. Medyo kinakabahan ako.",
            "—Ako rin.",
            "—Bakit?",
            "—Dahil wala akong kakilala.",
            "—Kilala mo na ako ngayon!",
            "—Tama. Kumusta ka na ngayon?",
            "—Mas mabuti na, salamat. Nasaan ang guro?",
            "—Narito siya.",
            "—Saan? Hindi ko siya makita.",
            "—Ako iyon!",
            "—Kayo po ang guro?",
            "—Oo, ako ang guro.",
            "—Kinakabahan din po kayo?",
            "—Oo, unang araw ko rin.",
            "—Kung ganoon, pareho tayong matututo ngayon!",
            "—Oo, maligayang pagdating sa klase!"
        ].join("\n\n"),
        sample: [
            "[Laura] Magandang umaga! Ano ang pangalan mo?",
            "[Marta] Magandang umaga! Ako si Marta. Estudyante ako.",
            "[Laura] Maligayang pagdating, Marta! Ako si Laura. Guro ako."
        ].join("\n\n")
    }
};

const savedLanguage = localStorage.getItem("learning_language");
let currentLanguage = learningLanguages[savedLanguage] ? savedLanguage : "en";
let hasSelectedLearningLanguage = Boolean(learningLanguages[savedLanguage]);
let pendingLanguage = currentLanguage;
const TEXT_DOCUMENTS_STORAGE_KEY = "language_learning_text_documents_v1";
const OPEN_TEXT_IDS_STORAGE_KEY = "language_learning_open_text_ids_v1";
const ACTIVE_TEXT_ID_STORAGE_KEY = "language_learning_active_text_id_v1";

function uiText(key, values = {}, languageCode = currentLanguage) {
    const translations = window.uiTranslations || {};
    const dictionary = translations[languageCode] || translations.en || {};
    const template = dictionary[key] || (translations.en && translations.en[key]) || key;
    return String(template).replace(/\{(\w+)\}/g, (match, name) =>
        Object.prototype.hasOwnProperty.call(values, name) ? String(values[name]) : match
    );
}

function applyInterfaceLanguage() {
    const language = learningLanguages[currentLanguage];
    document.documentElement.lang = language.locale;
    document.documentElement.dir = language.direction;
    document.title = uiText("appTitle");

    document.querySelectorAll("[data-i18n]").forEach(element => {
        element.textContent = uiText(element.dataset.i18n);
    });

    ["placeholder", "aria-label", "title"].forEach(attribute => {
        document.querySelectorAll("[data-i18n-" + attribute + "]").forEach(element => {
            const key = element.getAttribute("data-i18n-" + attribute);
            element.setAttribute(attribute, uiText(key));
        });
    });
    updateLanguageMenuLabel();
}

function createTextId() {
    return "text-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function getWelcomeDialogueBody(content) {
    return String(content).trim().split(/\r?\n\s*\r?\n/u)
        .map(paragraph => paragraph.replace(/^\s*(?:\[[^\]\r\n]+\]|[^:\r\n：]+[:：])\s*/u, ""))
        .join("\n\n");
}

function loadTextDocuments() {
    try {
        const savedDocuments = JSON.parse(localStorage.getItem(TEXT_DOCUMENTS_STORAGE_KEY));
        if (Array.isArray(savedDocuments) && savedDocuments.length) {
            const documents = savedDocuments
                .filter(document => document && typeof document.content === "string")
                .map(document => ({
                    id: String(document.id || createTextId()),
                    title: String(document.title || uiText("untitledText")),
                    content: document.content,
                    activeSentenceIndex: Number.isInteger(document.activeSentenceIndex)
                        ? Math.max(0, document.activeSentenceIndex)
                        : 0,
                    isStarter: Boolean(document.isStarter)
                }));
            if (documents.length) {
                const legacySamples = new Set(Object.values(learningLanguages)
                    .flatMap(language => [language.legacySample, language.previousSample]));
                const welcomeDialogueBodies = new Set(Object.values(learningLanguages)
                    .map(language => getWelcomeDialogueBody(language.sample)));
                let upgraded = false;
                documents.forEach(document => {
                    const isLegacyWelcome = legacySamples.has(document.content.trim());
                    const isPreviousSpeakerFormat = welcomeDialogueBodies.has(getWelcomeDialogueBody(document.content));
                    if (document.isStarter && (isLegacyWelcome || isPreviousSpeakerFormat)) {
                        document.content = learningLanguages[currentLanguage].sample;
                        document.activeSentenceIndex = 0;
                        upgraded = true;
                    }
                });
                if (upgraded) {
                    try {
                        localStorage.setItem(TEXT_DOCUMENTS_STORAGE_KEY, JSON.stringify(documents));
                    } catch (error) {
                        console.warn("Could not save the updated welcome text.", error);
                    }
                }
                return documents;
            }
        }
    } catch (error) {
        console.warn("Could not read saved texts.", error);
    }

    return [{
        id: createTextId(),
        title: uiText("welcomeTitle"),
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
    return !hasUnsavedTextEditorChanges() || window.confirm(uiText("discardChanges"));
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
    document.getElementById("language-menu-label").textContent = uiText("languageMenuLabel");
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
        option.dataset.searchText = normalizeLanguageSearch(
            [language.label].concat(language.searchLabels || []).join(" ")
        );

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

function showReadView() {
    document.querySelectorAll(".mobile-sheet").forEach(panel => setMobileSheetExpanded(panel, false));
    [".about-container", ".text-container", ".words-container", ".definition-box"].forEach(selector => {
        const panel = document.querySelector(selector);
        if (panel) panel.style.display = "none";
    });
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
        firstRun ? uiText("chooseLanguage") : uiText("changeLanguage");
    document.getElementById("save-learning-language").textContent =
        firstRun ? uiText("startLearning") : uiText("saveLanguage");
    document.getElementById("cancel-learning-language").hidden = firstRun;
    document.getElementById("language-picker").hidden = false;
    document.getElementById("open-language-settings").setAttribute("aria-expanded", "true");
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

    const previousLanguage = currentLanguage;
    const oldSample = learningLanguages[previousLanguage].sample;
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
    if (untouchedWelcomeText) {
        untouchedWelcomeText.content = newSample;
        if (previousLanguage !== currentLanguage) untouchedWelcomeText.activeSentenceIndex = 0;
        const defaultWelcomeTitles = Object.values(window.uiTranslations || {})
            .map(translations => translations.welcomeTitle);
        if (defaultWelcomeTitles.includes(untouchedWelcomeText.title)) {
            untouchedWelcomeText.title = uiText("welcomeTitle");
        }
    }
    saveTextWorkspace();

    resetLanguagePickerSearch();
    document.getElementById("language-picker").hidden = true;
    document.getElementById("open-language-settings").setAttribute("aria-expanded", "false");
    document.getElementById("definition-box").style.display = "none";
    applyInterfaceLanguage();
    applyLearningLanguageAttributes();
    refreshWordList();

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
        rawSegments = text.match(/[^.!?。！？؟۔।]+[.!?。！？؟۔।]*\s*/g) || [text];
    }

    const sentences = [];
    let pendingWhitespace = "";
    rawSegments.forEach(segment => {
        if (!segment.trim()) {
            pendingWhitespace += segment;
            return;
        }
        const prefix = (segment.match(/^\s*/) || [""])[0];
        const trailing = (segment.match(/\s*$/) || [""])[0];
        const end = segment.length - trailing.length;
        const segmentText = segment.slice(prefix.length, end);
        const speakerMatch = segmentText.match(/^\[([^\]\r\n]+)\]\s*/u);
        const sentence = {
            leading: pendingWhitespace + prefix,
            text: speakerMatch ? segmentText.slice(speakerMatch[0].length) : segmentText,
            trailing
        };
        if (speakerMatch) sentence.speaker = speakerMatch[1].trim();
        sentences.push(sentence);
        pendingWhitespace = trailing;
    });
    return sentences;
}

function getTextTitle(content) {
    const firstSentence = splitTextIntoSentences(content)[0];
    const title = firstSentence ? firstSentence.text.trim() : uiText("untitledText");
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
        closeButton.setAttribute("aria-label", uiText("closeTab", { title: textDocument.title }));
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
        emptyMessage.textContent = uiText("noTextOpen");
        textElement.appendChild(emptyMessage);
        return;
    }

    titleElement.textContent = textDocument.title;
    const sentences = splitTextIntoSentences(textDocument.content);
    if (!sentences.length) {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-text-message";
        emptyMessage.textContent = uiText("emptyText");
        textElement.appendChild(emptyMessage);
        return;
    }

    textDocument.activeSentenceIndex = Math.min(textDocument.activeSentenceIndex, sentences.length - 1);
    sentences.forEach((sentence, index) => {
        const sentenceElement = document.createElement("div");
        sentenceElement.className = "text-sentence";
        if (index > 0 && /\r?\n\s*\r?\n/.test(sentence.leading)) {
            sentenceElement.classList.add("text-sentence--paragraph-start");
        }
        sentenceElement.dataset.sentenceIndex = String(index);
        sentenceElement.tabIndex = 0;
        sentenceElement.setAttribute("role", "group");
        sentenceElement.setAttribute("aria-label", uiText("sentence", { number: index + 1 }));
        sentenceElement.setAttribute("aria-current", String(index === textDocument.activeSentenceIndex));
        if (index === textDocument.activeSentenceIndex) sentenceElement.classList.add("is-active");

        const sentenceBody = document.createElement("span");
        sentenceBody.className = "text-sentence__body";
        if (sentence.speaker) {
            const speakerLabel = document.createElement("span");
            speakerLabel.className = "text-sentence__speaker";
            speakerLabel.dir = "ltr";
            speakerLabel.textContent = sentence.speaker + ":";
            sentenceBody.appendChild(speakerLabel);
        }

        const sentenceText = document.createElement("span");
        sentenceText.className = "text-sentence__content";
        sentenceText.innerHTML = makeWordsClickable(sentence.text);
        sentenceBody.appendChild(sentenceText);

        const controls = document.createElement("span");
        controls.className = "sentence-controls";
        const isActiveSentence = index === textDocument.activeSentenceIndex;
        controls.setAttribute("aria-hidden", String(!isActiveSentence));
        controls.inert = !isActiveSentence;

        const playButton = document.createElement("button");
        playButton.type = "button";
        playButton.className = "sentence-controls__play";
        playButton.dataset.sentenceAction = "play";
        playButton.setAttribute("aria-label", sentencePlaybackMode
            ? uiText("playSentence")
            : uiText("playText"));
        playButton.textContent = "▶ " + uiText("play");

        const sentenceModeButton = document.createElement("button");
        sentenceModeButton.type = "button";
        sentenceModeButton.className = "sentence-controls__repeat";
        sentenceModeButton.dataset.sentenceAction = "sentence-mode";
        sentenceModeButton.setAttribute("aria-label", uiText("toggleSentenceMode"));
        sentenceModeButton.setAttribute("aria-pressed", String(sentencePlaybackMode));
        sentenceModeButton.title = sentencePlaybackMode
            ? uiText("sentenceModeOn")
            : uiText("sentenceModeOff");
        sentenceModeButton.textContent = "↻";
        sentenceModeButton.classList.toggle("is-selected", sentencePlaybackMode);

        const stopButton = document.createElement("button");
        stopButton.type = "button";
        stopButton.className = "sentence-controls__stop";
        stopButton.dataset.sentenceAction = "stop";
        stopButton.setAttribute("aria-label", uiText("stop"));
        stopButton.textContent = "■ " + uiText("stop");

        controls.append(playButton, sentenceModeButton, stopButton);
        sentenceElement.append(sentenceBody, controls);
        textElement.appendChild(sentenceElement);
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
        openButton.textContent = uiText("read");
        openButton.addEventListener("click", () => openTextDocument(textDocument.id));

        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.textContent = uiText("edit");
        editButton.addEventListener("click", () => editTextDocument(textDocument.id));

        actions.append(openButton, editButton);
        if (!textDocument.isStarter) {
            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.className = "saved-text-list__delete";
            deleteButton.textContent = uiText("delete");
            deleteButton.setAttribute("aria-label", uiText("delete") + ": " + textDocument.title);
            deleteButton.addEventListener("click", () => deleteTextDocument(textDocument.id));
            actions.appendChild(deleteButton);
        }
        item.append(title, actions);
        list.appendChild(item);
    });
}

function deleteTextDocument(id) {
    const textDocument = textDocuments.find(document => document.id === id);
    if (!textDocument || textDocument.isStarter) return;
    if (editingTextId === id && !confirmDiscardTextEditorChanges()) return;
    if (!window.confirm(uiText("deleteConfirm", { title: textDocument.title }))) return;

    stopTextPlayback();
    textDocuments = textDocuments.filter(document => document.id !== id);
    openTextIds = openTextIds.filter(openId => openId !== id);
    if (activeTextId === id) activeTextId = openTextIds[0] || null;
    if (editingTextId === id) {
        editingTextId = null;
        document.getElementById("text-editor").hidden = true;
    }
    saveTextWorkspace();
    renderTextTabs();
    renderTextDocument();
    renderSavedTextList();
}

function setMobileSheetExpanded(panel, expanded) {
    if (!panel) return;
    panel.classList.toggle("is-expanded", expanded);
    const handle = panel.querySelector(".mobile-sheet__handle");
    if (handle) handle.setAttribute("aria-expanded", String(expanded));
}

function initializeMobileSheetHandles() {
    document.querySelectorAll(".mobile-sheet__handle").forEach(handle => {
        const panel = handle.closest(".mobile-sheet");
        let startY = null;
        let ignoreClick = false;

        handle.addEventListener("pointerdown", event => {
            if (event.pointerType === "mouse" && event.button !== 0) return;
            startY = event.clientY;
            handle.setPointerCapture(event.pointerId);
        });
        handle.addEventListener("pointerup", event => {
            if (startY === null) return;
            const movement = event.clientY - startY;
            startY = null;
            if (Math.abs(movement) < 40) return;

            setMobileSheetExpanded(panel, movement < 0);
            ignoreClick = true;
            window.setTimeout(() => {
                ignoreClick = false;
            }, 0);
        });
        handle.addEventListener("pointercancel", () => {
            startY = null;
        });
        handle.addEventListener("click", () => {
            if (ignoreClick) {
                ignoreClick = false;
                return;
            }
            setMobileSheetExpanded(panel, handle.getAttribute("aria-expanded") !== "true");
        });
    });
}

function openTextManager() {
    setMobileSheetExpanded(document.querySelector(".text-container"), false);
    stopTextPlayback();
    document.querySelector(".text-container").style.display = "block";
    document.querySelector(".words-container").style.display = "none";
    document.querySelector(".about-container").style.display = "none";
    document.querySelector(".definition-box").style.display = "none";
    renderSavedTextList();
}

function closeTextManager() {
    if (!confirmDiscardTextEditorChanges()) return;
    setMobileSheetExpanded(document.querySelector(".text-container"), false);
    document.getElementById("text-editor").hidden = true;
    editingTextId = null;
    showReadView();
}

function startNewTextEditor() {
    if (!confirmDiscardTextEditorChanges()) return;
    editingTextId = null;
    document.getElementById("text-editor-error").hidden = true;
    document.getElementById("text-editor-heading").textContent = uiText("newText");
    document.getElementById("text-title-input").value = "";
    document.getElementById("text-input").value = "";
    document.getElementById("save-text-button").textContent = uiText("saveAndOpen");
    document.getElementById("text-editor").hidden = false;
    document.getElementById("text-title-input").focus();
}

function editTextDocument(id) {
    if (!confirmDiscardTextEditorChanges()) return;
    const textDocument = textDocuments.find(document => document.id === id);
    if (!textDocument) return;
    editingTextId = id;
    document.getElementById("text-editor-error").hidden = true;
    document.getElementById("text-editor-heading").textContent = uiText("editText");
    document.getElementById("text-title-input").value = textDocument.title;
    document.getElementById("text-input").value = textDocument.content;
    document.getElementById("save-text-button").textContent = uiText("saveChanges");
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
    document.getElementById('wiktionary').innerHTML = `<a class="edit-button" href="https://${learningLanguages[currentLanguage].wiktionary}.wiktionary.org/w/index.php?search=${encodeURIComponent(wordText)}" target="_blank" rel="noopener">${uiText("openWiktionary")}</a>`;
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
            <button class="edit-example" id="edit-example-${index}" onclick="toggleEditExample(${index})">${uiText("edit")}</button>
            <p class="image"><a href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(example.alt)}" target="_blank" class="edit-button">${uiText("googleImages")}</a></p>
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
                <input type="radio" name="wordState" value="new" ${wordData.state === 'new' ? 'checked' : ''}> ${uiText("newWord")}
            </label>
            <label class="learning-word">
                <input type="radio" name="wordState" value="learning" ${wordData.state === 'learning' ? 'checked' : ''}> ${uiText("learningWord")}
            </label>
            <label class="learned-word">
                <input type="radio" name="wordState" value="learned" ${wordData.state === 'learned' ? 'checked' : ''}> ${uiText("learnedWord")}
            </label>
        </div>
    `;
    stateContainer.querySelectorAll('input[name="wordState"]').forEach(input => {
        input.addEventListener('change', () => saveWordState(wordText));
    });
    updateWordColor(wordText, wordData.state);
    setMobileSheetExpanded(document.getElementById("definition-box"), false);
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
    if (editButton.innerText === uiText("edit")) {
        editButton.innerText = uiText("save");
        definitionText.innerHTML = `<textarea id="definition-edit" rows="3">${definitionText.innerText}</textarea>`;
    } else {
        editButton.innerText = uiText("edit");
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
    if (editButton.innerText === uiText("save")) {
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
        editButton.innerText = uiText("edit");
    } else {
        exampleCaption.style.display = "none";
        exampleImage.style.display = "none";
        if(youtubeLink) youtubeLink.style.display = "none";
        exampleContainer.innerHTML = `
            <textarea id="example-textarea-${index}" rows="2">${exampleData.text}</textarea><br>
            <textarea id="example-alt-textarea-${index}" rows="1">${exampleData.alt}</textarea><br>
            <textarea id="example-youtube-textarea-${index}" rows="1" placeholder="${uiText("youtubeLink")}">${exampleData.youtube || ''}</textarea><br>
            <button class="remove-button" onclick="removeExample(${index})">${uiText("remove")}</button>
        `;
        editButton.innerText = uiText("save");
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
        <textarea id="new-example-textarea" rows="2" cols="40" placeholder="${uiText("usageExample")}"></textarea><br>
        <textarea id="new-example-alt-textarea" rows="1" cols="40" placeholder="${uiText("imageCaption")}"></textarea><br>
        <textarea id="new-example-youtube-textarea" rows="1" cols="40" placeholder="${uiText("youtubeLink")}"></textarea><br>
        <button class="edit-example" onclick="saveNewExample()">${uiText("save")}</button><br>
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
        alert(uiText("exampleEmptyAlert"));
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
    alert(uiText("wordsUpdatedAlert"));
}
function handleCSVUpload(event) {
    const file = event.target.files[0]; 
    if (!file) {
        alert(uiText("selectCsvAlert"));
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
        alert(uiText("noFileAlert"));
        return;
    }
    if (!file.type.startsWith('image/')) {
        alert(uiText("invalidImageAlert"));
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
    alert(uiText("imageSavedAlert", { word }));
    loadImages(word);
}
function renderImage(exampleId, imageDataUrl) {
    const imageContainer = document.getElementById(`example-image-${exampleId}`);
    if(!imageContainer) return;
    imageContainer.innerHTML = ''; // Clear previous images, if any
    const img = document.createElement('img');
    img.src = imageDataUrl; // Set the src to the uploaded image data URL
    img.alt = uiText("imageAlt");
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
    function showVocabularyView() {
       const copyPasteContainer = document.querySelector('.words-container');    
       copyPasteContainer.style.display = 'block';
       setMobileSheetExpanded(copyPasteContainer, false);
       const aboutContainer = document.querySelector('.about-container');  
       aboutContainer.style.display = 'none';
       const definitionBox = document.querySelector('.definition-box');
       definitionBox.style.display = 'none';
       const textContainer = document.querySelector('.text-container');
       textContainer.style.display = 'none';       
       loadCurrentWords()
    }
    document.getElementById('toggle-words').onclick = showVocabularyView;
    document.getElementById('toggle-words-about').onclick = function(event) {
        event.preventDefault();
        showVocabularyView();
    };
    document.getElementById('toggle-about').onclick = function() {
        const aboutContainer = document.querySelector('.about-container');
        aboutContainer.style.display = 'block';
        setMobileSheetExpanded(aboutContainer, false);
        const copyPasteContainer = document.querySelector('.words-container');    
        copyPasteContainer.style.display = 'none';
        const definitionBox = document.querySelector('.definition-box');
        definitionBox.style.display = 'none';   
        const textContainer = document.querySelector('.text-container');
        textContainer.style.display = 'none';
    };    
    initializeTextManagerHandle();
    initializeMobileSheetHandles();
    document.getElementById('close-about-panel').onclick = showReadView;
    document.getElementById('close-vocabulary-panel').onclick = showReadView;
    document.getElementById('close-text-manager').onclick = closeTextManager;
    document.getElementById('new-text-button').onclick = startNewTextEditor;
    document.getElementById('add-text-tab').onclick = function() {
        openTextManager();
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
    document.getElementById("open-language-settings").onclick = openLearningLanguageSettings;
    document.getElementById("save-learning-language").onclick = saveLearningLanguage;
    document.getElementById("cancel-learning-language").onclick = cancelLearningLanguageChange;
    applyInterfaceLanguage();
    renderLearningLanguageOptions();
    showReadView();
    const firstRun = !hasSelectedLearningLanguage;
    document.getElementById("language-picker").hidden = !firstRun;
    document.getElementById("open-language-settings").setAttribute("aria-expanded", String(firstRun));
    document.getElementById("save-learning-language").textContent =
        firstRun ? uiText("startLearning") : uiText("saveLanguage");
    document.getElementById("cancel-learning-language").hidden = firstRun;
    updateLanguageMenuLabel();
    applyLearningLanguageAttributes();
    refreshWordList();
    renderSavedTextList();

}

initialize();



