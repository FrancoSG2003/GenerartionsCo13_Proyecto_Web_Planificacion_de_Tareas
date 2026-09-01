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

const taskManager = new TaskManager();
mostrarTareas();

const hoy = new Date().toISOString().split("T")[0];
fechaTarea.min = hoy;

function saleFormulario() {
    formulario.classList.remove("d-none")
    overlay.classList.remove("d-none")
}

function guardarFormulario(){
    formulario.classList.add("d-none");
    overlay.classList.add("d-none");

    formulario.reset();
    quitarError(nombreTarea, errorNombre); 
    quitarError(fechaTarea, errorFecha); 
    quitarError(descripcionTarea, errorDescripcion); 
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

    let formularioValido = true;

    if (!validFormFieldInput(nombreTarea.value)) {
        nombreTarea.classList.add("campo-error");
        errorNombre.textContent = "datos necesarios!"
        formularioValido = false;
    }

    if (!validFormFieldInput(fechaTarea.value)) {
        fechaTarea.classList.add("campo-error");
        errorFecha.textContent = "datos necesarios!"
        formularioValido = false;
    }

    if (!validFormFieldInput(descripcionTarea.value)) {
        descripcionTarea.classList.add("campo-error");
        errorDescripcion.textContent = "datos necesarios!"
        formularioValido = false;
    }

    if(!formularioValido) {
        return;
    }

    const nombre = nombreTarea.value;
    const fechaEntrega = fechaTarea.value;
    const descripcion = descripcionTarea.value;
    const estado = 'PORHACER';

    taskManager.addTask(nombre, fechaEntrega, descripcion, estado);

    mostrarTareas();

    console.log(taskManager.tasks);

    formulario.reset();

    formulario.classList.add("d-none");
    overlay.classList.add("d-none");

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


function mostrarTareas() {
    listaTareas.innerHTML = "";

    taskManager.tasks.forEach(tarea => {

        const card = document.createElement("div");
        card.classList.add("card", "tarea");

        card.innerHTML = `
            <div class="tarea-head"> 
                <h5 class="card-header"> 
                    <b>${tarea.nombre}</b> 
                </h5> 
                <span class="fecha"> 
                    <b>${tarea.fechaEntrega}</b> 
                </span> 
            </div> 
            
            <div class="card-body acciones"> 
                <p class="card-text descripcion"> 
                    ${tarea.descripcion} 
                </p> 
                
                <button class="btn-completar"> 
                    <i class="bi bi-bookmark-check-fill">Finalizada</i> 
                </button> 
                
                <button class="btn-eliminar"> 
                    <i class="bi bi-trash3-fill">Borrar</i> 
                </button> 
            </div>
        `;

        listaTareas.appendChild(card);
    })

    const btnCompletar = document.querySelectorAll(".btn-completar");

        for (let i = 0; i < btnCompletar.length; i++) {
            btnCompletar[i].addEventListener("click", completada);
        }

    const btnEliminar = document.querySelectorAll(".btn-eliminar");

        for (let i = 0; i < btnEliminar.length; i++) {
            btnEliminar[i].addEventListener("click", eliminarTarea);
        }
}



function completada(event) {
    const tarea = event.currentTarget.closest(".tarea");

    tarea.classList.add("completada");
}

botonAgregar.addEventListener("click", saleFormulario);
botonCancelar.addEventListener("click", guardarFormulario);


function eliminarTarea(event) {
    const tarea = event.currentTarget.closest(".tarea");
}