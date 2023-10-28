//Clclos en JavaScript

//for
for(let i=0; i<3; i++){
    console.log(' vuelta '+ i);
}
//while
let contador = 0;
while(contador<3){
    console.log('vuelta '+ contador);
    contador++;
}
//do while
 contador =0;
 do{
    console.log('vuelta '+ contador)
    contador ++;
 } while(contador === 0);

 //recorrido de estring 
 const name = 'Peter'
 for(let i=0;i< name.length; i++){
    console.log(name[i]);
 }


 //recorido de un array
 const numbers = [1,2,3,4,5,6];
 for(let i=0; i< numbers.length; i++){
    console.log(numbers[i]);
 }

 //for ... of

 for(const item of numbers){
    console.log(item);
 }

 for(const letter of name){
    console.log(letter);
 }