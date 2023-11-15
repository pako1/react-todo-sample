import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'));
    if (!data) return [];
    return data
};

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData());

    useEffect(
        () => {
            localStorage.setItem('todos', JSON.stringify(todos)) //saves the data as json in the localStorage of the browser
        },
        [todos]
    );

    const removeTodo = (todoId) => {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== todoId)
        });
    };

    const toggleCompletionState = (todoId) => {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === todoId) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo;
                }
            })
        })
    }

    const addTodo = (todoText) => {
        setTodos(currentTodos => {
            return [...currentTodos, { text: todoText, id: crypto.randomUUID(), completed: false }];
        })
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            m: 3
        }}>
            <Typography variant='h2' component='h1' sx={{ flexGrow: 1 }}>Todos</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => {
                    return <TodoItem
                        todo={todo}
                        key={todo.id}
                        removeTodo={() => { removeTodo(todo.id) }}
                        toggleCompletionState={() => { toggleCompletionState(todo.id) }} />
                })}
                <TodoForm addTodo={addTodo} />
            </List>
        </Box>
    );
}

//https://mui.com/material-ui/react-app-bar/ material design