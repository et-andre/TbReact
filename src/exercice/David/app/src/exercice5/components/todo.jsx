import { useState } from "react";
import TodoForm from "./todo_form";
import TodoList from "./todo_list";

const Todo = (props) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const updateTask = (task) => {
        let cpy = [...tasks];
        cpy[task.id] = task;
        setTasks(cpy);
    };

    return (
        <div className="container">
            <TodoForm onMyEvent={addTask}/>
            <TodoList tasks={tasks} onEvent={updateTask}/>
        </div>
    );
};

export default Todo