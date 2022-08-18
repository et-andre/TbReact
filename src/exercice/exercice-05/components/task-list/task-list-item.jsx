const TaskListItem = ({ id, name, description, priority, isDone, onDelete, onDone }) =>
{
    return (
        <li>
            <div>{name} <span>{priority}</span> <span><button onClick={() => onDone(id)}>Terminer</button></span></div>
            <div>{description} <span><button onClick={() => onDelete(id)}>Supprimer</button></span></div>
            <div>{isDone ? 'true' : 'false'}</div>
        </li>
    );
}

export default TaskListItem;
