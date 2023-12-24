var respuesta= prompt("¿Eres bellisimo/a?")

    if (respuesta !== null) {
      respuesta = respuesta.toLowerCase(); 
      
        if (respuesta === "sí" || respuesta === "si") {
        alert("Ciertamente");
        } 
        else if (respuesta === "no") {
        alert("No te creo");
        } 
        else {
        alert("Respuesta no válida. Por favor, responde 'Sí' o 'No'.");
        }
    }
