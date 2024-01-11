// https://api.dictionaryapi.dev/api/v2/entries/en/hello
// https://api.dictionaryapi.dev/api/v2/entries/en/bye possible d'entrer le lien direct

const fetchWordDefinition = (word) => fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
let InputWord = ""; // Déclarer InputWord en dehors de la fonction handleDefinition

document.getElementById("addBtn").addEventListener("click", handleDefinition);

function insertDefinitionHtml(definition) {
    const template = `
        <div>
         <h2>${definition.word}
         <p>${definition.meanings[0].definitions[0].definition}</p>
        </div>
    `;


    const newElement = document.createElement('div');
    newElement.innerHTML = template;
    document.body.appendChild(newElement);
}

function handleDefinition() {
    InputWord = document.getElementById("wordInput").value;

    if (InputWord.trim() === "") {
        console.error("Input word is empty.");
        return;
    }

    fetchWordDefinition(InputWord)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((json) => {
            insertDefinitionHtml(json[0]);
            console.log(json);
        })
        .catch((error) => {
            console.error("There was an error!", error);
        });
}

    
  