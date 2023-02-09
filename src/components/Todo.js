import React, { useState } from "react";
const Todo = () => {
    const [task, updateTask] = useState('')
    const [tasks, updateTasks] = useState([]);

    // Criando uma função para o recebimento do campo do form
    const handleInputChange = event => updateTask(event.target.value)

    const handleFormSubmit = event =>{
        event.preventDefault()
        updateTasks([...tasks, task])
        updateTask('')
    }

    // Criando um retorno com campos de formulário
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input onChange={handleInputChange} placeholder="Type a new task here" type="text" value={task}/>
                <button type="submit">Add new task</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                    </tr>
                </thead>

            </table>
        </>
    )
}
export default Todo;