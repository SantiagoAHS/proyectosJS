//Funcion de orden superior
//high orden funtions
//funciones que reciben como parametros
//mas funciones

const myFuntionWithBigName=()=>{
    console.log('Funcion Inicial');
}
console.log(myFuntionWithBigName);
myFuntionWithBigName();

const myFun=myFuntionWithBigName;
myFun();

const funOne =()=>{
    console.log('Ejecuta fincion uno');
}

const funTwo =(nombre)=>{
    console.log('hi! '+nombre);
    console.log('Ejecyta fincion dos');
}

funOne();
funTwo('Pelon');

const funThree =(otherFuntion)=>{
    console.log('Inicia funcion 3');
    otherFuntion();
    console.log('Termina funcion 3')
}

funThree(funOne);
funThree(()=> console.log('Funcion de flecha'));