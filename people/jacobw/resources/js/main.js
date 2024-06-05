const activate = document.getElementById('activate');
const selectElement = document.getElementById('color');
const randomDog = document.getElementById('dog');

selectElement.addEventListener('change', (event) => {

    const selectedColor = event.target.value;

    activate.style.backgroundColor = selectedColor;

    if (!selectedColor) {
        activate.style.color = 'black';
    } else {
        activate.style.color = 'white';
    }

});

activate.addEventListener('click', (event) => {

    event.preventDefault();

    const colorForm = document.getElementById('color-change');
    const element = document.querySelector('body');
    const computedStyle = window.getComputedStyle(element);
    const background = computedStyle.background;
    const selectedColor = colorForm.elements.color.value || background;

    document.body.style.background = selectedColor;

});

randomDog.addEventListener('click', () => {

    fetch('https://random.dog/woof.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error!');
            }
            return response.json();
        })
        .then(data => {
            const imageUrl = data.url;
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = 'Random Dog Image';
            img.id = 'random-dog'

            const imageElement = document.getElementById('image-container');
            imageElement.innerHTML = '';
            imageElement.appendChild(img);
        })
        .catch(error => {
            console.error('Error fetching the image:', error);
        });    
});