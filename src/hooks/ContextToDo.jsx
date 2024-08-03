/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';

export const TodoContext = createContext();

const initialState = {
    todos: [],
};

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter((_, index) => index !== action.payload),
            };
        default:
            return state;
    }
};

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = (todo) => {
        dispatch({ type: 'ADD_TODO', payload: todo });
    };

    const removeTodo = (index) => {
        dispatch({ type: 'REMOVE_TODO', payload: index });
    };

    return (
        <TodoContext.Provider value={{ todos: state.todos, addTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
