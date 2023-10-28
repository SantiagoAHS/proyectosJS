const url="http://127.0.0.1:5500/";

console.log('Inicia Peticion 1');
fetch(url+'respuesta.txt')
    .then(respuesta=>respuesta.text())
    .then(datos => console.log(datos))
    .catch(error => console.log(error))
    
    
console.log('Inicia Peticion 2');
fetch(url+'respuesta.json')
    .then(respuesta=>respuesta.json())
    .then(datos => console.log(datos))
    .catch(error => console.log(error))