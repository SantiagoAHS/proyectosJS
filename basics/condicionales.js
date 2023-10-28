/Condicional if/
//if(exp){}
let age =18;
if(age>= 18){
    console.log('Es mayor de edad');
}

//if(exp){} else {}
if(age>=18){
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}

//if ternario exp()? true: false;
age >=18? console.log('Es mayor'): console.log('Es menor');

//if(exp){} else if (exp) else {}
let ppt = Math.random();
if(ppt>0.33){
    console.log('Salio piedra');
} else if(ppt < 0.66){
    console.log('Salio Paple')
} else {
    console.log('Salio Tijera');
}

//switch case 
let day = Math.floor(Math.random()*7);
switch(day){
    case 0:
        console.log('Es Domingo');
        break;
    case 1:
        console.log('Es Lunes');
        break;
    case 2:
        console.log('Es Martes');
        break;
    case 3:
        console.log('Es Miercoles');
        break;
    case 4:
        console.log('Es Jueves');
        break;
    case 5:
        console.log('Es Viernes');
        break;

    default:
        console.log('Es Sabado');
}

// Thruty and Falsy
//'' == True
console.log(''===false);
//'a' == false
console.log('a'=== false);
//0 == false
console.log(0 === false)
//1 == true
console.log(1=== true);

let dato ='';
if (dato===''){
    console.log('No hay nada');
}
if (!dato){
    console.log('No hay nada');
}

let username='';
let defaultname;

if(username){
    defaultname=username;
} else {
    defaultname='Extra';
}

username='Peter';
defaultname= username || 'Extra';
console.log(defaultname);