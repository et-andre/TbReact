import {useState} from "react";
import PriorityEnum from "../../enums/priority-enum";
import style from './task-form.module.css'

const TaskForm = ({ onSubmit }) =>
{
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(PriorityEnum.NORMAL);

    const handleSubmit = (event) =>
    {
        event.preventDefault();

        onSubmit({ name, description, priority, isDone: false });
    }

    return (
        <>
            <h1>My Todo list</h1>
            <form className={style.form}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <textarea name='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='priority'>Priorité</label>
                    <select name='priority' value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value={PriorityEnum.LOW}>{PriorityEnum.LOW}</option>
                        <option value={PriorityEnum.NORMAL}>{PriorityEnum.NORMAL}</option>
                        <option value={PriorityEnum.HIGH}>{PriorityEnum.HIGH}</option>
                    </select>
                </div>

                <button type='submit' onClick={handleSubmit}>Ajouter</button>
            </form>
        </>
    );
}

export default TaskForm;
