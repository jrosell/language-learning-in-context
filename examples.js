
const allWords = JSON.parse(localStorage.getItem('words_customWords')) || {};
let examples = JSON.parse(localStorage.getItem('global_examples')) || {};

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

    // Set the word title and definition
    document.getElementById('word-title').innerText = wordText;
    document.getElementById('definition').innerText = wordData.definition;
    
    // Wiktionary link
    document.getElementById('wiktionary').innerHTML = `<a class="edit-button" href="https://de.wiktionary.org/w/index.php?search=${wordText}" target="_blank">Open Wiktionary</a>`;
    
    // Call the showExamples function
    showExamples(wordText);

    // Set word state
    const stateContainer = document.getElementById('state-selection');
    stateContainer.innerHTML = `
        <div class="wordState">
            <label class="new-word">
                <input type="radio" name="wordState" onclick="saveWordState('${wordText}')" value="new" ${wordData.state === 'new' ? 'checked' : ''}> New
            </label>
            <label class="learning-word">
                <input type="radio" name="wordState" onclick="saveWordState('${wordText}')" value="learning" ${wordData.state === 'learning' ? 'checked' : ''}> Learning
            </label>
            <label class="learned-word">
                <input type="radio" name="wordState" onclick="saveWordState('${wordText}')" value="learned" ${wordData.state === 'learned' ? 'checked' : ''}> Learned
            </label>
        </div>
    `;
    
    // Update word color and visibility
    updateWordColor(wordText, wordData.state);
    document.getElementById('definition-box').style.display = 'block';

    // Optionally load images related to the word
    loadImages();
}


function showExamples(wordText) {
    const allWords = JSON.parse(localStorage.getItem('words_customWords')) || {};
    const wordData = allWords[wordText] || { examples: [] };
    
    const examplesContainer = document.getElementById('examples');
    examplesContainer.innerHTML = ''; // Clear previous content
    
    wordData.examples.forEach((exampleId, index) => {
        const storedExamples = JSON.parse(localStorage.getItem('global_examples')) || {};
        const example = storedExamples[exampleId];
        
        if (!example) return; // Skip if the example doesn't exist
        
        const exampleDiv = document.createElement('div');
        exampleDiv.classList.add('example');
        
        let youtubeHtml = "";
        if (example.youtube && example.youtube.trim() !== "") {
            youtubeHtml = `<p><a class="youtube" href="${example.youtube}" target="_blank">YouTube</a></p>`;
        }
        
        exampleDiv.innerHTML = `
            <div id="example-${index}">
                <span id="example-text-${index}">${example.text}</span>
                <button class="edit-example" id="edit-example-${index}" onclick="toggleEditExample(${exampleId})">Edit</button>
                <p class="image">
                    <a href="https://www.google.de/search?lr=lang_de&hl=de&udm=2&sa=X&biw=1440&bih=662&dpr=1&q=${encodeURIComponent(example.alt)}&tbm=isch" target="_blank" class="edit-button">Google Images</a> 
                    | <a href="#" class="edit-button" onclick="uploadExampleImage(${exampleId}, '${wordText}')">Upload</a>
                    <input type="file" id="image-upload-${index}" style="display: none;" accept="image/*" onchange="handleImageUpload(event, ${exampleId})" />
                </p>
                <div id="example-image-${index}"></div>
                <p class="caption">${example.alt}</p>
                ${youtubeHtml}
            </div>
        `;
        
        examplesContainer.appendChild(exampleDiv);
    });
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
// function toggleEditExample(index) {
//     const word = document.getElementById('word-title').innerText; // Get the word title
//     const exampleData = allWords[word].examples[index];
//     const exampleContainer = document.getElementById(`example-text-${index}`);
//     const editButton = document.getElementById(`edit-example-${index}`);
//     const exampleCaption = document.querySelector(`#example-${index} .caption`);
//     const exampleImage = document.querySelector(`#example-${index} .image`);
//     const youtubeLink = document.querySelector(`#example-${index} a.youtube`);
//     if (editButton.innerText === "Save") {
//         const newExampleText = document.getElementById(`example-textarea-${index}`).value;
//         const newExampleAlt = document.getElementById(`example-alt-textarea-${index}`).value;
//         const newYouTubeLink = document.getElementById(`example-youtube-textarea-${index}`).value;
//         exampleData.text = newExampleText;
//         exampleData.alt = newExampleAlt;
//         exampleData.youtube = newYouTubeLink;
//         allWords[word].examples[index] = exampleData;
//         localStorage.setItem('words_customWords', JSON.stringify(allWords));
//         showDefinition(word);
//         console.log("toggleEditExample: Changes saved!");
//         editButton.innerText = "Edit";
//     } else {
//         exampleCaption.style.display = "none";
//         exampleImage.style.display = "none";
//         if(youtubeLink) youtubeLink.style.display = "none";
//         exampleContainer.innerHTML = `
//             <textarea id="example-textarea-${index}" rows="2">${exampleData.text}</textarea><br>
//             <textarea id="example-alt-textarea-${index}" rows="1">${exampleData.alt}</textarea><br>
//             <textarea id="example-youtube-textarea-${index}" rows="1" placeholder="YouTube link">${exampleData.youtube || ''}</textarea><br>
//             <button class="remove-button" onclick="softRemoveExample(${index})">Remove</button>
//         `;
//         editButton.innerText = "Save"; // Change button text to "Save"
//     }
// }

function toggleEditExample(exampleId) {
    // Fetch the examples from local storage
    const storedExamples = JSON.parse(localStorage.getItem('global_examples')) || {};

    if (!storedExamples[exampleId]) {
        console.error(`Example data not found for ID: ${exampleId}`);
        return; // Exit if example data is not found
    }

    const exampleData = storedExamples[exampleId]; // Use the example data from localStorage
    const exampleContainer = document.getElementById(`example-text-${exampleId}`);
    const editButton = document.getElementById(`edit-example-${exampleId}`);
    const exampleCaption = document.querySelector(`#example-${exampleId} .caption`);
    const exampleImage = document.querySelector(`#example-${exampleId} .image`);
    const youtubeLink = document.querySelector(`#example-${exampleId} a.youtube`);

    if (editButton.innerText === "Save") {
        // Save changes
        const newExampleText = document.getElementById(`example-textarea-${exampleId}`).value;
        const newExampleAlt = document.getElementById(`example-alt-textarea-${exampleId}`).value;
        const newYouTubeLink = document.getElementById(`example-youtube-textarea-${exampleId}`).value || '';

        // Update the local storage example data
        exampleData.text = newExampleText;
        exampleData.alt = newExampleAlt;
        exampleData.youtube = newYouTubeLink;

        // Save updated examples back to local storage
        storedExamples[exampleId] = exampleData; // Ensure the specific example is updated
        localStorage.setItem('global_examples', JSON.stringify(storedExamples)); // Save back to localStorage

        // Update the UI after saving
        showDefinition(document.getElementById('word-title').innerText); // Refresh the definition for the current word
        console.log(`toggleEditExample: Example ${exampleId} changes saved!`);
        editButton.innerText = "Edit";
    } else {
        // Switch to edit mode
        exampleCaption.style.display = "none";
        exampleImage.style.display = "none";
        if (youtubeLink) youtubeLink.style.display = "none";

        exampleContainer.innerHTML = `
            <textarea id="example-textarea-${exampleId}" rows="2">${exampleData.text}</textarea><br>
            <textarea id="example-alt-textarea-${exampleId}" rows="1">${exampleData.alt}</textarea><br>
            <textarea id="example-youtube-textarea-${exampleId}" rows="1" placeholder="YouTube link">${exampleData.youtube || ''}</textarea><br>
            <button class="remove-button" onclick="softRemoveExample('${exampleId}')">Remove</button>
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
function softRemoveExample(index) {
    const word = document.getElementById('word-title').innerText; // Use the bottom-up panel word title
    const allWords = JSON.parse(localStorage.getItem('words_customWords')) || {};
    if (!allWords[word] || !allWords[word].examples[index]) {
        console.error(`Example data for index ${index} not found for word: ${word}`);
        return;
    }
    allWords[word].examples[index].state = "removed";
    localStorage.setItem('words_customWords', JSON.stringify(allWords)); // Save to local storage
    showDefinition(word);
    console.log(`softRemoveExample: Example at index ${index} marked as removed!`);
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

    if (exampleText.trim() === "") {
        alert("Das Beispiel darf nicht leer sein."); // Example cannot be empty
        return;
    }

    // Fetch the examples from local storage (global_examples and words_customWords)
    const storedExamples = JSON.parse(localStorage.getItem('global_examples')) || {};
    const allWords = JSON.parse(localStorage.getItem('words_customWords')) || {};

    // Generate a unique ID for the new example
    const newExampleId = Date.now(); // Use current timestamp as a simple unique ID

    // Save the new example in the global_examples storage
    const newExampleData = {
        text: exampleText,
        alt: exampleAlt,
        image: null,
        youtube: exampleYouTube
    };

    storedExamples[newExampleId] = newExampleData; // Store the new example with its ID
    localStorage.setItem('global_examples', JSON.stringify(storedExamples)); // Update global_examples in localStorage

    // Save the example reference in the word-specific storage (words_customWords)
    if (!allWords[word]) {
        allWords[word] = { definition: "", examples: [] }; // Initialize word entry if it doesn't exist
    }
    allWords[word].examples.push(newExampleId); // Store the ID of the new example
    localStorage.setItem('words_customWords', JSON.stringify(allWords)); // Update words_customWords in localStorage

    // Refresh the definition box with the updated data
    showDefinition(word);

    console.log(`New example with ID ${newExampleId} added for word "${word}"!`);
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
        const word = columns[1].trim();
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
            updateWordColor(word, state);
        }
    }
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
    imageContainer.appendChild(img);
}
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
function playText(){
    if ('speechSynthesis' in window) {
        var msg = new SpeechSynthesisUtterance(document.querySelector("#text").innerText);                
        msg.lang='de'
        msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Google Deutsch'; })[0];
        speechSynthesis.speak(msg);
    }
}

function addOrLinkExampleToWord(word, newExampleText, newExampleAlt, newYouTubeLink) {
    const allWords = JSON.parse(localStorage.getItem('words_customWords')) || {};
    let exampleId = null;

    // Search if the example already exists in the global examples
    for (let id in examples) {
        if (examples[id].text === newExampleText && examples[id].alt === newExampleAlt && examples[id].youtube === newYouTubeLink) {
            exampleId = id;
            break;
        }
    }

    // If not found, create a new example
    if (!exampleId) {
        exampleId = 'example-' + Date.now(); // Unique ID
        examples[exampleId] = {
            text: newExampleText,
            alt: newExampleAlt,
            youtube: newYouTubeLink || ''
        };
        localStorage.setItem('global_examples', JSON.stringify(examples)); // Save examples globally
    }

    // Link the example to the word
    if (!allWords[word].examples.includes(exampleId)) {
        allWords[word].examples.push(exampleId);
        localStorage.setItem('words_customWords', JSON.stringify(allWords)); // Save word data
    }

    console.log(`Example ${exampleId} added or linked to word: ${word}`);
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

