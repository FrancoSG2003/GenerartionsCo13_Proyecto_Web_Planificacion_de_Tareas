const botonAgregar  = document.getElementById("btnAgregarTarea");
const formulario = document.getElementById("formTarea");
const overlay = document.getElementById("overlay");
const botonCancelar = document.getElementById("btnCancelar")
const botonGuardar = document.getElementById("btnGuardar");

const nombreTarea = document.getElementById("nombreTarea");
const fechaTarea = document.getElementById("fechaTarea");
const descripcionTarea = document.getElementById("descripcion");

const listaTareas = document.getElementById("listaTareas");

const errorNombre = document.getElementById("errorNombre");
const errorFecha = document.getElementById("errorFecha");
const errorDescripcion = document.getElementById("errorDescripcion");

const hoy = new Date().toISOString().split("T")[0];
fechaTarea.min = hoy;

botonAgregar.addEventListener("click", saleFormulario);
botonCancelar.addEventListener("click", guardarFormulario);

function saleFormulario() {
    formulario.classList.remove("d-none")
    overlay.classList.remove("d-none")
}

function guardarFormulario(){
    formulario.classList.add("d-none");
    overlay.classList.add("d-none");

    nombreTarea.value = "";
    fechaTarea.value = "";
    descripcionTarea.value = "";
}

formulario.addEventListener("submit", validarFormulario);


function validFormFieldInput(data) {
    if (data === null || data === undefined || data.trim() === "") {
        return false;
    }
    return true;
}

function validarFormulario(event) {
    event.preventDefault();

    if (!validFormFieldInput(nombreTarea.value)) {
        nombreTarea.classList.add("campo-error");
        errorNombre.textContent = "datos necesarios!"
    }

    if (!validFormFieldInput(fechaTarea.value)) {
        fechaTarea.classList.add("campo-error");
        errorFecha.textContent = "datos necesarios!"
    }

    if (!validFormFieldInput(descripcionTarea.value)) {
        descripcionTarea.classList.add("campo-error");
        errorDescripcion.textContent = "datos necesarios!"
    }
}

function quitarError(data, error) {
    data.classList.remove("campo-error");
    error.textContent = "";
}

nombreTarea.addEventListener("input", function () {
    quitarError(nombreTarea, errorNombre);
});

fechaTarea.addEventListener("input", function () {
    quitarError(fechaTarea, errorFecha);
});

descripcionTarea.addEventListener("input", function () {
    quitarError(descripcionTarea, errorDescripcion);
});