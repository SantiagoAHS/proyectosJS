const datos = [1, 2, 3, 4, 5, 6]

const myPromise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            //resolve(datos);
            reject('No se pudo ;/')
        }, 3000);
    }
);

console.log(myPromise);

console.log('Inicia Promesa');

myPromise.then((data) => {
    console.log(data);
    console.log('Finaliza Promesa');
}).catch(error=> console.log(error));

console.log('El codigo continua');