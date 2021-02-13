import React, { useState } from 'react'
import './App.css';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import moment from "moment";
import { TodoList } from './TodoList';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export const TodoApp = () => {

    const [text, settext] = useState('')

    const [priority, setpriority] = useState(0)

    const [dueDate, setdueDate] = useState(moment())

    const [items, setitems] = useState([])


    const handleTextChange = (e) => {
        settext(e.target.value)
    }

    const handlePriorityChange = (e) => {
        setpriority(e.target.value)
    }

    const handleDateChange = (date) => {
        setdueDate(date)
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const newItem = {
            text: text,
            priority: priority,
            dueDate: dueDate,
        };

        setitems([...items, newItem])

        settext('')
        setpriority('')
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div>

                <CssBaseline />
                <div className="App">

                    <br />
                    <br />
                    <form onSubmit={handleSubmit} className="todo-form">

                        <Typography variant="h3">New TODO</Typography>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="text">Text: </InputLabel>
                            <Input id="text" autoFocus onChange={handleTextChange} value={text} />
                        </FormControl>

                        <br />
                        <br />

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="priority">Priority:</InputLabel>
                            <Input id="priority" type="number" onChange={handlePriorityChange} value={priority} />
                        </FormControl>


                        <br />
                        <br />

                        <KeyboardDatePicker
                            id="due-date"
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            placeholderText="Due date"
                            value={dueDate}
                            onChange={(dueDate) => handleDateChange(dueDate)}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />


                        <br />
                        <br />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                        >
                            Add #{items.length + 1}
                        </Button>
                    </form>

                    <br />
                    <br />
                    
                    <TodoList todoList={items} />
                </div>

            </div>
        </MuiPickersUtilsProvider>
    )
}
