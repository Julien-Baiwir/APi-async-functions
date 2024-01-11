// https://api.dictionaryapi.dev/api/v2/entries/en/hello
// https://api.dictionaryapi.dev/api/v2/entries/en/bye possible d'entrer le lien direct

const fetchWordDefinition = (word) => fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

document.getElementById("addBtn").addEventListener("click", function() {
    const InputWord = document.getElementById("wordInput").value;
    fetchWordDefinition(InputWord)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((json) => {
            
            console.log(json);
        })
        .catch((error) => {
            console.error("There was an error!", error);
        });
});

