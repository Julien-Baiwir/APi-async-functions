function displayQuote(quoteData) {
    const quoteContainer = document.createElement('blockquote');
    const quoteElement = document.createElement('p');
    quoteElement.textContent = quoteData.quote;
    quoteElement.id = 'quote';
    const authorElement = document.createElement('footer');
    authorElement.textContent = quoteData.author;
    authorElement.id = 'authorQuote';
    quoteContainer.appendChild(quoteElement);
    quoteContainer.appendChild(authorElement);
    document.body.appendChild(quoteContainer);
}

async function getQuotes() {
    try {
        const response = await fetch("https://thatsthespir.it/api");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const quoteData = await response.json();
        displayQuote(quoteData); 

    } catch (error) {
        console.error('Error during request:', error.message); 
    }
}
document.getElementById('genereDevis').addEventListener('click', getQuotes);
