// Ejercicio 5.10
// Realice un algoritmo que lea dos vectores de cien elementos y que calcule
// la suma de éstos guardando su resultado en otro vector, el cual se
// debe presentar en forma impresa.

let vector1 = [2, 4, 5, 8, 7, 3, 2, 1, 5];
let vector2 = [2, 3, 5, 8, 6, 3, 9, 1, 5];
let suma = [];
let i;

if (vector1.length === vector2.length) {
    for (i = 0; i < vector1.length; i++) {
        suma[i] = vector1[i] + vector2[i];
    }
}

let j = 0;
while (j < vector2.length) {
    console.log(`Vector 3 posicion ${j} valor : ${suma[j]}`);
    j++;
}
