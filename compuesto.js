let compuestoAplicado = 0;
let porcentajeAcumulado = 0;
let porcentajeFinalAcumulado = 0;

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
//                          Calculo de porcentaje
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

const calcularPorcentaje = (valor, porcentaje) =>{
    return valor * porcentaje / 100
}
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
//                          Calculo de porcentaje
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

const calcularCompuesto = (valor, porcentaje) =>{
    return valor + (valor * porcentaje / 100);
}

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
//                          Calculo con Formula de interes compuesto
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

const calculoCompuesto = (capInicial, porcInteres, mes) =>  {
    return capInicial * ( 1+ (porcInteres/100) ) ** mes;
}


// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
//                          Regla de Tres Simple
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

// Cuanto % representa un valor del valor total
// = valor * 100 / valor total

const reglaDeTres = (valor, valorTotal) => {
    return valor * 100 / valorTotal + '%'
}


// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
//                          Interes Compuesto
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// modificar tema de porcentaje acumulado y usar la regla de tres simple
// ver de usar la formula de interes compuesto

const interesCompuesto = ( valor, porcentaje, meses) => {
    let contador = 1;
    console.log('-- Interes compuesto inversion inicial:', valor);
    console.log('-- Porcentaje de interes:' , porcentaje, '%'); 
    console.log('-- meses:' ,meses); 

    while(contador <= meses)
    {
        
        if(compuestoAplicado == 0){
            porcentajeAcumulado  = porcentaje + (porcentaje * porcentaje / 100)
            compuestoAplicado = valor + (valor * porcentaje / 100)
            console.log('Mes' , contador, 'Ganancia' , compuestoAplicado, '% Acum' , porcentajeAcumulado, '%');
        }
        else{
            porcentajeAcumulado = porcentajeAcumulado + (porcentajeAcumulado * porcentaje / 100)
            compuestoAplicado = compuestoAplicado + (compuestoAplicado * porcentaje/100)
            console.log('Mes' , contador, 'Ganancia' , compuestoAplicado, '% Acum' , porcentajeAcumulado, '%');
            if(contador == meses-1)
            {
                porcentajeFinalAcumulado = porcentajeAcumulado;
            }
        }
        contador++
    }
    console.log('-- Resultado de inversion:')
    console.log('- Ganancia total:', compuestoAplicado);
    console.log('- % acumulado:' , porcentajeFinalAcumulado);
}

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
//                          Interes Compuesto
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

const interesCompuestoRefact = (capInicial, porcentaje, meses) => {
    let contador = 1;
    console.log('               Calculo de interes compuesto')
    console.log('______________________________________________________________');
    console.log(' ')
    console.log('-- Capital Inicial: ', capInicial);
    console.log('-- Porcentaje: ' , porcentaje);
    console.log('-- Meses o ciclos: ' , meses);
    console.log(' ')
    console.log('______________________________________________________________');
    while(contador <= meses){
        compuesto = calculoCompuesto(capInicial, porcentaje, contador);
        porcGain = parseInt(reglaDeTres(compuesto,capInicial));
        resta = 100;
        //console.log('- Mes: ', contador, 'Ganancia:', compuesto - capInicial , '||' , compuesto, '% gain:' , porcGain - resta, '%', '|| % Acum:', porcGain,'%');
        console.log('- Mes: ', contador, 'Ganancia:', compuesto - capInicial, '(',porcGain - resta, '%) ||' , compuesto, '|| % Acum:', porcGain,'%');
        contador++
    }
}


// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
//                          Inversion Tradicional
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
let capitalAcumulado = 0;
const inversion = (valor, porcentaje, pReinv, meses) => {
    let contador = 1;
    while(contador <= meses){
        if(capitalAcumulado == 0){
            console.log(calcularPorcentaje(valor , porcentaje))
            console.log(calcularPorcentaje(valor, pReinv))
            capitalAcumulado =  valor + calcularPorcentaje(valor, pReinv)
            console.log('---------------------------------------------------------')
            console.log('+ Mes:' , contador , 'Inversion:' ,  capitalAcumulado , 'Ganancia: ' , calcularPorcentaje(valor , porcentaje))
            console.log('---------------------------------------------------------')
        }
        else{

            capitalAcumulado =  capitalAcumulado + calcularPorcentaje(valor, pReinv)
            console.log('---------------------------------------------------------')
            console.log('+ Mes:' , contador , 'Inversion:' ,  capitalAcumulado , 'Ganancia: ' , calcularPorcentaje(capitalAcumulado , porcentaje))
            console.log('---------------------------------------------------------')
        }
        contador++
    }
}



//console.log(reglaDeTres(50000, 100000));

//console.log(calcularPorcentaje(100000,50));
//interesCompuesto(100000,50, 12)

//inversion(100000, 50, 6, 3);

//console.log(calculoCompuesto(100000, 50, 12))
interesCompuestoRefact(100000, 50, 12)