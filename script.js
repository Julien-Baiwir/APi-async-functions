const rulesListContainer = document.getElementById('dataListContainer');
const addButton = document.getElementById('loadDataButton'); 

addButton.addEventListener('click', function() {
    fetch('datatoinsert.json')
        .then(response => response.json())
        .then(data => {
            const rulesList = document.createElement('ul');

            data.forEach(rule => {
                const listItem = document.createElement('li');
                listItem.textContent = rule;
                rulesList.appendChild(listItem);
            });

            rulesListContainer.appendChild(rulesList);
        })
        .catch(error => console.error('Error fetching and displaying JSON:', error));
});


