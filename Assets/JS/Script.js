const botonAgregar  = document.getElementById("btnAgregarTarea");
const formulario = document.getElementById("formTarea");
const overlay = document.getElementById("overlay");
const botonCancelar = document.getElementById("btnCancelar")
const botonGuardar = document.getElementById("btnGuardar");

const nombre = document.getElementById("nombreTarea");
const fecha = document.getElementById("fechaTarea");
const descripcion = document.getElementById("descripcion");

const listaTareas = document.getElementById("listaTareas");

let tareas = [];

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

function agregarTarea() {

    if(
        nombre.value.trim() === "" ||
        fecha.value === "" ||
        descripcion.value.trim() === ""
    ){
        alert("Debe rellenar todos los campos.");
        return;
    }

    let nuevaTarea = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value
    }

    tareas.push(nuevaTarea);
    mostrarTareas();
    guardarFormulario();
}

function mostrarTareas() {

    listaTareas.innerHTML = "";

    for (let i = 0; i < tareas.length; i++) {
        let tarjeta = document.createElement("div");

        tarjeta.classList.add("tarea")

        tarjeta.innerHTML = `
            <div class="tarea-header">
                <h4>${tareas[i].nombre}</h4>

                <div class="acciones">
                    <span class="fecha">${tareas[i].fecha}</span>

                        <button>✓</button>
                        <button>🗑</button>
                </div>
            </div>

            <p>${tareas[i].descripcion}</p>
        `;

        listaTareas.appendChild(tarjeta);
    }
}


