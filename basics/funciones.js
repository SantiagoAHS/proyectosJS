//funciones en JavaScrit
/*
function nombre(params){
    body function
}
const nommbre= funcion (params){
    body function
}
*/

//Funciones sin parametros y sin retorno
function saludo(){
    console.log('Hellooooo!');
}
saludo();

//Finciones con parametros sin retorno
const saludaA = function(name){
    console.log('Holaaa '+ name);
}
saludaA('Clark Kent');

//Funciones con parametros y con retorno
const fact = function(num){
    if(num===0) return 1;
    return fact(num -1) * num;
}
const result = fact(5);
console.log(result);

//arrow function o funciones de fecha
//sin parametros y sin retorno
const saludaEnJApones = () =>{
    console.log('こんにちは');
}
saludaEnJApones();

//con 1 paramettro sin retorno
const mayuscula = (word) =>{
    console.log(word.toUpperCase());
}
mayuscula('hola');

const minuscula = word =>{
    console.log(word.toLowerCase());
}
minuscula('HOLA');

//Dos o mas parametros y con retorno
const fullName = (firstName, lastName) =>{
    return firstName+''+lastName;
}
const nombreCompleto = fullName('Bruce', 'Wayne');
console.log(nombreCompleto);

//si el return es la unica linea que se pude simplificar 
const duplica = num => num * 2;
const doble = duplica(36);
console.log(doble);

/*
function duplica(num){
    return num * 2;
}
*/

//Funciones con parametrsos opcionales
const welcomeToMExico = (user = 'Inventario')=> {
    console.log(`Bienvenido a Mexico ${user}`);
}

welcomeToMExico();
welcomeToMExico("Batman");

//parametros con nombre
const welcomeToUtt=(user='Invitado', city='Mexico')=>{
    console.log(`Bienvenido ${user} de ${ city}`)
}

welcomeToUtt();
welcomeToUtt('Pelon Garcia', 'Chiapas');
welcomeToUtt(city='Metropolis', user='Superman');
