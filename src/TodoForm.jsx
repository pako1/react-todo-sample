import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import Create from "@mui/icons-material/Create";

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState("");
    const handleChange = (event) => {
        setText(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(text)
        addTodo(text);
        setText("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <ListItem>
                <TextField
                    id="outlined-basic"
                    label="Add Todo"
                    variant="outlined"
                    value={text}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton aria-label='toggle password visibility' type="submit">
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </ListItem >
        </form>
    );
}