async function getRandomContent() {
    try {
        // Fetch both the random quote and meme concurrently using async/await
        const [quoteResponse, memeResponse] = await Promise.all([
            fetch('https://api.quotable.io/random'),
            fetch('https://api.imgflip.com/get_memes')
        ]);

        const [quoteData, memeData] = await Promise.all([
            quoteResponse.json(),
            memeResponse.json()
        ]);

        // Extract a random meme URL from the memeData
        const memes = memeData.data.memes;
        const randomMeme = memes[Math.floor(Math.random() * memes.length)];
        const memeUrl = randomMeme.url;

        // Display the quote and meme on the webpage
        displayContent(quoteData, memeUrl);
    } catch (error) {
        console.error('Error fetching content:', error);
    }
}

function displayContent(quote, memeUrl) {
    // Display the quote
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerHTML = '';
    const quoteText = document.createElement('p');
    quoteText.textContent = `"${quote.content}"`;
    const quoteAuthor = document.createElement('p');
    quoteAuthor.textContent = `- ${quote.author}`;
    quoteContainer.appendChild(quoteText);
    quoteContainer.appendChild(quoteAuthor);

    // Display the meme
    const memeContainer = document.getElementById('cat-container');
    memeContainer.innerHTML = '';
    const memeImage = document.createElement('img');
    memeImage.src = memeUrl;
    memeImage.alt = 'Random Meme';
    memeContainer.appendChild(memeImage);
}

