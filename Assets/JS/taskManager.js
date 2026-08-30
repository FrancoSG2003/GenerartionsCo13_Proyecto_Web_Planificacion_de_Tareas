class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
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
        return nuevaTarea;
    }
}


