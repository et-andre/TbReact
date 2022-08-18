import style from './task-list-item.module.css'

const TaskListItem = ({ id, name, description, priority, isDone, onDelete, onDone }) =>
{
    return (
        <li className={`${style.task} ${isDone ? style.isDone : ''}`}>
            <div>
                <h3>
                    {name}  {priority === 'URGENT' ? <span className={style.urgent}>(Urgent)</span> : ''}
                </h3>
                <p className={style.description}>{description}</p>
            </div>
            <div className={style.actions}>
                <button onClick={() => onDone(id)}>Terminer</button>
                <button onClick={() => onDelete(id)}>Supprimer</button>
            </div>
        </li>
    );
}

export default TaskListItem;
