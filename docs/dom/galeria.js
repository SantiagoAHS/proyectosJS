const container = document.querySelector('.container');
const image = document.querySelector('#image');


function setImage(e){
    const imageSrc=e.target.src;
    image.src = imageSrc;
}

container.addEventListener('click', setImage)