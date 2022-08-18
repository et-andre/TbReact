import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Task from './task';


const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('normal');
    const [validated, setValidated] = useState(false);

    const handleTaskDelete = (key) => {

        let t = [...tasks];
        t.splice(key, 1);

        setTasks(t);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setValidated(true);

        if (e.target.checkValidity() == false) {
            return;
        };

        let newTask = {
            name: name,
            description: description,
            priority: priority,
            closed: false
        };

        let t = [...tasks];
        t.push(newTask);

        setTasks(t);
    };

    const filterTasks = (task, filter) => {
        if (filter == 'priority') {
            if (task.priority == 'high' && !task.closed) {
                return true;
            };   
        } else if (filter == 'progress') {
            if (!task.closed) {
                return true;
            };
        } else if (filter == 'closed') {
            if (task.closed) {
                return true;
            };
        } else {
            return true;
        };
    };

    return (
        <div className='container'>
            <h1>Add a new task</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className='mb-3 mt-5'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        value={name} 
                        type='text' 
                        onChange={(e) => {setName(e.target.value)}}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Please enter a name for the task</Form.Control.Feedback> 
                </Form.Group> 
                
                <Form.Group className='mb-3'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        value={description} 
                        as='textarea'
                        rows={3}
                        onChange={(e) => {setDescription(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Priority</Form.Label>
                    <Form.Select required value={priority} onChange={(e) => {setPriority(e.target.value)}}>
                        <option value='normal'>normal</option>
                        <option value='high'>high</option>
                        <option value='low'>low</option>
                    </Form.Select>
                </Form.Group>
                <Button variant='primary' type='submit' className='mb-3'>Add task</Button>
            </Form>
            <h1>Tasks</h1>
            <ButtonGroup className='mb-5'>
                <Button onClick={() => {setFilter('priority')}} variant='link'>High priority</Button>
                <Button onClick={() => {setFilter('progress')}} variant='link'>In progress</Button>
                <Button onClick={() => {setFilter('closed')}} variant='link'>Closed</Button>
            </ButtonGroup>
            {tasks.map(
                (task, key) => (
                    filterTasks(task, filter) && (<Task key={key} handleTaskDelete={handleTaskDelete} id={key} task={task} />)         
                )
            )}
        </div>
    );
};

export default TaskList;