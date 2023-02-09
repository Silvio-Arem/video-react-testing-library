import React, { useState } from "react";
const Todo = () => {
    const [task, updateTask] = useState('')

    // Criando um retorno com campos de formulário
    return (
        <>
            <form>
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