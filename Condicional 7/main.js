var diaSemana = prompt("Ingresa un día de la semana:");

// Convertir a minúsculas y quitar acentos
diaSemana = diaSemana.toLowerCase()
    .replace(/[áä]/gi, 'a')
    .replace(/[éë]/gi, 'e')
    .replace(/[íï]/gi, 'i')
    .replace(/[óö]/gi, 'o')
    .replace(/[úü]/gi, 'u');

if (diaSemana === "lunes") {
    alert("Es el comienzo de la semana, ánimo para hoy");
} else if (diaSemana === "viernes") {
    alert("¡Por fin es viernes! ¡Disfruta tu día!");
} else if (diaSemana === "sabado" || diaSemana === "domingo") {
    alert("¡Feliz fin de semana!");
} else {
    alert("No es ni lunes, viernes, sábado ni domingo. Otro día de la semana.");
}