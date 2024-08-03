import { useContext } from 'react';
import { TodoContext } from '../hooks/ContextToDo';

const TodoList = () => {
    const { todos, removeTodo } = useContext(TodoContext);

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo.task}
                    <button onClick={() => removeTodo(index)}>Remove</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
