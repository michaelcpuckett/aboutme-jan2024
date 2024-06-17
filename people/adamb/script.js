/* dog fetch API */
document.getElementById('fetchDogImage').addEventListener('click', function() {
    fetch('https://random.dog/woof.json')
        .then(response => response.json())
        .then(data => {
            const dogImagesContainer = document.getElementById('dogImages');
            const newImage = document.createElement('img');
            newImage.src = data.url;
            dogImagesContainer.appendChild(newImage);

// Update the z-index and transform of all images
            const images = dogImagesContainer.querySelectorAll('img');
            images.forEach((img, index) => {
                img.style.zIndex = index + 1;
                img.style.transform = `translate(${index * 20}px, ${index * 20}px)`;
            });
        })
        .catch(error => {
            console.error('Error fetching the dog image:', error);
        });
});


/*form element to change background colors*/

document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById('colorPicker');

    colorPicker.addEventListener('input', function() {
        document.body.style.backgroundColor = colorPicker.value;
    });
});


/*dark mode toggle*/