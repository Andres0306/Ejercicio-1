var numero= prompt("Dame un número")
if (!isNaN(numero)){

    respuesta=parseFloat(numero)

    if(respuesta!==0 && respuesta%2===0){
        alert(respuesta + " Es divisible entre dos");
    }
    else{
        alert(respuesta + " No es divisible entre dos");
    }
}
else{
        alert(" Por favor, ingresa un número válido.");
    }
