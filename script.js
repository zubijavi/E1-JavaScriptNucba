// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function funcionE1(a){
    if (a % 2 == 0){
        console.log("Par");
    }else{
        console.log("Impar");
    }
}


funcionE1(8)

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function funcionE2(a,b){
    if (a>b){
        console.log(a+" es mayor a "+b);
    }else if(b>a){
        console.log(b+" es mayor "+a);
    }else{
        console.log("Los nros son iguales");
    }
}

funcionE2(3,5)

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function funcionE3(a){
    if (a%5==0){
        console.log(a+" es multiplo de 5");
    }else {
        console.log(a+" NO es multiiplo de 5");
    }
}

funcionE3(45)

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function funcionE4(a){
    for(let i=0; i<=a; i++){
        console.log(i);
    }
}

funcionE4(8)


// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function funcionE5(palabra, numero) {
    let resultado = palabra.repeat(numero);
    console.log(resultado);
}

funcionE5("Casa",4)

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array

let array = ["casa", 2,"arbol",4, "pelota"]

function funcionE6(a){
    a.forEach(element => {
        console.log(element);
    });
}

funcionE6(array)

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

let arrayNros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function funcionE7(a) {
    a.forEach((num, index) => {
        if (index !== 4) {
            console.log(num);
        }
    });
}

funcionE7(arrayNros);

// Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

// let arrayNros = [1,2,3,4,5,6,7,8,9,10]

function funcionE8(array, nro) {
    array.forEach(element => {
        console.log(element*nro);
    });
    
}

funcionE8(arrayNros,3)