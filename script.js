function validarRespuesta(estado, respuesta, pregunta) {
    const feedbackElement = document.getElementById("feedback");
    const botonRespuestaSeleccionada = document.getElementById("respuesta" + respuesta);
    const botones = document.querySelectorAll("#pregunta" + pregunta + " .btn");

    limpiarClasesAnteriores(botones);
    actualizarRespuestaVisual(botonRespuestaSeleccionada, estado);
    feedbackElement.textContent = estado === 1 ? "Correcto" : "Incorrecto";

    muestraPreguntaSiguiente(pregunta);
}

function limpiarClasesAnteriores(botones) {
    botones.forEach(boton => boton.classList.remove("correcto", "incorrecto"));
}

function actualizarRespuestaVisual(boton, estado) {
    if (estado === 1) {
        boton.classList.add("correcto");
    } else {
        boton.classList.add("incorrecto");
    }
}

function muestraPreguntaSiguiente(pregunta) {
    setTimeout(() => {
        const preguntaSiguiente = pregunta + 1;
        actualizarEncabezado(preguntaSiguiente);
        cambiarPreguntaVisible(pregunta, preguntaSiguiente);
    }, 5000);
}

function actualizarEncabezado(preguntaSiguiente) {
    const header = document.getElementById("header");
    const numeroPreguntaElement = document.getElementById("numeroPregunta");
    const tituloCategoriaElement = document.getElementById("tituloCategoria");

    numeroPreguntaElement.textContent = "Pregunta número: " + preguntaSiguiente;

    if (preguntaSiguiente === 2) {
        tituloCategoriaElement.textContent = "Categoría: Geografía";
        actualizarClaseHeader(header, ["historia", "arte"], "geografia");
    } else if (preguntaSiguiente === 3) {
        tituloCategoriaElement.textContent = "Categoría: Arte y Literatura";
        actualizarClaseHeader(header, ["historia", "geografia"], "arte");
    } else if (preguntaSiguiente === 4) {
        numeroPreguntaElement.style.display = "none";
        tituloCategoriaElement.textContent = "Fin";
    }
}

function actualizarClaseHeader(header, clasesARemover, claseAgregar) {
    header.classList.remove(...clasesARemover);
    header.classList.add(claseAgregar);
}

function cambiarPreguntaVisible(preguntaActual, preguntaSiguiente) {
    document.getElementById("feedback").textContent = "";
    document.getElementById("pregunta" + preguntaActual).style.display = "none";
    document.getElementById("pregunta" + preguntaSiguiente).style.display = "block";
}


