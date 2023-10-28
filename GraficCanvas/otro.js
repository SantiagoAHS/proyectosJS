const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');

let dirx = 1;
let diry = 1;

let idx = 10;
let idy = 10;

function bolita(x, y){
    // Generar valores RGB aleatorios
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
}

function cuadrito(x, y){
    ctx.fillStyle = hslColor(ini);
    ini += 2;
    ctx.fillRect(x, y, 40, 40);
    ctx.strokeRect(x, y, 40, 40);
}

function emoji(x ,y){
    ctx.font = '45px serif';
    ctx.fillText('👻', x, y);
}

function emoji2(x ,y){
    ctx.font = '45px serif';
    ctx.fillText('🐔', x, y);
}

for(let i=0; i<5; i++){
    const x =Math.round(Math.random()*30)
    const y =Math.round(Math.random()*20)
    emoji2(x * 20, y *20);
}

document.querySelector('body')
    .addEventListener('keypress', (e) => {
        e.preventDefault();
    })

setInterval(() => {
    //ctx.clearRect(0, 0, 600, 400);
    emoji(idx, idy);
    if(idx > 650)idx=0;   
    idx++; 
    
})
    /*if(dirx === 1 && diry === 1){
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
    if(idy < 10) diry=1;
}, 70);
*/