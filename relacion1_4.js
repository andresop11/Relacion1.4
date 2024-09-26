//1

function sum() {
    let sumaTotal = 0;
    let digito;

    // Bucle que solicita números hasta que el usuario decida terminar
    do {
        digito = prompt("Ingresa un número (deja vacío para terminar):");

        // Si el usuario deja el campo vacío termina el bucle
        if (digito === "") {
            break;
        }

        // Convertir el digito a número
        let numero = parseFloat(digito);

        // Verificar que el digito es un número válido
        if (!isNaN(numero)) {
            sumaTotal += numero;  // Sumar el número al total
        } else {
            alert("Por favor, ingresa un número válido.");
        }

    } while (true);  // Se sigue repitiendo hasta que el usuario quiera terminar

    // Mostrar la suma total
    alert("La suma total es: " + sumaTotal);
}

//2
function addOnlyNums() {
    let sumaTotal = 0;
    let digito;

    // Bucle que solicita números hasta que el usuario decida terminar
    do {
        digito = prompt("Ingresa un número (deja vacío para terminar):");

        // Si el usuario deja el campo vacío termina el bucle
        if (digito === "") {
            break;
        }

        // Convertir el digito a número
        let numero = parseFloat(digito);

        // Verificar que el digito es un número válido
        if (!isNaN(numero)) {
            sumaTotal += numero;  // Sumar el número al total
        } else {
            alert("Has ingresado una cadena, no será incluida.");
        }

    } while (true);  // Se sigue repitiendo hasta que el usuario quiera terminar

    // Mostrar la suma total
    alert("La suma total es: " + sumaTotal);
}

//3

function countstheargs(...argumentos) {

    return argumentos.length;

}

//4

function combineTwoArrays(array1, array2) {

    return [...array1, ...array2];
}

//5

function sumEveryOther(...argumentos) {
    let suma = 0;


    for (let i = 0; i < argumentos.length; i += 2) {
        suma += argumentos[i];
    }

    return suma;
}

//6

function divisible(numero) {

    return numero % 3 === 0;
}

//7

function divisibleEntre(numero, divisor) {

    return numero % divisor === 0;
}

//8

function rango(valor, rangoInf, rangoSup) {

    return valor > rangoInf && valor < rangoSup;
}

//9

function tieneTresDigitos(numero) {

    return numero >= 100 && numero <= 999;
}
//10

function areaRectangulo(base, altura) {

    return base * altura;
}

//11

function devuelveIMC(peso, altura) {

    // Calculamos el IMC
    const indiceMasaCorporal = peso / (altura ** 2);
    
    // Devolvemos el IMC con un decimal
    return indiceMasaCorporal.toFixed(1); 

}

//12

function precioFinal(precio,descuento){

  const  descuentoProducto=(precio*descuento)/100
  
  const precio2=precio-descuentoProducto; 

    return precio2.toFixed(2); 
}

//13

function factorial(numero) {
    if (numero < 0) return undefined; // El factorial no está definido para números negativos
    let resultado = 1; // Inicializamos el resultado en 1
    
    for (let i = 1; i <= numero; i++) {
      resultado *= i; // Multiplicamos cada número hasta n
    }
    
    return resultado; // Devolvemos el resultado
  }

//14

