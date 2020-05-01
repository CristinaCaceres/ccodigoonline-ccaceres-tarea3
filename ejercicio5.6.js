// EJERCICIO 5.6
// Realice y represente mediante diagrama de flujo y pseudocódigo un
// algoritmo que lea los nombres y las edades de diez alumnos, y que los
// datos se almacenen en dos vectores, y con base en esto se determine
// el nombre del alumno con la edad mayor del arreglo.

let nombre = [];
let edad = [];
let edad_mayor=0;
let indice=0;
let i;

for (i = 0; i < 10; i++) {
    let x = prompt("Ingrese nombre del alumno");
    let y = +prompt("Ingrese edad del alumno");
    nombre.push(x);
    edad.push(y);
    if(edad_mayor<y){
        edad_mayor = y;
        indice = i;
    }
}

console.log(`El alumno con la edad mayor es ${nombre[indice]} y su edad es ${edad[indice]}`);
