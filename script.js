async function getRandomContent() {
    try {
        // Determine whether to fetch a random fish gif or a random Colombia gif
        const randomChoice = Math.random() < 0.5 ? 'fish' : 'Colombia';
        
        // Fetch the random content based on the choice
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=pvyh7KDSwxvDlDN5oG6USLvuLrNj5ZSG&tag=${randomChoice}`);
        const data = await response.json();

        // Extract the URL of the gif from the data
        const gifUrl = data.data.image_original_url;

        // Display the content on the webpage
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

