import TaskListItem from "./task-list-item";

const TaskList = ({ tasks, onDeleteTask, onDoneTask }) =>
{
    const tasksJsx = tasks.map((task, index) =>
        <TaskListItem key={index} id={index} {...task} onDelete={onDeleteTask} onDone={onDoneTask} />
    );

    return (
        <ul>
            {tasksJsx}
        </ul>
    );
}

export default TaskList;
