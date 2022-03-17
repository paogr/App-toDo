import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList ();

// const tarea = new Todo('Leche de coco');
// todoList.nuevoTodo( tarea );

// console.log( todoList );

// crearTodoHtml( tarea );

// localStorage.setItem('mi-key', 'abc123')//solo graba string
// setTimeout( ()=> {
//     localStorage.removeItem('mi-key');
// },1500);

// sessionStorage.setItem('mi-key','pao');

todoList.todos.forEach(todo => crearTodoHtml( todo )); //El argumento es el único q se manda: todoList.todos.forEach( crearTodoHtml );

//const newTodo = new Todo( 'Aprender JS');
//todoList.nuevoTodo( newTodo );
todoList.todos[0].imprimirClase();
//newTodo.imprimirClase();

console.log( 'todos', todoList.todos );
console.log(todoList.todos.length);
