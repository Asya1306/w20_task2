'use strict';
document.addEventListener('DOMContentLoaded', function (event) {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => showPhoto(data))
    function showPhoto(data){
        const arrOfArts = document.querySelectorAll('img');
        for(let i = 0; i < arrOfArts.length; i++) {
            arrOfArts[i].src = data[Math.floor(Math.random() * data.length)].url;
        }
    }
}
)


