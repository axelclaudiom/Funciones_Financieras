const arr = [130000,160000,150000,140000];
let contador = 0;
let acumulador = 0;
for(let i = 0; i < arr.length; i++){
    
    console.log(arr[i]);
    acumulador += arr[i];
    contador++;
}

console.log(acumulador, '||', contador,'||', acumulador/contador);


// ver de agregar promedio