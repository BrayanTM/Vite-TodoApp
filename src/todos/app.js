import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos, renderPendingTodos } from './use-cases';

const ElementIDs = {
    ClearCompletedButton: '.clear-completed',
    NewTodoInput: '#new-todo-input',
    TodoFilters: '.filtro',
    TodoList: '.todo-list',
    PendingcountLabel: '#pending-count'
}

/**
 * 
 * @param {String} elementId 
 */

export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList, todos);
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPendingTodos( ElementIDs.PendingcountLabel );
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    // Referencias HTML
    const newDescriptionInput = document.querySelector( ElementIDs.NewTodoInput );
    const todoListUl = document.querySelector( ElementIDs.TodoList );
    const clearCompletedButton = document.querySelector ( ElementIDs.ClearCompletedButton );
    const filtersLIs = document.querySelectorAll( ElementIDs.TodoFilters );

    // Listeners
    newDescriptionInput.addEventListener('keyup', ( event ) => {
        if ( event.keyCode !== 13 ) return;
        if ( event.target.value.trim().length === 0 ) return;

        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = '';
    });

    todoListUl.addEventListener('click', ( event ) => {
        const element = event.target.closest('[data-id]')
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    todoListUl.addEventListener('click', ( event ) => {
        const className = event.target.className;

        if (className === 'destroy') {
            const element = event.target.closest('[data-id]')
            todoStore.deleteTodo(element.getAttribute('data-id'));
            displayTodos();
        }
    });

    clearCompletedButton.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersLIs.forEach( element => {
        
        element.addEventListener('click', ( element ) => {
            filtersLIs.forEach( el => el.classList.remove('selected') );
            element.target.classList.add('selected');
            switch (element.target.text) {
                case 'Todos':
                    todoStore.setFilter( Filters.All );
                    break
                case 'Completados':
                    todoStore.setFilter( Filters.Completed );
                    break
                case 'Pendientes':
                    todoStore.setFilter( Filters.Pending );
                    break
            }
            displayTodos();
        });

    })

}