const botonAgregar  = document.getElementById("btnAgregarTarea");
const formulario = document.getElementById("formTarea");
const overlay = document.getElementById("overlay");
const botonCancelar = document.getElementById("btnCancelar")
const botonGuardar = document.getElementById("btnGuardar");

const nombre = document.getElementById("nombreTarea");
const fecha = document.getElementById("fechaTarea");
const descripcion = document.getElementById("descripcion");

const listaTareas = document.getElementById("listaTareas");

botonAgregar.addEventListener("click", saleFormulario);
botonCancelar.addEventListener("click", guardarFormulario);
botonGuardar.addEventListener("click", agregarTarea);


function saleFormulario() {
    formulario.classList.remove("d-none")
    overlay.classList.remove("d-none")
}

function guardarFormulario(){
    formulario.classList.add("d-none");
    overlay.classList.add("d-none");

    nombre.value = "";
    fecha.value = "";
    descripcion.value = "";
}