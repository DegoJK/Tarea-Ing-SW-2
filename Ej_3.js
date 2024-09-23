const numero1 = 15;
const numero2 = 20;
const numero3 = '25';

if (numero1 >= numero2) {
    console.log("El numero1 ", numero1, " es mayor o igual que el numero2 ", numero2);
    
}

if (numero1 <= numero2) {
    console.log("El numero1 ", numero1, " es menor o igual que el numero2 ", numero2);
}

if (numero1 < numero3) {
    console.log("El numero1 ", numero1, " es menor que el numero3 ", numero3);
}

if (numero3 < numero2) {
    console.log("El numero3 ", numero3, " es menor que el numero2 ", numero2);
}

if (numero1 !== numero3) {
    console.log("El numero1 ", numero1, " es estrictamente diferente que el numero3 ", numero3);
}

if (numero1 === numero2) {
    console.log("El numero1 ", numero1, " es estrictamente igual que el numero2 ", numero2);
}