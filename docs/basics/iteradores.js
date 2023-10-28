// Iteradores de Arrays
const fruits=['apple','melon','orange','cherry'];


//forEach
//itera un array
console.log('Arrow Funtion')
fruits.forEach(
    (fruit) => {
        console.log(`fruta ${fruit}`)
    }
);

console.log('Arrow funtion Simplified')
fruits.forEach(fruit => console.log(`fruta ${fruit}`));

//map
//regresa un array nuevo a partir del original
const fruitsMayus = fruits.map(
    fruit =>{
        return fruit.toUpperCase();
    }
);
console.log(fruits);
console.log(fruitsMayus);

const numbers =[1,2,3,4,5]
const squares = numbers.map(num => num *num);
console.log(numbers);
console.log(squares);

//fiter
//crea un array nueva a partir de una consicion

const starsWithA= fruits.filter(fruit => fruit.startsWith('a'));
console.log(fruits);
console.log(starsWithA);

const pares = numbers.filter(num => num % 2 !== 0)
console.log(numbers);
console.log(pares); 

// reduce()
//Retorno un unico valor a patir de un array original
const sumatoria = numbers.reduce((a,b) => a + b);
console.log(numbers);
console.log(sumatoria);

const factorial = numbers.reduce((a,b) => a * b);
console.log(numbers);
console.log(factorial);

const factorialr = numbers.reduce((a,b) => a - b);
console.log(numbers);
console.log(factorialr);

//some()
//evalua cada eemento retona el true si al menos uno cumple una consicion
console.log(numbers.some(num => num >= 5));
console.log(numbers.some(num => num > 6));

//every()
//regresa true si todos cumplen 
console.log(numbers.every(num => num > 0));
console.log(numbers.every(num => num > 4));

console.log(fruits);
console.log(fruits.join(' - '));

