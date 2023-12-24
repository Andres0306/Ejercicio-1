var numero1 = prompt("Dame el primer número:");
var numero2 = prompt("Dame el segundo número:");
var numero3 = prompt("Dame el tercer número:");

if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
    if (numero1 > numero2 && numero1 > numero3) {
        alert("El número " + numero1 + " es el mayor.");
    } else if (numero2 > numero1 && numero2 > numero3) {
        alert("El número " + numero2 + " es el mayor.");
    } else if (numero3 > numero1 && numero3 > numero2) {
        alert("El número " + numero3 + " es el mayor.");
    } else if (numero1 === numero2 && numero1 === numero3) {
        alert("Los tres números son iguales.");
    } else {
        alert("Hay al menos dos números iguales entre sí.");
    }
} else {
    alert("Por favor, ingrese tres números válidos.");
}