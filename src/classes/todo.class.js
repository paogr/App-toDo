export class Todo {

    static fromJson( {id, tarea, completado, creado} ){ //INSTANCIA A VALORES DE LOCAL STORAGE Cuando hay llaves y argumento, mando un objeto
        
        const tempTodo = new Todo( tarea );

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }

    constructor ( tarea ){

        this.id = new Date().getTime();
        this.tarea = tarea;
        this.completado = false;
        this.creado = new Date();
    }

    imprimirClase() {
        console.log(`${ this.tarea } - ${ this.id }`);
    }
}