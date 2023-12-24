var numero= prompt("Dame un número entero (si es es decimal solo considerare la parte entera) ")
if (!isNaN(numero)){

    var respuesta=parseFloat(numero);
    // Obtener la parte entera del número decimal
     var parteEntera = parseInt(respuesta);
console.log(parteEntera)
    if(parteEntera%2===0){
        alert(parteEntera + " Es par");
    }
    else{
        alert(parteEntera + " Es impar");
    }
}
else{
        alert("Por favor, ingresa un número válido.");
    }
