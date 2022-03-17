import { Todo } from "./todo.class";
import { contadorPendientes } from "../js/componentes";

export class TodoList {
    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
        this.contadorPendientes();
    }

    nuevoTodo( todo ) {
        this.todos.push ( todo );
        this.guardarLocalStorage();
        this.contadorPendientes();
    }
    eliminarTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id); //REIMPRESIÓN
        this.guardarLocalStorage();
        this.contadorPendientes();
    }

    marcarCompletado ( id ) {

        for( const todo of this.todos ){
            if( todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                this.contadorPendientes();
                break;
            }
        }

    }

    eliminarCompletados() {
        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();
        this.contadorPendientes();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        // if( localStorage.getItem('todo')){
        //     this.todos = JSON.parse( localStorage.getItem('todo'));
        //     console.log( 'cargarLocal:', this.todos);
        // }else{
        //     this.todos = [];
        // }
        this.todos = (localStorage.getItem('todo')) 
            ? JSON.parse( localStorage.getItem('todo'))
            : [];

        this.todos = this.todos.map( Todo.fromJson ); //Cada argumento que se mande a map será el primero
        //SE UTILIZA Todo en mayus porque hace referencia a una propiedad estática
    }
    
    contadorPendientes (){
        let pendientes = 0;
        let countBox = contadorPendientes.firstElementChild;
        for (let todo of this.todos) {
            (!todo.completado === true) ? pendientes++ : null;
        }
        countBox.innerHTML = pendientes;
        }
}