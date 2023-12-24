//4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', 
//en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
var numero= prompt("Dame tu número de cliente: ")

if (!isNaN(numero)){
    
    var respuesta=parseFloat(numero);
    // Obtener la parte entera del número decimal
     var parteEntera = parseInt(respuesta);

console.log(parteEntera)

    if(parteEntera===1000){
        alert("Ganaste un premio");
    }
    else{
        alert("Lo sentimos, sigue participando");
    }
}
else{
        alert("Por favor, ingresa un número válido.");
    }
