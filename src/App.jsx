import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import TodoList from './ToDoList';
import ButtonAppBar from './AppBar';

function App() {
  return (
    <>
      <CssBaseline />
      <ButtonAppBar />
      <TodoList />
    </>
  )
}

export default App
