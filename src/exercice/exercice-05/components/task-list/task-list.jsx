import TaskListItem from "./task-list-item";
import {useState} from "react";
import PriorityEnum from "../../enums/priority-enum";
import style from './task-list.module.css'

const TaskList = ({ tasks, onDeleteTask, onDoneTask }) =>
{
    const [filterValue, setFilterValue] = useState('ALL');
    
    const tasksJsx = tasks.filter((value) => {
        switch (filterValue)
        {
            case 'PRIORITY':
                return value.priority === PriorityEnum.HIGH;
            case 'DONE':
                return value.isDone;
            case 'PENDING':
                return !value.isDone;
            default:
                return true;
        }
    }).map((task, index) => {
            return <TaskListItem key={index} id={index} {...task} onDelete={onDeleteTask} onDone={onDoneTask}/>
        }
    );

    console.log(tasksJsx);
    return (
        <>
            <select name='priority' value={filterValue} onChange={(e) => setFilterValue(e.target.value)}>
                <option value='ALL'>ALL</option>
                <option value='PRIORITY'>PRIORITY</option>
                <option value='DONE'>DONE</option>
                <option value='PENDING'>PENDING</option>
            </select>
            <ul className={style.tasklist}>
                {tasksJsx}
            </ul>
        </>
    );
}

export default TaskList;
