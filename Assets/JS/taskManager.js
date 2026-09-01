class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;

        this.cargarTareas();
    }

    cargarTareas() { 
        const tareasGuardadas = localStorage.getItem("tareas"); 
        
        if (tareasGuardadas) { 
            
            this.tasks = JSON.parse(tareasGuardadas); 
            
            if (this.tasks.length > 0) { 
            
                this.currentId = Math.max( ...this.tasks.map(tarea => tarea.id) 
                ); 
            } 
        } 
    }


    addTask(nombre, fechaEntrega, descripcion, estado) {

        const id = ++this.currentId;

        const nuevaTarea = {
            id: id,
            nombre: nombre,
            fechaEntrega: fechaEntrega,
            descripcion: descripcion,
            estado: 'PORHACER'
        };

        this.tasks.push(nuevaTarea);
        localStorage.setItem("tareas", JSON.stringify(this.tasks));
        return nuevaTarea;
    }
}


