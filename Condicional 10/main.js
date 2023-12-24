var nivel = prompt("Selecciona el nivel del programa (Course, Carrera, Master):");
var beca = prompt("¿Cuentas con alguna beca? (Facebook, Google, Jesua, Ninguna)");

nivel = nivel.toLowerCase();
beca = beca.toLowerCase();

var costoMensual = 0;
var duracionMeses = 0;
var programa = '';

switch (nivel) {
    case "course":
        costoMensual = 4999;
        duracionMeses = 2;
        programa = 'Course';
        break;
    case "carrera":
        costoMensual = 3999;
        duracionMeses = 6;
        programa = 'Carrera';
        break;
    case "master":
        costoMensual = 2999;
        duracionMeses = 12;
        programa = 'Master';
        break;
    default:
        alert("Por favor, selecciona un nivel válido (Course, Carrera, Master).");
        break;
}

var descuento = 0;
var nombreBeca = '';

if (nivel === "course" || nivel === "carrera" || nivel === "master") {
    if (beca === "facebook") {
        descuento = 0.2;
        nombreBeca = 'Facebook';
    } else if (beca === "google") {
        descuento = 0.15;
        nombreBeca = 'Google';
    } else if (beca === "jesua") {
        descuento = 0.5;
        nombreBeca = 'Jesua';
    } else if (beca === "ninguna") {
        nombreBeca = 'Ninguna';
    } else {
        alert("Por favor, ingresa una beca válida (Facebook, Google, Jesua, Ninguna).");
    }
} else {
    alert("Por favor, ingresa un nivel válido antes de la beca.");
}

var precioDescuento = costoMensual * (1 - descuento);
var costoTotal = precioDescuento * duracionMeses;


 if (nombreBeca !== 'Ninguna') {
        var mensaje = "El costo mensual con descuento para el programa " + programa + " de duración " + duracionMeses + " meses, con beca " + nombreBeca + ", es: " + precioDescuento.toFixed(2) + " MXN\n";
        mensaje += "El costo total del programa " + programa + " de duración " + duracionMeses + " meses, con beca " + nombreBeca + ", es: " + costoTotal.toFixed(2) + " MXN";
        alert(mensaje);
} else {
        var mensajeSinBeca = "El costo mensual sin beca para el programa " + programa + " de duración " + duracionMeses + " meses es: " + costoMensual.toFixed(2) + " MXN\n";
        mensajeSinBeca += "El costo total del programa " + programa + " de duración " + duracionMeses + " meses es: " + (costoMensual * duracionMeses).toFixed(2) + " MXN";
        alert(mensajeSinBeca);
}
