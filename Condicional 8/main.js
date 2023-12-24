var calificacion = prompt("Ingresa tu calificación (entre 1 y 10):");

if (!isNaN(calificacion)) {
    calificacion = parseInt(calificacion);

    if (calificacion >= 1 && calificacion <= 10) {
        if (calificacion < 6) {
            alert("Reprobado");
        } else if (calificacion >= 6 && calificacion <= 8) {
            alert("Regular");
        } else if (calificacion === 9) {
            alert("Bien");
        } else if (calificacion === 10) {
            alert("Excelente");
        }
    } else {
        alert("La calificación debe estar entre 1 y 10");
    }
} else {
    alert("Por favor, ingresa un número válido.");
}