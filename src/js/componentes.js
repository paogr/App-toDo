import {Todo} from '../classes';
import {todoList} from '../index';

//REFERENCIAS HTML
const divTodoList     = document.querySelector('.todo-list'),
      txtInput        = document.querySelector( '.new-todo'),
      btnBorrar       = document.querySelector( '.clear-completed'),
      ulFiltros       = document.querySelector('.filters'),
      anchorFiltros   = document.querySelectorAll('.filtro'); //qSA lo regresa como un arreglo

export const contadorPendientes = document.querySelector('.todo-count');


export const crearTodoHtml = ( todo ) => {
    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : ''}" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked': ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

    //CREAR ELEMENTO HTML
    const div = document.createElement( 'div');

    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div;
}

//EVENTOS
txtInput.addEventListener('keyup', (event) => {
    
    if(event.keyCode === 13 && txtInput.value.length > 0){

        console.log(txtInput.value);
        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo( nuevoTodo );

        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }

});

divTodoList.addEventListener('click', (event)=>{
    
    const nombreElemento = event.target.localName;
    const todoElemento   = event.target.parentElement.parentElement; //HTML
    const todoId         = todoElemento.getAttribute('data-id');

    if( nombreElemento.includes('input')){ //Hizo click?
        
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed');
        
    }else if( nombreElemento.includes('button')){

        todoList.eliminarTodo( todoId);
        divTodoList.removeChild( todoElemento );
    }

});

btnBorrar.addEventListener('click', () =>{
    
    todoList.eliminarCompletados();
//FOR INVERSO
for( let i = divTodoList.children.length-1; i>=0; i--){
    
    const elemento = divTodoList.children[i];

    if(elemento.classList.contains('completed')){
        divTodoList.removeChild(elemento);
    }
}
});

ulFiltros.addEventListener('click', (event) => {
    // console.log( event.target.text );

    const filtro = event.target.text;
    if( !filtro ){ return; }//En caso de ser undefined, no manda nada

    anchorFiltros.forEach( elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for( const elemento of divTodoList.children ){
        console.log(elemento);
        //quitar hidden
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ){
            case 'Pendientes':
                if( completado ){
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
            if( !completado ){
                elemento.classList.add('hidden');
            }
            break;
        }
    }
});