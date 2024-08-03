import { useState, useContext } from 'react';
import { TodoContext } from '../hooks/ContextToDo';

const AddTodo = () => {
    const [task, setTask] = useState('');
    const { addTodo } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTodo({
                task,
                completed: false,
            });
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Add a new task" 
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodo;
