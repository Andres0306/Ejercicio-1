// Solicitar al usuario el tipo de vehículo y los kilómetros recorridos
var tipoVehiculo = prompt("Ingrese el tipo de vehículo (coche, moto, autobús):");
var kilometrosRecorridos = parseFloat(prompt("Ingrese la cantidad de kilómetros recorridos:"));
var litrosConsumidos = parseFloat(prompt("Ingrese la cantidad de litros consumidos:"));

// Normalizar
tipoVehiculo = tipoVehiculo.toLowerCase()
    .replace(/[áä]/g, 'a')
    .replace(/[éë]/g, 'e')
    .replace(/[íï]/g, 'i')
    .replace(/[óö]/g, 'o')
    .replace(/[úü]/g, 'u')
    .replace(/[ñ]/g, 'n');

var precioKilometro = 0;

// Establecer el precio por kilómetro según el tipo de vehículo
switch (tipoVehiculo.toLowerCase()) {
    case "coche":
        precioKilometro = 0.20;
        break;
    case "moto":
        precioKilometro = 0.10;
        break;
    case "autobús":
        precioKilometro = 0.5;
        break;
    default:
        alert("Tipo de vehículo inválido.");
        break;
}

// Costo total
var costoTotal = precioKilometro * kilometrosRecorridos;

//cargo extra por litros
var cargoExtra = 0;
if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
    cargoExtra = 5;
} else {
    cargoExtra = 10;
}

// Total a pagar
var totalPagar = costoTotal + cargoExtra;

// Mostrar el resultado
var mensaje = "El total a pagar por el viaje en " + tipoVehiculo + " de " + kilometrosRecorridos + " kilómetros es: " + totalPagar.toFixed(2) + " MXN.";
alert(mensaje);