var cubierta = prompt("Bienvenido a Nutrisa. ¿Qué topping te gustaría para tu helado? (oreo, KitKat, brownie)");

cubierta = cubierta.toLowerCase();

var costoBaseHelado = 50;
var costoTopping = 0;

if (cubierta === "oreo") {
    costoTopping = 10;
} else if (cubierta === "kitkat") {
    costoTopping = 15;
} else if (cubierta === "brownie") {
    costoTopping = 20;
} else {
    alert("Lo sentimos, no tenemos este topping.");
    alert("El precio del helado sin topping es: " + costoBaseHelado + " MXN");
}

if (costoTopping !== 0) {
    var costoTotal = costoBaseHelado + costoTopping;
    alert("El precio del helado con topping de " + cubierta + " es: " + costoTotal + " MXN");
}