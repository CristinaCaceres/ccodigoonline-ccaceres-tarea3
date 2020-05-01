// Ejercicio 5.8
// Realice un algoritmo que lea un vector y a partir de él forme un segundo
// vector, de tal forma que el primer elemento pase a ser el segundo,
// el segundo pase a ser el tercero, el último pase a ser el primero, y así
// sucesivamente. Represéntelo mediante un diagrama de flujo.

let vector1 = [2,4,5,8,7,3,2,1,5];
let vector2 = [];
let i;

for(i=0;i<vector1.length;i++){
    
    if(i===vector1.length-1){
        vector2[0] = vector1[i]; 
    }
    else{
        vector2[i+1] = vector1[i]; 
    }
}

let j=0;
while(j<vector2.length){
    console.log(`Vector 2 posicion ${j} valor : ${vector2[j]}`);
    
    j++;
}
