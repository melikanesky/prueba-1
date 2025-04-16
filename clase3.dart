// Ejercicio 1 - Arrays
console.log('---------- Ejercicio 1 -----------');

let numeros = [1, 2, 3, 4, 5, 6];
numeros.push(7);
numeros.pop();
console.log(numeros);

// Ejercicio 2 - Objetos
console.log('---------- Ejercicio 2 -----------');

const persona = {
  nombre: 'Melina',
  edad: 34,
  dni: 35272238
}

console.log(persona.nombre);

// Ejercicio 3 - Funciones
console.log('---------- Ejercicio 3 -----------');

const num1 = 1;
const num2 = 2;

const sumar = function(num1, num2){
  return num1 + num2;
}

const sumarFlecha = (num1, num2) => num1 + num2;

console.log(sumar(num1, num2));
console.log(sumarFlecha(num1, num2));

// Ejercicio 4 - Metodos de Array
console.log('---------- Ejercicio 4 -----------');

let numeros2 = [1, 2, 3, 4, 5, 6];

console.log(numeros2.find(num => num > 3));
console.log(numeros2.filter(num => num > 2));
console.log(numeros2.map(num => num * 2));