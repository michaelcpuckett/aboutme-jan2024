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

const imageList = [];

randomDog.addEventListener('click', fetchNewDogImage);

function fetchNewDogImage() {
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
            const filtered = imageUrl.slice(-4).toLowerCase();
            if (filtered === '.mp4' || filtered === 'webm') {
                fetchNewDogImage();
            }
            img.src = imageUrl;
            img.alt = 'Random Dog Image';
            img.id = 'random-dog';

            imageList.push(img.src);
            console.log(imageList);

            const imageElement = document.getElementById('image-container');
            imageElement.innerHTML = '';
            imageElement.appendChild(img);
        })

        .catch(error => {
            console.error('Error fetching the image:', error);
        });
}


const checkBox = document.getElementById('dark-mode');
const defaultBackground = window.getComputedStyle(document.body).background;

function darkMode() {
    if (checkBox.checked) {
        document.body.style.background = 'black';
        document.body.style.color = 'orange';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.style.background = defaultBackground;
        document.body.style.color = 'white';
        localStorage.setItem('darkMode', 'disabled');
    }
}

checkBox.addEventListener('change', darkMode);

function userPreference() {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
    checkBox.checked = darkModeEnabled;
    darkMode();
    console.log(darkModeEnabled);
}

userPreference();