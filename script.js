function validarRespuesta(estado, respuesta, pregunta) {
    feedback = "";
    botonRespuestaSeleccionada = document.getElementById("respuesta" + respuesta);
    if (estado == 1) {
        botonRespuestaSeleccionada.classList.add("Correcto");
        feedback = "Correcto";
    } else {
        botonRespuestaSeleccionada.classList.add("Incorrecto");
        feedback = "Incorrecto";
    }

    document.getElementById("feedback").textContent = feedback;
    muestraPreguntaSiguiente(pregunta);
}

function muestraPreguntaSiguiente(pregunta) {
    preguntaSiguiente = pregunta + 1;
    setTimeout(() => {
        document.getElementById("feedback").textContent = "";
        document.getElementById("pregunta" + pregunta).style.display = "none";
        document.getElementById("pregunta" + preguntaSiguiente).style.display = "block";
    }, 5000);
}