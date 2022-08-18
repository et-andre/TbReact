import TaskForm from "../../components/task-form/task-form";
import {useState} from "react";
import TaskList from "../../components/task-list/task-list";

const TodoApp = () =>
{
    const [tasks, setTasks] = useState([]);

    const addTaskEvent = (task) =>
    {
        console.log(task);
        setTasks([...tasks, task]);
    }

    const deleteTask = (id) =>
    {
        setTasks(tasks.filter((tasks, index) => index !== id));
    }

    const taskDone = (id) =>
    {
        setTasks(tasks.map((task, index) => index === id ? { ...task, isDone: true } : task ));
    }

    return (
        <>
            <TaskForm onSubmit={addTaskEvent}/>
            <TaskList tasks={tasks} onDeleteTask={deleteTask} onDoneTask={taskDone} />
        </>
    );
}

export default TodoApp;
