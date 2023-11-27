async function getRandomContent() {
    try {
        const randomChoice = Math.random() < 0.5 ? 'fish' : 'Colombia';
        const apiKey = 'pvyh7KDSwxvDlDN5oG6USLvuLrNj5ZSG';
        const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${randomChoice}`;

        console.log('API URL:', apiUrl);

        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log('API Response:', data);

        const gifUrl = data.data.image_original_url;
        displayContent(gifUrl);
    } catch (error) {
        console.error('Error fetching content:', error);
    }
}


function displayContent(gifUrl) {
    // Display the gif
    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = '';
    const gifImage = document.createElement('img');
    gifImage.src = gifUrl;
    gifImage.alt = 'Random Gif';
    gifContainer.appendChild(gifImage);
}

