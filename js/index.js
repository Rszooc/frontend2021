/**
 * 1. Usando forEach imprimir el número mayor y el número menor del siguiente arreglo. 
 * 
 */
/**/
// //  Además contar los elementos que tienen el indice par 

const numbers = [13, 27, 95, 7, 25,6, 95];
console.log(numbers);
let max   = 0;
let min   = 0;
let count = 0;


numbers.forEach(number =>{
    if (number % 2 ==0) {
        count += 1;
    }
    if(min == 0 || number < min){
        min = number;
    }else if(number > max){
        max = number;
    }
});

console.log(`Mayor: ${max} Menor: ${min} elementos pares: ${count}`);
console.log(count);



// Antonio Gz, [12.10.21 13:51]
// // 2. Usando forEach imprimir el string con la longitud mayor del siguiente arreglo  
// // además cuantas palabras tienen una longitud de 5,  
// // luego imprimir si la longitud del arreglo es par o impar 
 
// const myStrings = ['first', 'second', 'third', 'fourth', 'reallyLongString', 'sixth'];

// Antonio Gz, [12.10.21 13:51]
// // 1. Usando forEach imprimir el número mayor y el número menor del siguiente arreglo. 
// //  Además contar los elementos que tienen el indice par 
 
// const numbers = [3, 27, 95, 7, 25, 95, 81];