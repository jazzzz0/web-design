function validarRespuesta(estado, respuesta, pregunta) {
    let feedback = "";
    const botonRespuestaSeleccionada = document.getElementById("respuesta" + respuesta);

     // Limpiar las clases anteriores de todos los botones en la pregunta actual
     const botones = document.querySelectorAll("#pregunta" + pregunta + " .btn");
     botones.forEach(boton => boton.classList.remove("correcto", "incorrecto"));

     // Añadir la clase correspondiente al botón seleccionado
    if (estado === 1) {
        botonRespuestaSeleccionada.classList.add("correcto");
        feedback = "Correcto";
    } else {
        botonRespuestaSeleccionada.classList.add("incorrecto");
        feedback = "Incorrecto";
    }

    document.getElementById("feedback").textContent = feedback;
    muestraPreguntaSiguiente(pregunta);
}

function muestraPreguntaSiguiente(pregunta) {
    const preguntaSiguiente = pregunta + 1;
    setTimeout(() => {
        const header = document.getElementById("header");
        
        if (preguntaSiguiente === 2) {
            document.getElementById("tituloCategoria").textContent = "Categoría: Geografía";
            header.classList.remove("historia", "arte");
            header.classList.add("geografia");
        } else if (preguntaSiguiente === 3) {
            document.getElementById("tituloCategoria").textContent = "Categoría: Arte y Literatura";
            header.classList.remove("historia", "geografia");
            header.classList.add("arte");
        } else if (preguntaSiguiente === 4) {
            document.getElementById("numeroPregunta").style.display = "none";
            document.getElementById("tituloCategoria").textContent = "Fin";
        } else {
            document.getElementById("numeroPregunta").textContent = "Pregunta número: " + preguntaSiguiente;
        }

        document.getElementById("feedback").textContent = "";
        document.getElementById("pregunta" + pregunta).style.display = "none";
        document.getElementById("pregunta" + preguntaSiguiente).style.display = "block";
    }, 5000);
}
