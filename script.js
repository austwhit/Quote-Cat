const TENOR_API_KEY = 'YOUR_TENOR_API_KEY';

async function getRandomContent() {
    try {
        // Fetch both the random quote and fish meme gif concurrently using async/await
        const [quoteResponse, fishMemeGifResponse] = await Promise.all([
            fetch('https://api.quotable.io/random'),
            fetch(`https://g.tenor.com/v1/search?q=fish-meme&key=${TENOR_API_KEY}`)
        ]);

        const [quoteData, fishMemeGifData] = await Promise.all([
            quoteResponse.json(),
            fishMemeGifResponse.json()
        ]);

        // Extract the URL of the fish meme gif from the fishMemeGifData
        const fishMemeGifUrl = fishMemeGifData.results[0].media[0].gif.url;

        // Display the quote and fish meme gif on the webpage
        displayContent(quoteData, fishMemeGifUrl);
    } catch (error) {
        console.error('Error fetching content:', error);
    }
}

function displayContent(quote, fishMemeGifUrl) {
    // Display the quote
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerHTML = '';
    const quoteText = document.createElement('p');
    quoteText.textContent = `"${quote.content}"`;
    const quoteAuthor = document.createElement('p');
    quoteAuthor.textContent = `- ${quote.author}`;
    quoteContainer.appendChild(quoteText);
    quoteContainer.appendChild(quoteAuthor);

    // Display the fish meme gif
    const fishMemeContainer = document.getElementById('fish-meme-container');
    fishMemeContainer.innerHTML = '';
    const fishMemeImage = document.createElement('img');
    fishMemeImage.src = fishMemeGifUrl;
    fishMemeImage.alt = 'Fish Meme GIF';
    fishMemeContainer.appendChild(fishMemeImage);
}
