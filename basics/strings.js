let name="Santiago";
let lastname='Huerta';
let age=19;

console.log("Soy " + name + ' y mi apellido es ' + lastname);

console.log("I'm " + name + " " + lastname);
console.log("I\'m " + name + " " + lastname);

//imprimir soy santiago huerta y tengo 19 años
// String Templates o String Literals
//placeholder ${}
console.log(`Soy ${ name } ${ lastname } y tengo ${ age } años`);

//metodos y taributos para Strins 
const texto = "Este Es uN TexTo";
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.charAt(5));
console.log(texto.endsWith('s'));
console.log(texto.includes('es'));
console.log(texto.length);
console.log('*'.repeat(10));