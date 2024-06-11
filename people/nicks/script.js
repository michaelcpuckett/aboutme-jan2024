document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('backgroundColor').addEventListener("input", (e) => {
        document.body.style.backgroundColor = e.target.value;
    });

    document.getElementById('getCat').addEventListener('click', (e) => {
        alert('👎');
    });

    document.getElementById('getDoggo').addEventListener('click', (e) => {
        getRandomDoggo();
    });

    const allDoggos = [];
    let currentIndex = 0;

    const doggoGallery = document.querySelector('.doggo-section .gallery');

    if(!doggoGallery.children.length) { 
        getRandomDoggo()
    }

    function isImage(url) {
        return url.includes('.png') | url.includes('.jpg') | url.includes('.gif') | url.includes('.jpeg');
    }

    function isVideo(url) {
        return url.includes('.mp4');
    }

    async function getRandomDoggo() {
        let response;

        try {
            response = await fetch('https://random.dog/woof.json');
        } catch (error) {
            console.log(error);
            return;
        }

        const doggo = await response.json();

        if(isImage(doggo.url.toLowerCase())) {
            console.log('isImage');
            const img = document.createElement('img');
            img.src = doggo.url;

            img.addEventListener('load', scrollRight);

            allDoggos.push(img);

            doggoGallery.appendChild(img);
        }

        if(isVideo(doggo.url.toLowerCase())) {
            console.log('isVideo');

            const video = document.createElement('video');
            video.autoplay = true;
            
            video.loop = true;
            video.muted = true;

            video.addEventListener('loadeddata', scrollRight);

            const source = document.createElement('source');
            source.type = "video/mp4";
            source.src = doggo.url;

            allDoggos.push(video);

            video.appendChild(source);
            doggoGallery.appendChild(video);
        }

        
    }
    
    function scrollRight() {
        const rect = doggoGallery.getBoundingClientRect();
        doggoGallery.scrollLeft = rect.right;
    }

    function updateDoggos() {
        const currentDoggo = allDoggos[currentIndex];

        const gallery = document.querySelectorAll('.test .gallery .gallery-item');

        console.log(gallery);

        gallery[1].innerHTML = "";
        gallery[1].appendChild(currentDoggo);

    }

    

});