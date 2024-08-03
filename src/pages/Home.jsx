import { TodoProvider } from '../hooks/ContextToDo';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

export default function Home() {

    return (
        <TodoProvider>
            <div className="App">
                <h1>Todo List</h1>
                <AddTodo />
                <TodoList />
            </div>
        </TodoProvider>
    )
}


