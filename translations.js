// UI copy is keyed by the learning language, so the app can localize itself
// without changing learner-provided text, definitions, or examples.
const uiKeys = `
appTitle
languageMenuLabel
navLabel
vocabulary
about
chooseLanguage
changeLanguage
searchLanguages
searchPlaceholder
noLanguageMatch
startLearning
saveLanguage
cancel
openTexts
addOrOpenText
aboutTitle
aboutSubtitle
aboutIntro
aboutLanguageInfo
aboutLearnerLead
aboutWordItem
aboutTextItem
aboutVocabPrefix
aboutVocabLink
aboutVocabSuffix
aboutKnownIssues
aboutLocalData
aboutAnalytics
aboutMultipleWords
aboutImages
aboutFeedback
aboutClosing
textsTitle
closeTextManager
toggleTextManagerSize
textManagerIntro
newText
editText
title
text
emptyTextError
saveAndOpen
saveChanges
discardChanges
deleteConfirm
read
edit
delete
sentence
play
playSentence
toggleSentenceMode
sentenceModeOn
sentenceModeOff
stop
noTextOpen
chooseSavedText
emptyText
vocabularyTitle
vocabularyInstructions
refresh
update
downloadCsv
uploadCsv
downloadImages
closeWordDetails
newWord
learningWord
learnedWord
save
addExample
remove
openWiktionary
googleImages
youtubeLink
usageExample
imageCaption
exampleEmptyAlert
wordsUpdatedAlert
selectCsvAlert
noFileAlert
invalidImageAlert
imageSavedAlert
imageAlt
welcomeTitle
untitledText
close
availableLanguages
closeTab
`.trim().split(/\s+/);

const uiValues = {
  en: [
    "Language learning in context", "Learning English", "App navigation", "Vocabulary", "About",
    "Choose your learning language", "Change learning language", "Search languages", "Type a language name",
    "No languages match your search.", "Start learning", "Save language", "Cancel", "Open texts", "Add or open a text",
    "About", "Language learning in context", "Hello! I'm Jordi Rosell. I created this app to help language learners acquire vocabulary in context.",
    "Choose a learning language the first time you use the app. You can change it later from the top bar. Supported languages include German, English, Catalan, Vietnamese, Chinese (Simplified), Arabic, Urdu, Russian, Hindi, French, Spanish, and Filipino.",
    "As a learner, you can:", "Select a word to see or edit its meaning, learning status, and examples.",
    "Use + to open saved texts, paste a new text, or edit one.", "Manage your word list using CSV: ", "Vocabulary", " lets you copy, upload, edit, or download it.",
    "Known issues", "Texts, vocabulary, and images are saved in this browser and are not shared across devices.",
    "Analytics are collected only if you agree to tracking.", "Examples for multiple words are not supported yet.",
    "Example images cannot be uploaded or downloaded yet.", "Send feedback or contribute on GitHub.", "I hope you enjoy it!",
    "Texts", "Close text manager", "Expand or collapse the text manager", "Open a saved text, or create one by pasting or typing it below.", "New text", "Edit text", "Title", "Text",
    "Enter some text before saving.", "Save and open", "Save changes", "Discard unsaved text changes?", "Delete \"{title}\"? This cannot be undone.",
    "Read", "Edit", "Delete", "Sentence {number}", "Play", "Play only the active sentence", "Toggle sentence mode",
    "Sentence mode on: Play only the active sentence.", "Sentence mode off: Play the full text.", "Stop",
    "No text is open. Choose + to open or add one.", "Open a saved text, or create one below.", "This text is empty. Choose + to open the text manager.",
    "Your vocabulary", "Upload, edit, or download your word list as a CSV file.", "Refresh", "Update", "Download CSV", "Upload CSV", "Download images",
    "Close word details", "New", "Learning", "Learned", "Save", "Add an example", "Remove", "Open Wiktionary", "Google Images", "YouTube link",
    "Usage example", "Image caption", "The example cannot be empty.", "Words updated successfully!", "Please select a CSV file to upload.",
    "No file selected!", "Please upload a valid image file.", "Image saved successfully for {word}.", "Uploaded example image",
    "Welcome", "Untitled text", "Close", "Available learning languages", "Close text tab: {title}"
  ],
  de: [
    "Sprachenlernen im Kontext", "Ich lerne Deutsch", "App-Navigation", "Wortschatz", "Über",
    "Wähle deine Lernsprache", "Lernsprache ändern", "Sprachen suchen", "Sprachnamen eingeben",
    "Keine passende Sprache gefunden.", "Los geht's", "Sprache speichern", "Abbrechen", "Geöffnete Texte", "Text öffnen oder hinzufügen",
    "Über", "Sprachenlernen im Kontext", "Hallo! Ich bin Jordi Rosell. Mit dieser App können Lernende Wörter im Kontext lernen.",
    "Wähle beim ersten Start eine Lernsprache. Du kannst sie später oben ändern. Unterstützt werden Deutsch, Englisch, Katalanisch, Vietnamesisch, vereinfachtes Chinesisch, Arabisch, Urdu, Russisch, Hindi, Französisch, Spanisch und Filipino.",
    "Als Lernende oder Lernender kannst du:", "Wähle ein Wort aus, um seine Bedeutung, seinen Lernstatus und Beispiele anzusehen oder zu bearbeiten.",
    "Mit + kannst du gespeicherte Texte öffnen, einen neuen Text einfügen oder einen Text bearbeiten.", "Verwalte deine Wortliste als CSV: ", "Wortschatz", " ermöglicht das Kopieren, Hochladen, Bearbeiten und Herunterladen.",
    "Bekannte Probleme", "Texte, Wortschatz und Bilder werden in diesem Browser gespeichert und nicht zwischen Geräten geteilt.",
    "Analysedaten werden nur erfasst, wenn du dem Tracking zustimmst.", "Beispiele für mehrere Wörter werden noch nicht unterstützt.",
    "Beispielbilder können noch nicht hoch- oder heruntergeladen werden.", "Gib Feedback oder hilf auf GitHub mit.", "Viel Spaß beim Lernen!",
    "Texte", "Textverwaltung schließen", "Textbereich vergrößern oder verkleinern", "Öffne einen gespeicherten Text oder erstelle unten einen neuen.", "Neuer Text", "Text bearbeiten", "Titel", "Text",
    "Gib vor dem Speichern einen Text ein.", "Speichern und öffnen", "Änderungen speichern", "Nicht gespeicherte Änderungen verwerfen?", "\"{title}\" löschen? Das kann nicht rückgängig gemacht werden.",
    "Lesen", "Bearbeiten", "Löschen", "Satz {number}", "Abspielen", "Nur den aktiven Satz abspielen", "Satzmodus umschalten",
    "Satzmodus an: Nur den aktiven Satz abspielen.", "Satzmodus aus: Den ganzen Text abspielen.", "Stopp",
    "Kein Text geöffnet. Wähle +, um einen Text zu öffnen oder hinzuzufügen.", "Öffne einen gespeicherten Text oder erstelle unten einen.", "Dieser Text ist leer. Wähle +, um die Textverwaltung zu öffnen.",
    "Dein Wortschatz", "Lade deine Wortliste als CSV hoch, bearbeite oder lade sie herunter.", "Aktualisieren", "Übernehmen", "CSV herunterladen", "CSV hochladen", "Bilder herunterladen",
    "Wortdetails schließen", "Neu", "Lerne ich", "Gelernt", "Speichern", "Beispiel hinzufügen", "Entfernen", "Wiktionary öffnen", "Google-Bilder", "YouTube-Link",
    "Anwendungsbeispiel", "Bildbeschreibung", "Das Beispiel darf nicht leer sein.", "Wörter erfolgreich aktualisiert!", "Bitte wähle eine CSV-Datei zum Hochladen aus.",
    "Keine Datei ausgewählt!", "Bitte lade eine gültige Bilddatei hoch.", "Bild für {word} gespeichert.", "Hochgeladenes Beispielbild",
    "Willkommen", "Unbenannter Text", "Schließen", "Verfügbare Lernsprachen", "Text-Tab schließen: {title}"
  ],
  ca: [
    "Aprendre idiomes en context", "Aprenc català", "Navegació de l’aplicació", "Vocabulari", "Sobre",
    "Tria la llengua que vols aprendre", "Canvia la llengua d’aprenentatge", "Cerca idiomes", "Escriu el nom d’un idioma",
    "No hi ha cap idioma que coincideixi amb la cerca.", "Comença a aprendre", "Desa la llengua", "Cancel·la", "Textos oberts", "Obre o afegeix un text",
    "Sobre", "Aprendre idiomes en context", "Hola! Soc en Jordi Rosell. He creat aquesta aplicació perquè els aprenents adquireixin vocabulari en context.",
    "Tria una llengua d’aprenentatge el primer cop que facis servir l’aplicació. La pots canviar des de la barra superior. Hi ha alemany, anglès, català, vietnamita, xinès simplificat, àrab, urdú, rus, hindi, francès, castellà i filipí.",
    "Com a aprenent, pots:", "Seleccionar una paraula per veure’n o editar-ne el significat, l’estat d’aprenentatge i els exemples.",
    "Fes servir + per obrir textos desats, enganxar-ne un de nou o editar-lo.", "Gestiona la llista de paraules amb CSV: ", "Vocabulari", " permet copiar-la, pujar-la, editar-la o baixar-la.",
    "Problemes coneguts", "Els textos, el vocabulari i les imatges es desen en aquest navegador i no es comparteixen entre dispositius.",
    "Només recollim dades d’ús si acceptes el seguiment.", "Encara no es poden afegir exemples a diverses paraules.",
    "Encara no es poden pujar ni baixar imatges dels exemples.", "Envia comentaris o col·labora a GitHub.", "Espero que t’agradi!",
    "Textos", "Tanca el gestor de textos", "Amplia o redueix el panell de textos", "Obre un text desat o crea’n un de nou enganxant-lo o escrivint-lo aquí.", "Text nou", "Edita el text", "Títol", "Text",
    "Escriu un text abans de desar-lo.", "Desa i obre", "Desa els canvis", "Vols descartar els canvis no desats?", "Vols esborrar «{title}»? Aquesta acció no es pot desfer.",
    "Llegeix", "Edita", "Esborra", "Frase {number}", "Reprodueix", "Reprodueix només la frase activa", "Canvia el mode de frase",
    "Mode de frase activat: reprodueix només la frase activa.", "Mode de frase desactivat: reprodueix tot el text.", "Atura",
    "No hi ha cap text obert. Prem + per obrir-ne o afegir-ne un.", "Obre un text desat o crea’n un aquí sota.", "Aquest text és buit. Prem + per obrir el gestor de textos.",
    "El teu vocabulari", "Puja, edita o baixa la llista de paraules com a fitxer CSV.", "Actualitza", "Aplica", "Baixa CSV", "Puja CSV", "Baixa les imatges",
    "Tanca els detalls de la paraula", "Nova", "Aprenent", "Apresa", "Desa", "Afegeix un exemple", "Elimina", "Obre Wiktionary", "Imatges de Google", "Enllaç de YouTube",
    "Exemple d’ús", "Peu de foto", "L’exemple no pot estar buit.", "S’han actualitzat les paraules!", "Selecciona un fitxer CSV per pujar-lo.",
    "No s’ha seleccionat cap fitxer!", "Puja un fitxer d’imatge vàlid.", "S’ha desat la imatge de {word}.", "Imatge d’exemple pujada",
    "Benvingut", "Text sense títol", "Tanca", "Llengües d’aprenentatge disponibles", "Tanca la pestanya del text: {title}"
  ],
  vi: [
    "Học ngôn ngữ qua ngữ cảnh", "Tôi đang học tiếng Việt", "Điều hướng ứng dụng", "Từ vựng", "Giới thiệu",
    "Chọn ngôn ngữ bạn muốn học", "Đổi ngôn ngữ học", "Tìm ngôn ngữ", "Nhập tên ngôn ngữ",
    "Không tìm thấy ngôn ngữ phù hợp.", "Bắt đầu học", "Lưu ngôn ngữ", "Hủy", "Văn bản đang mở", "Mở hoặc thêm văn bản",
    "Giới thiệu", "Học ngôn ngữ qua ngữ cảnh", "Xin chào! Tôi là Jordi Rosell. Tôi tạo ứng dụng này để giúp người học học từ vựng qua ngữ cảnh.",
    "Hãy chọn ngôn ngữ học trong lần đầu sử dụng. Bạn có thể đổi ngôn ngữ ở thanh trên. Ứng dụng hỗ trợ tiếng Đức, Anh, Catalan, Việt, Trung giản thể, Ả Rập, Urdu, Nga, Hindi, Pháp, Tây Ban Nha và Filipino.",
    "Bạn có thể:", "Chọn một từ để xem hoặc sửa nghĩa, trạng thái học và ví dụ.",
    "Nhấn + để mở văn bản đã lưu, dán văn bản mới hoặc chỉnh sửa văn bản.", "Quản lý danh sách từ bằng CSV: ", "Từ vựng", " cho phép sao chép, tải lên, sửa hoặc tải xuống.",
    "Vấn đề đã biết", "Văn bản, từ vựng và hình ảnh được lưu trên trình duyệt này, không đồng bộ giữa các thiết bị.",
    "Chỉ thu thập dữ liệu phân tích nếu bạn đồng ý theo dõi.", "Chưa hỗ trợ ví dụ cho nhiều từ.",
    "Chưa thể tải lên hoặc tải xuống hình ảnh ví dụ.", "Gửi phản hồi hoặc đóng góp trên GitHub.", "Chúc bạn học vui!",
    "Văn bản", "Đóng trình quản lý văn bản", "Mở rộng hoặc thu nhỏ bảng văn bản", "Mở văn bản đã lưu hoặc tạo văn bản mới bằng cách dán hay nhập bên dưới.", "Văn bản mới", "Sửa văn bản", "Tiêu đề", "Văn bản",
    "Hãy nhập văn bản trước khi lưu.", "Lưu và mở", "Lưu thay đổi", "Hủy các thay đổi chưa lưu?", "Xóa “{title}”? Không thể hoàn tác thao tác này.",
    "Đọc", "Sửa", "Xóa", "Câu {number}", "Phát", "Chỉ phát câu đang chọn", "Bật/tắt chế độ câu",
    "Đang bật chế độ câu: chỉ phát câu đang chọn.", "Đang tắt chế độ câu: phát toàn bộ văn bản.", "Dừng",
    "Chưa mở văn bản nào. Nhấn + để mở hoặc thêm văn bản.", "Mở văn bản đã lưu hoặc tạo văn bản bên dưới.", "Văn bản này trống. Nhấn + để mở trình quản lý văn bản.",
    "Từ vựng của bạn", "Tải lên, sửa hoặc tải xuống danh sách từ dưới dạng CSV.", "Làm mới", "Cập nhật", "Tải CSV xuống", "Tải CSV lên", "Tải hình ảnh xuống",
    "Đóng chi tiết từ", "Mới", "Đang học", "Đã học", "Lưu", "Thêm ví dụ", "Xóa", "Mở Wiktionary", "Google Hình ảnh", "Liên kết YouTube",
    "Ví dụ sử dụng", "Chú thích ảnh", "Ví dụ không được để trống.", "Đã cập nhật từ vựng!", "Vui lòng chọn tệp CSV để tải lên.",
    "Chưa chọn tệp!", "Vui lòng tải lên tệp hình ảnh hợp lệ.", "Đã lưu hình ảnh cho {word}.", "Hình ảnh ví dụ đã tải lên",
    "Chào mừng", "Văn bản chưa có tiêu đề", "Đóng", "Các ngôn ngữ học có sẵn", "Đóng thẻ văn bản: {title}"
  ],
  zh: [
    "在语境中学习语言", "我在学中文", "应用导航", "词汇", "关于",
    "选择要学习的语言", "更改学习语言", "搜索语言", "输入语言名称",
    "没有找到匹配的语言。", "开始学习", "保存语言", "取消", "已打开的文本", "添加或打开文本",
    "关于", "在语境中学习语言", "你好！我是 Jordi Rosell。我创建这个应用，帮助语言学习者在语境中积累词汇。",
    "首次使用时请选择学习语言。之后可在顶部更改。支持德语、英语、加泰罗尼亚语、越南语、简体中文、阿拉伯语、乌尔都语、俄语、印地语、法语、西班牙语和菲律宾语。",
    "你可以：", "选择单词以查看或编辑释义、学习状态和例句。", "点击 + 打开已保存的文本、粘贴新文本或编辑文本。",
    "使用 CSV 管理词汇表：", "词汇", "可以复制、上传、编辑或下载词汇表。", "已知问题",
    "文本、词汇和图片保存在此浏览器中，不会在设备间共享。", "只有在你同意跟踪后才会收集分析数据。",
    "暂不支持为多个单词添加例句。", "暂不支持上传或下载例句图片。", "欢迎在 GitHub 提交反馈或参与贡献。", "希望你喜欢！",
    "文本", "关闭文本管理器", "展开或收起文本面板", "打开已保存的文本，或在下方粘贴、输入新文本。", "新建文本", "编辑文本", "标题", "文本",
    "保存前请输入文本。", "保存并打开", "保存更改", "放弃未保存的更改？", "删除“{title}”？此操作无法撤销。",
    "阅读", "编辑", "删除", "第 {number} 句", "播放", "只播放当前句", "切换句子模式",
    "句子模式已开启：只播放当前句。", "句子模式已关闭：播放全文。", "停止",
    "尚未打开文本。点击 + 打开或添加文本。", "打开已保存的文本，或在下方新建文本。", "此文本为空。点击 + 打开文本管理器。",
    "你的词汇", "以 CSV 文件上传、编辑或下载词汇表。", "刷新", "更新", "下载 CSV", "上传 CSV", "下载图片",
    "关闭单词详情", "新词", "学习中", "已掌握", "保存", "添加例句", "移除", "打开 Wiktionary", "Google 图片", "YouTube 链接",
    "使用示例", "图片说明", "例句不能为空。", "词汇已成功更新！", "请选择要上传的 CSV 文件。",
    "未选择文件！", "请上传有效的图片文件。", "已保存 {word} 的图片。", "已上传的例句图片",
    "欢迎", "未命名文本", "关闭", "可选学习语言", "关闭文本标签：{title}"
  ],
  ar: [
    "تعلّم اللغات في سياقها", "أتعلم العربية", "التنقل في التطبيق", "المفردات", "حول التطبيق",
    "اختر اللغة التي تريد تعلمها", "تغيير لغة التعلم", "البحث عن اللغات", "اكتب اسم اللغة",
    "لا توجد لغة تطابق بحثك.", "ابدأ التعلم", "حفظ اللغة", "إلغاء", "النصوص المفتوحة", "إضافة نص أو فتحه",
    "حول التطبيق", "تعلّم اللغات في سياقها", "مرحبًا! أنا Jordi Rosell. أنشأت هذا التطبيق لمساعدة متعلمي اللغات على اكتساب المفردات ضمن سياقها.",
    "اختر لغة التعلم عند استخدام التطبيق لأول مرة. يمكنك تغييرها لاحقًا من الشريط العلوي. اللغات المتاحة: الألمانية والإنجليزية والكتالونية والفيتنامية والصينية المبسطة والعربية والأردية والروسية والهندية والفرنسية والإسبانية والفلبينية.",
    "يمكنك:", "اختر كلمة لعرض معناها أو تعديله وحالة تعلمها وأمثلتها.", "استخدم + لفتح نص محفوظ أو لصق نص جديد أو تعديله.",
    "أدِر قائمة كلماتك بصيغة CSV: ", "المفردات", " تتيح لك نسخها أو رفعها أو تعديلها أو تنزيلها.", "مشكلات معروفة",
    "تُحفظ النصوص والمفردات والصور في هذا المتصفح ولا تتم مشاركتها بين الأجهزة.", "لا تُجمع بيانات التحليلات إلا بعد موافقتك على التتبع.",
    "إضافة أمثلة لعدة كلمات غير مدعومة بعد.", "رفع صور الأمثلة أو تنزيلها غير متاح بعد.", "أرسل ملاحظاتك أو ساهم عبر GitHub.", "أتمنى أن تستمتع بالتطبيق!",
    "النصوص", "إغلاق مدير النصوص", "توسيع لوحة النصوص أو تصغيرها", "افتح نصًا محفوظًا أو أنشئ نصًا جديدًا بلصقه أو كتابته أدناه.", "نص جديد", "تعديل النص", "العنوان", "النص",
    "أدخل نصًا قبل الحفظ.", "حفظ وفتح", "حفظ التغييرات", "هل تريد تجاهل التغييرات غير المحفوظة؟", "هل تريد حذف «{title}»؟ لا يمكن التراجع عن ذلك.",
    "قراءة", "تعديل", "حذف", "الجملة {number}", "تشغيل", "تشغيل الجملة النشطة فقط", "تبديل وضع الجملة",
    "وضع الجملة مفعّل: تشغيل الجملة النشطة فقط.", "وضع الجملة متوقف: تشغيل النص كاملًا.", "إيقاف",
    "لا يوجد نص مفتوح. اختر + لفتح نص أو إضافته.", "افتح نصًا محفوظًا أو أنشئ نصًا أدناه.", "هذا النص فارغ. اختر + لفتح مدير النصوص.",
    "مفرداتك", "ارفع قائمة كلماتك بصيغة CSV أو عدّلها أو نزّلها.", "تحديث", "تطبيق", "تنزيل CSV", "رفع CSV", "تنزيل الصور",
    "إغلاق تفاصيل الكلمة", "جديد", "قيد التعلم", "تم تعلمه", "حفظ", "إضافة مثال", "إزالة", "فتح Wiktionary", "صور Google", "رابط YouTube",
    "مثال على الاستخدام", "وصف الصورة", "لا يمكن أن يكون المثال فارغًا.", "تم تحديث الكلمات بنجاح!", "يرجى اختيار ملف CSV لرفعه.",
    "لم يتم اختيار ملف!", "يرجى رفع ملف صورة صالح.", "تم حفظ صورة {word}.", "صورة المثال المرفوعة",
    "مرحبًا", "نص بلا عنوان", "إغلاق", "لغات التعلم المتاحة", "إغلاق علامة تبويب النص: {title}"
  ],
  ur: [
    "سیاق میں زبان سیکھنا", "اردو سیکھنا", "ایپ نیویگیشن", "الفاظ", "تعارف",
    "سیکھنے کے لیے زبان منتخب کریں", "سیکھنے کی زبان بدلیں", "زبانیں تلاش کریں", "زبان کا نام لکھیں",
    "کوئی زبان تلاش سے نہیں ملی۔", "سیکھنا شروع کریں", "زبان محفوظ کریں", "منسوخ کریں", "کھلے ہوئے متن", "متن کھولیں یا شامل کریں",
    "تعارف", "سیاق میں زبان سیکھنا", "السلام علیکم! میں Jordi Rosell ہوں۔ میں نے یہ ایپ زبان سیکھنے والوں کو سیاق میں الفاظ سیکھنے میں مدد دینے کے لیے بنائی ہے۔",
    "پہلی بار ایپ استعمال کرتے وقت اپنی زبان منتخب کریں۔ بعد میں اسے اوپر والی بار سے بدل سکتے ہیں۔ جرمن، انگریزی، کاتالان، ویتنامی، سادہ چینی، عربی، اردو، روسی، ہندی، فرانسیسی، ہسپانوی اور فلپائنی دستیاب ہیں۔",
    "آپ یہ کر سکتے ہیں:", "معنی، سیکھنے کی حالت اور مثالیں دیکھنے یا بدلنے کے لیے کسی لفظ کو منتخب کریں۔",
    "+ کے ذریعے محفوظ متن کھولیں، نیا متن چسپاں کریں یا ترمیم کریں۔", "CSV میں الفاظ کی فہرست سنبھالیں: ", "الفاظ", " اسے نقل، اپ لوڈ، ترمیم یا ڈاؤن لوڈ کرنے دیتا ہے۔",
    "معلوم مسائل", "متن، الفاظ اور تصاویر اسی براؤزر میں محفوظ ہوتے ہیں اور دوسرے آلات سے شیئر نہیں ہوتے۔", "تجزیاتی ڈیٹا صرف آپ کی اجازت سے جمع ہوتا ہے۔",
    "متعدد الفاظ کے لیے مثالیں ابھی دستیاب نہیں ہیں۔", "مثال کی تصاویر ابھی اپ لوڈ یا ڈاؤن لوڈ نہیں کی جا سکتیں۔", "رائے دیں یا GitHub پر تعاون کریں۔", "امید ہے آپ کو پسند آئے گی!",
    "متون", "متن مینیجر بند کریں", "متن کا پینل پھیلائیں یا سمیٹیں", "محفوظ متن کھولیں یا نیچے چسپاں یا لکھ کر نیا متن بنائیں۔", "نیا متن", "متن میں ترمیم", "عنوان", "متن",
    "محفوظ کرنے سے پہلے متن درج کریں۔", "محفوظ کرکے کھولیں", "تبدیلیاں محفوظ کریں", "غیر محفوظ تبدیلیاں ختم کر دیں؟", "کیا “{title}” حذف کریں؟ یہ واپس نہیں ہو سکتا۔",
    "پڑھیں", "ترمیم", "حذف", "جملہ {number}", "چلائیں", "صرف فعال جملہ چلائیں", "جملے کا موڈ بدلیں",
    "جملے کا موڈ آن: صرف فعال جملہ چلائیں۔", "جملے کا موڈ آف: پورا متن چلائیں۔", "روکیں",
    "کوئی متن کھلا نہیں۔ متن کھولنے یا شامل کرنے کے لیے + منتخب کریں۔", "محفوظ متن کھولیں یا نیچے نیا متن بنائیں۔", "یہ متن خالی ہے۔ متن مینیجر کھولنے کے لیے + منتخب کریں۔",
    "آپ کے الفاظ", "الفاظ کی فہرست CSV میں اپ لوڈ، ترمیم یا ڈاؤن لوڈ کریں۔", "تازہ کریں", "اپ ڈیٹ", "CSV ڈاؤن لوڈ", "CSV اپ لوڈ", "تصاویر ڈاؤن لوڈ",
    "لفظ کی تفصیل بند کریں", "نیا", "سیکھ رہا ہے", "سیکھ لیا", "محفوظ کریں", "مثال شامل کریں", "ہٹائیں", "Wiktionary کھولیں", "Google تصاویر", "YouTube لنک",
    "استعمال کی مثال", "تصویر کا عنوان", "مثال خالی نہیں ہو سکتی۔", "الفاظ کامیابی سے اپ ڈیٹ ہو گئے!", "اپ لوڈ کے لیے CSV فائل منتخب کریں۔",
    "کوئی فائل منتخب نہیں ہوئی!", "درست تصویر فائل اپ لوڈ کریں۔", "{word} کے لیے تصویر محفوظ ہو گئی۔", "اپ لوڈ کی گئی مثال کی تصویر",
    "خوش آمدید", "بلا عنوان متن", "بند کریں", "دستیاب سیکھنے کی زبانیں", "متن کا ٹیب بند کریں: {title}"
  ],
  ru: [
    "Изучение языков в контексте", "Изучаю русский", "Навигация приложения", "Словарь", "О приложении",
    "Выберите язык для изучения", "Изменить язык обучения", "Поиск языков", "Введите название языка",
    "Языки не найдены.", "Начать обучение", "Сохранить язык", "Отмена", "Открытые тексты", "Открыть или добавить текст",
    "О приложении", "Изучение языков в контексте", "Здравствуйте! Я Jordi Rosell. Я создал это приложение, чтобы помогать изучать слова в контексте.",
    "Выберите язык при первом запуске. Позже его можно изменить в верхней панели. Доступны немецкий, английский, каталанский, вьетнамский, упрощённый китайский, арабский, урду, хинди, русский, французский, испанский и филиппинский.",
    "Вы можете:", "Выбрать слово, чтобы посмотреть или изменить его значение, статус изучения и примеры.",
    "Нажмите +, чтобы открыть сохранённый текст, вставить новый или отредактировать его.", "Управляйте списком слов в CSV: ", "Словарь", " позволяет копировать, загружать, редактировать и скачивать список.",
    "Известные проблемы", "Тексты, словарь и изображения сохраняются в этом браузере и не синхронизируются между устройствами.",
    "Аналитика собирается только с вашего согласия на отслеживание.", "Примеры для нескольких слов пока не поддерживаются.",
    "Загрузка и скачивание изображений примеров пока недоступны.", "Оставьте отзыв или внесите вклад на GitHub.", "Надеюсь, вам понравится!",
    "Тексты", "Закрыть менеджер текстов", "Развернуть или свернуть панель текстов", "Откройте сохранённый текст или создайте новый, вставив или введя его ниже.", "Новый текст", "Редактировать текст", "Название", "Текст",
    "Введите текст перед сохранением.", "Сохранить и открыть", "Сохранить изменения", "Отменить несохранённые изменения?", "Удалить «{title}»? Это действие нельзя отменить.",
    "Читать", "Редактировать", "Удалить", "Предложение {number}", "Воспроизвести", "Воспроизвести только активное предложение", "Переключить режим предложений",
    "Режим предложений включён: воспроизводится только активное предложение.", "Режим предложений выключен: воспроизводится весь текст.", "Стоп",
    "Нет открытых текстов. Нажмите +, чтобы открыть или добавить текст.", "Откройте сохранённый текст или создайте новый ниже.", "Текст пуст. Нажмите +, чтобы открыть менеджер текстов.",
    "Ваш словарь", "Загрузите, измените или скачайте список слов в формате CSV.", "Обновить", "Применить", "Скачать CSV", "Загрузить CSV", "Скачать изображения",
    "Закрыть сведения о слове", "Новое", "Изучаю", "Выучено", "Сохранить", "Добавить пример", "Удалить", "Открыть Wiktionary", "Google Картинки", "Ссылка YouTube",
    "Пример использования", "Подпись к изображению", "Пример не может быть пустым.", "Слова успешно обновлены!", "Выберите CSV-файл для загрузки.",
    "Файл не выбран!", "Загрузите корректный файл изображения.", "Изображение для {word} сохранено.", "Загруженное изображение примера",
    "Добро пожаловать", "Текст без названия", "Закрыть", "Доступные языки обучения", "Закрыть вкладку текста: {title}"
  ],
  hi: [
    "संदर्भ में भाषा सीखना", "हिंदी सीखें", "ऐप नेविगेशन", "शब्दावली", "परिचय",
    "सीखने की भाषा चुनें", "सीखने की भाषा बदलें", "भाषाएँ खोजें", "भाषा का नाम लिखें",
    "आपकी खोज से कोई भाषा नहीं मिली।", "सीखना शुरू करें", "भाषा सहेजें", "रद्द करें", "खुले हुए पाठ", "पाठ खोलें या जोड़ें",
    "परिचय", "संदर्भ में भाषा सीखना", "नमस्ते! मैं Jordi Rosell हूँ। मैंने यह ऐप भाषा सीखने वालों को संदर्भ में शब्दावली सीखने में मदद करने के लिए बनाया है।",
    "पहली बार ऐप इस्तेमाल करते समय सीखने की भाषा चुनें। बाद में इसे ऊपर की पट्टी से बदल सकते हैं। जर्मन, अंग्रेज़ी, कैटलन, वियतनामी, सरलीकृत चीनी, अरबी, उर्दू, रूसी, हिंदी, फ़्रेंच, स्पैनिश और फ़िलिपीनो उपलब्ध हैं।",
    "आप यह कर सकते हैं:", "अर्थ, सीखने की स्थिति और उदाहरण देखने या संपादित करने के लिए कोई शब्द चुनें।",
    "+ से सहेजा हुआ पाठ खोलें, नया पाठ चिपकाएँ या किसी पाठ को संपादित करें।", "CSV में अपनी शब्द सूची प्रबंधित करें: ", "शब्दावली", " से इसे कॉपी, अपलोड, संपादित या डाउनलोड कर सकते हैं।",
    "ज्ञात समस्याएँ", "पाठ, शब्दावली और चित्र इसी ब्राउज़र में सहेजे जाते हैं; दूसरे उपकरणों से साझा नहीं होते।", "ट्रैकिंग की सहमति देने पर ही विश्लेषण डेटा एकत्र होता है।",
    "कई शब्दों के लिए उदाहरण अभी उपलब्ध नहीं हैं।", "उदाहरण चित्र अभी अपलोड या डाउनलोड नहीं किए जा सकते।", "GitHub पर प्रतिक्रिया दें या योगदान करें।", "आशा है आपको यह पसंद आएगा!",
    "पाठ", "पाठ प्रबंधक बंद करें", "टेक्स्ट पैनल बड़ा या छोटा करें", "सहेजा हुआ पाठ खोलें या नीचे चिपकाकर अथवा लिखकर नया बनाएँ।", "नया पाठ", "पाठ संपादित करें", "शीर्षक", "पाठ",
    "सहेजने से पहले कुछ पाठ लिखें।", "सहेजकर खोलें", "बदलाव सहेजें", "बिना सहेजे बदलाव छोड़ दें?", "“{title}” हटाएँ? इसे पूर्ववत नहीं किया जा सकता।",
    "पढ़ें", "संपादित करें", "हटाएँ", "वाक्य {number}", "चलाएँ", "केवल सक्रिय वाक्य चलाएँ", "वाक्य मोड बदलें",
    "वाक्य मोड चालू: केवल सक्रिय वाक्य चलाएँ।", "वाक्य मोड बंद: पूरा पाठ चलाएँ।", "रोकें",
    "कोई पाठ खुला नहीं है। पाठ खोलने या जोड़ने के लिए + चुनें।", "सहेजा पाठ खोलें या नीचे नया बनाएँ।", "यह पाठ खाली है। पाठ प्रबंधक खोलने के लिए + चुनें।",
    "आपकी शब्दावली", "CSV फ़ाइल के रूप में शब्द सूची अपलोड, संपादित या डाउनलोड करें।", "ताज़ा करें", "अपडेट करें", "CSV डाउनलोड करें", "CSV अपलोड करें", "चित्र डाउनलोड करें",
    "शब्द का विवरण बंद करें", "नया", "सीख रहा/रही हूँ", "सीखा हुआ", "सहेजें", "उदाहरण जोड़ें", "हटाएँ", "Wiktionary खोलें", "Google चित्र", "YouTube लिंक",
    "उपयोग का उदाहरण", "चित्र का कैप्शन", "उदाहरण खाली नहीं हो सकता।", "शब्द सफलतापूर्वक अपडेट हुए!", "अपलोड करने के लिए CSV फ़ाइल चुनें।",
    "कोई फ़ाइल नहीं चुनी गई!", "कृपया मान्य चित्र फ़ाइल अपलोड करें।", "{word} के लिए चित्र सहेजा गया।", "अपलोड किया गया उदाहरण चित्र",
    "स्वागत है", "बिना शीर्षक का पाठ", "बंद करें", "उपलब्ध सीखने की भाषाएँ", "पाठ टैब बंद करें: {title}"
  ],
  fr: [
    "Apprendre les langues en contexte", "J’apprends le français", "Navigation de l’application", "Vocabulaire", "À propos",
    "Choisissez la langue à apprendre", "Changer la langue d’apprentissage", "Rechercher une langue", "Saisissez le nom d’une langue",
    "Aucune langue ne correspond à votre recherche.", "Commencer", "Enregistrer la langue", "Annuler", "Textes ouverts", "Ouvrir ou ajouter un texte",
    "À propos", "Apprendre les langues en contexte", "Bonjour ! Je suis Jordi Rosell. J’ai créé cette application pour aider les apprenants à acquérir du vocabulaire en contexte.",
    "Choisissez une langue lors de votre première utilisation. Vous pourrez la modifier dans la barre supérieure. L’application propose l’allemand, l’anglais, le catalan, le vietnamien, le chinois simplifié, l’arabe, l’ourdou, le russe, le hindi, le français, l’espagnol et le filipino.",
    "Vous pouvez :", "Sélectionner un mot pour voir ou modifier sa définition, son état d’apprentissage et ses exemples.",
    "Utilisez + pour ouvrir un texte enregistré, en coller un nouveau ou le modifier.", "Gérez votre liste de mots au format CSV : ", "Vocabulaire", " permet de la copier, de l’importer, de la modifier ou de la télécharger.",
    "Problèmes connus", "Les textes, le vocabulaire et les images sont enregistrés dans ce navigateur et ne sont pas partagés entre appareils.",
    "Les données analytiques ne sont collectées qu’avec votre accord de suivi.", "Les exemples pour plusieurs mots ne sont pas encore pris en charge.",
    "L’import et le téléchargement d’images d’exemple ne sont pas encore disponibles.", "Envoyez vos commentaires ou contribuez sur GitHub.", "Bonne découverte !",
    "Textes", "Fermer le gestionnaire de textes", "Agrandir ou réduire le panneau des textes", "Ouvrez un texte enregistré ou créez-en un en le collant ou en le saisissant ci-dessous.", "Nouveau texte", "Modifier le texte", "Titre", "Texte",
    "Saisissez du texte avant de l’enregistrer.", "Enregistrer et ouvrir", "Enregistrer les modifications", "Ignorer les modifications non enregistrées ?", "Supprimer « {title} » ? Cette action est irréversible.",
    "Lire", "Modifier", "Supprimer", "Phrase {number}", "Lire", "Lire uniquement la phrase active", "Activer ou désactiver le mode phrase",
    "Mode phrase activé : lire uniquement la phrase active.", "Mode phrase désactivé : lire tout le texte.", "Arrêter",
    "Aucun texte n’est ouvert. Choisissez + pour en ouvrir ou en ajouter un.", "Ouvrez un texte enregistré ou créez-en un ci-dessous.", "Ce texte est vide. Choisissez + pour ouvrir le gestionnaire de textes.",
    "Votre vocabulaire", "Importez, modifiez ou téléchargez votre liste de mots au format CSV.", "Actualiser", "Mettre à jour", "Télécharger CSV", "Importer CSV", "Télécharger les images",
    "Fermer les détails du mot", "Nouveau", "En cours d’apprentissage", "Appris", "Enregistrer", "Ajouter un exemple", "Supprimer", "Ouvrir Wiktionary", "Google Images", "Lien YouTube",
    "Exemple d’utilisation", "Légende de l’image", "L’exemple ne peut pas être vide.", "Mots mis à jour !", "Veuillez choisir un fichier CSV à importer.",
    "Aucun fichier sélectionné !", "Veuillez importer un fichier image valide.", "Image enregistrée pour {word}.", "Image d’exemple importée",
    "Bienvenue", "Texte sans titre", "Fermer", "Langues d’apprentissage disponibles", "Fermer l’onglet du texte : {title}"
  ],
  es: [
    "Aprender idiomas en contexto", "Aprendo español", "Navegación de la aplicación", "Vocabulario", "Acerca de",
    "Elige el idioma que quieres aprender", "Cambiar el idioma de aprendizaje", "Buscar idiomas", "Escribe el nombre de un idioma",
    "No hay idiomas que coincidan con la búsqueda.", "Empezar a aprender", "Guardar idioma", "Cancelar", "Textos abiertos", "Abrir o añadir un texto",
    "Acerca de", "Aprender idiomas en contexto", "¡Hola! Soy Jordi Rosell. He creado esta aplicación para ayudar a aprender vocabulario en contexto.",
    "Elige un idioma la primera vez que uses la aplicación. Después puedes cambiarlo en la barra superior. Están disponibles alemán, inglés, catalán, vietnamita, chino simplificado, árabe, urdu, ruso, hindi, francés, español y filipino.",
    "Puedes:", "Seleccionar una palabra para consultar o editar su significado, estado de aprendizaje y ejemplos.",
    "Pulsa + para abrir textos guardados, pegar uno nuevo o editarlo.", "Gestiona tu lista de palabras en CSV: ", "Vocabulario", " permite copiarla, subirla, editarla o descargarla.",
    "Problemas conocidos", "Los textos, el vocabulario y las imágenes se guardan en este navegador y no se comparten entre dispositivos.",
    "Solo recopilamos datos analíticos si aceptas el seguimiento.", "Aún no se admiten ejemplos para varias palabras.",
    "Aún no se pueden subir ni descargar imágenes de ejemplo.", "Envía comentarios o colabora en GitHub.", "¡Espero que la disfrutes!",
    "Textos", "Cerrar el gestor de textos", "Ampliar o reducir el panel de textos", "Abre un texto guardado o crea uno pegándolo o escribiéndolo abajo.", "Nuevo texto", "Editar texto", "Título", "Texto",
    "Escribe algo antes de guardar.", "Guardar y abrir", "Guardar cambios", "¿Descartar los cambios sin guardar?", "¿Eliminar «{title}»? No se puede deshacer.",
    "Leer", "Editar", "Eliminar", "Frase {number}", "Reproducir", "Reproducir solo la frase activa", "Cambiar el modo de frase",
    "Modo de frase activado: reproduce solo la frase activa.", "Modo de frase desactivado: reproduce todo el texto.", "Detener",
    "No hay ningún texto abierto. Pulsa + para abrir o añadir uno.", "Abre un texto guardado o crea uno abajo.", "Este texto está vacío. Pulsa + para abrir el gestor de textos.",
    "Tu vocabulario", "Sube, edita o descarga tu lista de palabras como archivo CSV.", "Actualizar", "Aplicar", "Descargar CSV", "Subir CSV", "Descargar imágenes",
    "Cerrar detalles de la palabra", "Nueva", "Aprendiendo", "Aprendida", "Guardar", "Añadir ejemplo", "Quitar", "Abrir Wiktionary", "Google Imágenes", "Enlace de YouTube",
    "Ejemplo de uso", "Pie de imagen", "El ejemplo no puede estar vacío.", "¡Palabras actualizadas correctamente!", "Selecciona un archivo CSV para subir.",
    "¡No se ha seleccionado ningún archivo!", "Sube un archivo de imagen válido.", "Imagen guardada para {word}.", "Imagen de ejemplo subida",
    "Bienvenido", "Texto sin título", "Cerrar", "Idiomas de aprendizaje disponibles", "Cerrar la pestaña del texto: {title}"
  ],
  fil: [
    "Pag-aaral ng wika sa konteksto", "Nag-aaral ako ng Filipino", "Pag-navigate sa app", "Talasalitaan", "Tungkol",
    "Piliin ang wikang pag-aaralan", "Palitan ang wikang pinag-aaralan", "Maghanap ng mga wika", "I-type ang pangalan ng wika",
    "Walang wikang tumugma sa paghahanap.", "Simulan ang pag-aaral", "I-save ang wika", "Kanselahin", "Mga nakabukas na teksto", "Magbukas o magdagdag ng teksto",
    "Tungkol", "Pag-aaral ng wika sa konteksto", "Kumusta! Ako si Jordi Rosell. Ginawa ko ang app na ito para matulungan ang mga nag-aaral ng wika na matuto ng mga salita sa konteksto.",
    "Pumili ng wikang pag-aaralan sa unang paggamit. Maaari mo itong palitan sa itaas. Kabilang sa mga wika ang Aleman, Ingles, Catalan, Vietnamese, Simplified Chinese, Arabic, Urdu, Russian, Hindi, French, Spanish, at Filipino.",
    "Maaari mong:", "Pumili ng salita para tingnan o baguhin ang kahulugan, estado ng pag-aaral, at mga halimbawa nito.",
    "Gamitin ang + para magbukas ng naka-save na teksto, mag-paste ng bago, o mag-edit nito.", "Pamahalaan ang listahan ng salita gamit ang CSV: ", "Talasalitaan", " para kopyahin, i-upload, i-edit, o i-download ito.",
    "Mga alam na isyu", "Naka-save sa browser na ito ang mga teksto, talasalitaan, at larawan; hindi ito naibabahagi sa ibang device.",
    "Kokolektahin lang ang analytics kapag pumayag ka sa pagsubaybay.", "Hindi pa sinusuportahan ang mga halimbawa para sa maraming salita.",
    "Hindi pa maaaring mag-upload o mag-download ng mga larawan ng halimbawa.", "Magbigay ng feedback o mag-ambag sa GitHub.", "Sana ay magustuhan mo!",
    "Mga teksto", "Isara ang tagapamahala ng teksto", "Palawakin o paliitin ang panel ng teksto", "Magbukas ng naka-save na teksto o gumawa ng bago sa pamamagitan ng pag-paste o pag-type sa ibaba.", "Bagong teksto", "I-edit ang teksto", "Pamagat", "Teksto",
    "Maglagay ng teksto bago i-save.", "I-save at buksan", "I-save ang mga pagbabago", "Itapon ang mga hindi naka-save na pagbabago?", "Burahin ang “{title}”? Hindi na ito maibabalik.",
    "Basahin", "I-edit", "Burahin", "Pangungusap {number}", "I-play", "I-play lang ang aktibong pangungusap", "I-toggle ang sentence mode",
    "Naka-on ang sentence mode: aktibong pangungusap lang ang i-play.", "Naka-off ang sentence mode: i-play ang buong teksto.", "Ihinto",
    "Walang bukas na teksto. Piliin ang + para magbukas o magdagdag ng isa.", "Magbukas ng naka-save na teksto o gumawa ng bago sa ibaba.", "Walang laman ang tekstong ito. Piliin ang + para buksan ang tagapamahala ng teksto.",
    "Iyong talasalitaan", "I-upload, i-edit, o i-download ang listahan ng salita bilang CSV.", "I-refresh", "I-update", "I-download ang CSV", "I-upload ang CSV", "I-download ang mga larawan",
    "Isara ang detalye ng salita", "Bago", "Inaaral", "Natutunan", "I-save", "Magdagdag ng halimbawa", "Alisin", "Buksan ang Wiktionary", "Google Images", "Link sa YouTube",
    "Halimbawa ng paggamit", "Caption ng larawan", "Hindi maaaring walang laman ang halimbawa.", "Matagumpay na na-update ang mga salita!", "Pumili ng CSV file na ia-upload.",
    "Walang napiling file!", "Mag-upload ng wastong image file.", "Na-save ang larawan para sa {word}.", "Na-upload na larawan ng halimbawa",
    "Maligayang pagdating", "Tekstong walang pamagat", "Isara", "Mga available na wikang pag-aaralan", "Isara ang tab ng teksto: {title}"
  ]
};

const uiTranslations = {};
Object.entries(uiValues).forEach(([languageCode, values]) => {
  if (values.length !== uiKeys.length) {
    throw new Error("Incomplete UI translations for " + languageCode + ": expected " + uiKeys.length + ", got " + values.length);
  }
  uiTranslations[languageCode] = Object.fromEntries(uiKeys.map((key, index) => [key, values[index]]));
});

window.uiTranslations = uiTranslations;
