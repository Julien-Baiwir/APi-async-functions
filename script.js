const rulesListContainer = document.getElementById('dataListContainer');
const addButton = document.getElementById('loadDataButton'); 


addButton.addEventListener('click', function() {
   
    fetch('datatoinsert.json')
        .then(response => response.json())
        .then(json => {
            const rulesList = document.createElement('ul');

            json.forEach(rule => {
                const listItem = document.createElement('li');
                listItem.textContent = rule;
                rulesList.appendChild(listItem);
            });

            rulesListContainer.appendChild(rulesList);
        })
        .catch(error => console.error('Error fetching and displaying JSON:', error));
});


