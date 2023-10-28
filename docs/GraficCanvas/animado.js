const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');

let idx=0;
let idy=0;
let moveRight = true;
let ini = 0;

function rgbRandom(){
    const letras = '0123456789abcdef';
    let colorRgb = '#';
    for (let i = 0; i<6; i++){
        colorRgb += letras.charAt(Math.floor(Math.random()*16));
    }
    return colorRgb;
}

function hslColor(h){
    return `hsl(${ h },50%,50%)`;
}

function cuadro(x, y){
    ctx.fillStyle= hslColor(ini);
    ini += 10;
    ctx.fillRect(x, y, 20, 20);
    ctx.strokeRect(x, y, 20, 20);
}

setInterval(() => {
    cuadro(idx, idy);

    if (moveRight) {
        if (idx < 380) {
            idx += 20;
        } else {
            moveRight = false; // Cambiar dirección a la izquierda
            idy += 20;
        }
    } else {
        if (idx > 0) {
            idx -= 20;
        } else {
            moveRight = true; // Cambiar dirección a la derecha
            idy += 20;
        }
    }
}, 200);