
const allWords = JSON.parse(localStorage.getItem('words_customWords')) || {};
if (!allWords["Guten"]) {
    allWords["Guten"] = {
        "state": "learning",
        "definition": "Das Wort „Guten“ ist der Akkusativ Singular von „gut“, was „gut“ oder „wohl“ bedeutet. Es wird oft in Kombination mit anderen Wörtern verwendet, um jemanden in verschiedenen Tageszeiten oder Situationen freundlich zu begrüßen oder gute Wünsche auszudrücken.",
        "examples": [
                {
                    "text": "Guten Morgen",
                    "alt": "Ein sonniger Start in den Tag.",
                    "youtube": "https://youtu.be/S0RsIasa314?si=hRWnDH0bFWs6xcTT"
                },
                {
                    "text": "Guten Appetit",
                    "alt": "Ein leckeres Gericht serviert.",
                    "youtube": "https://youtu.be/uwbxLOkjsOI?si=7lXz0RS7cRgmr36S&t=20"
                }
            ]
        }
    localStorage.setItem('words_customWords', JSON.stringify(allWords));    
    console.log(`Updated Guten word`);
}


function makeWordsClickable(text) {
    const regex = /(\b\w+[\wäöüáéíóúàèìòùâêß]*\b|[.,!?;?])/g; // Matches words and punctuation
    const tokens = text.match(regex); // Get all matches

    return tokens.map(token => {
        const trimmedWord = token.replace(/[.,!?;?]/g, ''); // Clean punctuation for state check
        const wordData = allWords[trimmedWord];

        let classList = "word"; // Default class

        if (wordData) {
            switch (wordData.state) {
                case 'learned':
                    classList += " learned-word";
                    break;
                case 'learning':
                    classList += " learning-word";
                    break;
                default:
                    classList += " new-word";
            }
            if (wordData.definition && wordData.definition.trim() !== "") {
                classList += " word-with-definition"; // Bold if definition exists
            } else {
                classList += " word-without-definition"; // Normal if no definition
            }

        } else {
            if (/[.,!?;?]/.test(token)) {
                return `<span class="symbol">${token}</span>`; // Wrap punctuation in a symbol span
            } else {
                classList += " word-without-definition"; // Unknown word with no definition
            }
        }
        return `<span class="${classList}">${token}</span>`;
    }).join(' ');
}

function refreshWordList() {
    document.getElementById('text').innerHTML = makeWordsClickable(document.getElementById('text').innerText);
    document.querySelectorAll('.word').forEach(word => {
        word.addEventListener('click', function () {
            showDefinition(this.innerText);
            const copyPasteContainer = document.querySelector('.words-container');
            copyPasteContainer.style.display = 'none';
            const aboutContainer = document.querySelector('.about-container');  
            aboutContainer.style.display = 'none';
            const textContainer = document.querySelector('.text-container');  
            textContainer.style.display = 'none';
        });
    });
}

function showDefinition(wordText) {
    const allWords = JSON.parse(localStorage.getItem('words_customWords')) || {};
    const wordData = allWords[wordText] || { definition: "", examples: [], state: "new" };
    if (!allWords[wordText]) {
        allWords[wordText] = { definition: "", examples: [], state: "new" }; // Set to new by default
    }
    document.getElementById('word-title').innerText = wordText;
    document.getElementById('definition').innerText = wordData.definition;
    document.getElementById('wiktionary').innerHTML = `<a class="edit-button" href="https://de.wiktionary.org/w/index.php?search=${wordText}" target="_blank">Open wiktionary</a>`    
    const examplesContainer = document.getElementById('examples');
    examplesContainer.innerHTML = ''; // Clear previous content
    wordData.examples.forEach((example, index) => {
        const exampleDiv = document.createElement('div');
        exampleDiv.classList.add('example');
        let youtubeHtml = ""
        if (example.youtube && example.youtube.trim() !== "") {
            youtubeHtml = ` <p><a class="youtube" href="${example.youtube}" target="_blank">YouTube</a></p>`
        }
        exampleDiv.innerHTML = `
            <div id="example-${index}">
            <span id="example-text-${index}">${example.text}</span>
            <button class="edit-example" id="edit-example-${index}" onclick="toggleEditExample(${index})">Edit</button>
            <p class="image"><a href="https://www.google.de/search?lr=lang_de&hl=de&udm=2&sa=X&biw=1440&bih=662&dpr=1&q=${encodeURIComponent(example.alt)}&tbm=isch" target="_blank" class="edit-button">Google Images</a> | <a href="#" class="edit-button" onclick="uploadExampleImage(${index}, '${wordText}')">Upload</a><input type="file" id="image-upload-${index}" style="display: none;" accept="image/*" onchange="handleImageUpload(event, index)" /></p>
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
                <input type="radio" name="wordState" onclick="saveWordState('${wordText}')" value="new" ${typeof wordData.state == "undefined" || wordData.state === 'new' ? 'checked' : ''}> New
            </label>
            <label class="learning-word">
                <input type="radio" name="wordState" onclick="saveWordState('${wordText}')" value="learning" ${wordData.state === 'learning' ? 'checked' : ''}> Learning
            </label>
            <label class="learned-word">
                <input type="radio" name="wordState" onclick="saveWordState('${wordText}')" value="learned" ${wordData.state === 'learned' ? 'checked' : ''}> Learned
            </label>
        </div>
    `;
    updateWordColor(wordText, wordData.state);
    document.getElementById('definition-box').style.display = 'block';
    loadImages()
}

function saveWordState(word) {
    const selectedState = document.querySelector('input[name="wordState"]:checked').value;
    allWords[word].state = selectedState;
    localStorage.setItem('words_customWords', JSON.stringify(allWords));    
    console.log(`State für "${word}" gespeichert: ${selectedState}`);
    updateWordColor(word, selectedState);
}

function updateWordColor(word, state) {
    const wordElements = document.querySelectorAll('.word');
    const wordData = allWords[word]; // Get the word data
    wordElements.forEach(element => {
        if (element.innerText === word) {
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
        localStorage.setItem('words_customWords', JSON.stringify(allWords));
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
        localStorage.setItem('words_customWords', JSON.stringify(allWords));
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
    localStorage.setItem('words_customWords', JSON.stringify(allWords));
    showDefinition(word); // Refresh the display
}

function addExample() {
    const word = document.getElementById('word-title').innerText;
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
    document.getElementById('definition-box').style.display = 'block';
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
        localStorage.setItem('words_customWords', JSON.stringify(allWords));
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
        // Format the row as CSV
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
    const allWords = JSON.parse(localStorage.getItem('words_customWords')) || {};
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

    // Check for headers and set start line index accordingly
    const startLineIndex = (lines[0].trim().startsWith('state;')) ? 1 : 0;

    for (let i = startLineIndex; i < lines.length; i++) {
        const line = lines[i];

        // Regex to capture each column, respecting quoted strings
        const regex = /(?:^|;)(?:"([^"]*)"|([^";]*))/g;
        const columns = line.match(regex)?.map(col => col.replace(/^"|"$/g, '').replace(/""/g, '"').replace(/;/g, '').trim());

        if (!columns || columns.length < 2) {
            console.warn(`Skipping line due to insufficient columns: ${line}`);
            continue; // Skip lines that don't have at least state and word
        }

        const state = columns[0].trim();
        const word = columns[1].trim();
        const definition = columns.length > 2 ? columns[2].trim() : '';
        const examples = [];

        // Process example columns
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

        // Skip the header line if it's in the CSV
        if (state.toLowerCase() !== "state") {
            updatedWords[word] = {
                state: state,
                definition: definition, 
                examples: examples 
            };
            updateWordColor(word, state);
        }
    }

    // Store updated words in local storage
    localStorage.setItem('words_customWords', JSON.stringify(updatedWords));    
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
    storedImages[word +";"+exampleId] = {        
        image: imageDataUrl
    };
    localStorage.setItem('exampleImages', JSON.stringify(storedImages));
    alert("Image saved successfully for word: " + word);
    loadImages()
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

    // Append the image to the designated container
    imageContainer.appendChild(img);
}

// Function to load images from localStorage and render them on page load (if required)
function loadImages() {
    const storedImages = JSON.parse(localStorage.getItem('exampleImages')) || {};
    for (const key in storedImages) {
        const [word, exampleId] = key.split(';'); // Split key to get word and exampleId
        const { image } = storedImages[key];
        renderImage(exampleId, image); // Render each image
    }
}

function downloadAllImages() {
    const storedImages = JSON.parse(localStorage.getItem('exampleImages')) || {};
    const zip = new JSZip();
    const imgFolder = zip.folder("images"); // Create a folder for images in the ZIP file

    let promises = [];

    for (const key in storedImages) {
        const { image } = storedImages[key]; // Get the image data URL
        const fileName = `${key.replace(";", "_")}.png`; // Create a filename (replace semicolon for file name)

        // Convert Data URL to Blob
        const imgBlob = dataURLtoBlob(image);

        // Add the image blob to the ZIP
        promises.push(imgFolder.file(fileName, imgBlob));
    }

    // Wait for all images to be added to the ZIP and then generate the ZIP file
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

// Utility function to convert Data URL to Blob
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

function playText(){
    if ('speechSynthesis' in window) {
        var msg = new SpeechSynthesisUtterance(document.querySelector("#text").innerText);                
        msg.lang='de'
        msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Google Deutsch'; })[0];
        speechSynthesis.speak(msg);
    }
}


function initialize() {
    refreshWordList()     
    document.getElementById('load-words-button').onclick = loadCurrentWords;
    document.getElementById('update-words-button').onclick = function() {
        const csvInput = document.getElementById('csv-input').value;
        updateWordsFromCSV(csvInput);
    };
    document.getElementById('download-csv-button').onclick = downloadCSV;
    document.getElementById('add-example-button').onclick = addExample;      
    document.getElementById('edit-definition-button').onclick = toggleEditDefinition;   
    document.getElementById('toggle-words').onclick = function() {
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
        const aboutContainer = document.querySelector('.about-container');
        aboutContainer.style.display = 'block';
        const copyPasteContainer = document.querySelector('.words-container');    
        copyPasteContainer.style.display = 'none';
        const definitionBox = document.querySelector('.definition-box');
        definitionBox.style.display = 'none';   
        const textContainer = document.querySelector('.text-container');
        textContainer.style.display = 'none';
    };    
    document.getElementById('toggle-text').onclick = function() {
        const textContainer = document.querySelector('.text-container');
        textContainer.style.display = 'block';
        const copyPasteContainer = document.querySelector('.words-container');    
        copyPasteContainer.style.display = 'none';
        const aboutContainer = document.querySelector('.about-container');  
        aboutContainer.style.display = 'none';
        const definitionBox = document.querySelector('.definition-box');
        definitionBox.style.display = 'none';
        const textElement = document.getElementById('text');
        document.getElementById('text-input').value = textElement.textContent;
    };
    document.getElementById('update-text-button').onclick = function() {
        const newText = document.getElementById('text-input').value;
        document.getElementById('text').textContent = newText; // Update the displayed text
        loadCurrentWords()
        refreshWordList()
    };
    document.getElementById('upload-link').onclick = function(event) {
        event.preventDefault(); 
        document.getElementById('csv-upload').click();
    };
    document.getElementById('csv-upload').addEventListener('change', handleCSVUpload);

    document.getElementById('toggle-play').onclick = playText
}

initialize();

