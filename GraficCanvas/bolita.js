const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');

let dirx = 1;
let diry = 1;

let idx = 10;
let idy = 10;

let lastX = idx;
let lastY = idy;

function bolita(x, y){
    // Generar valores RGB aleatorios
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue}`;
    
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
    // Dibujar línea al punto anterior
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    lastX = x;
    lastY = y;
}

setInterval(() => {
    //ctx.clearRect(0, 0, 600, 400);
    bolita(idx, idy);
    if(dirx === 1 && diry === 1){
        idx += 20;
        idy += 20;
    } else if (dirx === 1 && diry === 2){
        idx += 20;
        idy -= 20;
    } else if (dirx === 2 && diry === 1){
        idx -= 20;
        idy += 20;
    } else {
        idx -= 20;
        idy -= 20;
    }
    // Cambiar direcciones
    if(idx > 590) dirx = 2;
    if(idx < 10) dirx = 1;
    if(idy > 390) diry = 2;
    if(idy < 10) diry = 1;
}, 45);
