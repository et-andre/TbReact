import style from "./todo.module.css"
const TodoList = (props) => {
    const  handle = (e) =>  {
        e.done = !e.done;
        e.classname = e.done ? style.done : style.pending
        props.onEvent(e);
    };
    let id = 0;
    const tasksJSX = props.tasks.map(
        t => <TasksTableRow key={id++} id={id} {...t} onEvent={handle}/>
    );
    
    return  (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    {tasksJSX}
                </tbody>
            </table>
        </>
    );
};

const TasksTableRow = (props) => {
    const switchTask = (e) => {
        props.onEvent({...props});
    };

    return (
    <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td hidden>{props.priority}</td>
            <td>
                <form action="">
                    <input type="button" value="Terminer" state="pending" onClick={switchTask}/>
                    <input type="button" value="Supprimer" />
                </form>
            </td>
        </tr>
    );
};

export default TodoList;