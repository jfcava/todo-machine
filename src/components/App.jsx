import React from "react";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoButton } from '../components/TodoButton';

const todos = [
    { text: 'Cortar cebolla', completed: false},
    { text: 'Estudiar React', completed: false},
    { text: 'Pagar cuentas', completed: false},
    
]

function App () {
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {todos.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} />
                ))}
            </TodoList>
            <TodoButton />
        </React.Fragment>
    )
}

export { App };
