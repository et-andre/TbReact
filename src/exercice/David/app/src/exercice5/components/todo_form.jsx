import { useState } from "react";

const TodoForm = (props)  => {
    const [task, setTask] = useState({name: "", description: "", priority: "Low", done: false});

    const changeHandle = (event) => {
        const { name, value} = event.target;
        const newValues = {
            ...task,
            [name]: value,
        };
        setTask(newValues);
    };

    const submitHandle = (event) => {
        event.preventDefault();
        props.onMyEvent(task);
    };

    return (
    <>
        <form action="">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="" value={task.name} onChange={changeHandle}/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="" cols="30" rows="10" value={task.description} onChange={changeHandle}></textarea>
            </div>
            <div>
                <select name="priority" id="" value={task.priority} onChange={changeHandle}>
                    <option value="Low">Low</option>
                    <option value="Normal">Normal</option>
                    <option value="High">High</option>
                </select>
            </div>
            <input type="submit" value="Add" onClick={submitHandle}/>
        </form>
    </>
    );
};

export default TodoForm;