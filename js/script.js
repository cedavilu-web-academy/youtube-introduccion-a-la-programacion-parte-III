//Ciclos - Bucles iterativos
//while - Mientras
console.log('Trabajando con el while');
let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}
console.log('-----------------------------');
let numero1 = 10;
while (numero1 >=1) {
    console.log(numero1);
    numero1--;
}

//do while
console.log('Trabajando con el do while');
let valor1 = 11;
do {
    console.log(valor1);
    valor1++
} while (valor1 <=10);

let respuesta = true;
let color;
console.log(typeof(color));
// do {
//     color = prompt('Indique su color favorito');
//     respuesta = confirm('Desea continuar?')
// } while (respuesta== true);
console.log('Su color favorito es: '+color);

console.log('Trabajando con el ciclo for');
for(let i = 10; i >= 1; i--){
    console.log(i);
}

console.log('Trabajando con Array');
//Array - Arreglos - Vectores
//                  0        1        2       3
let miFamilia = ['Gloria','Indira','Victor','Luis'];
console.log(miFamilia);
console.log(miFamilia.length);
for(let i = 0; i < miFamilia.length ; i++){
    console.log(miFamilia[i]);
}

let frutas = ['manzana', 'banana', 'cereza'];
for (let fruta of frutas) {
  console.log(fruta); // Imprime cada fruta del array
}
