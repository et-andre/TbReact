import {useState} from "react";
import PriorityEnum from "../../enums/priority-enum";

const TaskForm = ({ onSubmit }) =>
{
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(PriorityEnum.NORMAL);

    const handleSubmit = () =>
    {
        onSubmit({ name, description, priority, isDone: false });
    }

    return (
        <div>
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

            <button onClick={handleSubmit}>Ajouter</button>
        </div>
    );
}

export default TaskForm;
