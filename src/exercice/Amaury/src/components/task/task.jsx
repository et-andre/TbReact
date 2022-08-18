import { useState } from 'react';
import {Card, Button} from 'react-bootstrap';


const Task = (props) => {
    const [task, setTask] = useState(props.task);

    const setPriorityColor = () => {
        const priority = task.priority;
        let color = 'primary';

        if (priority == 'high') {
            color = 'danger';
        } else if (priority == 'low') {
            color = 'success'
        }

        return color;
    };

    const closeTask = () => {
        task.closed = true;

        setTask({...task});
    };

    return (
        <div className='container'>
            <Card className='mb-3' style={{opacity: task.closed ? 0.5 : 1}}>
                <Card.Header className={'bg-' + setPriorityColor() + ' text-white'}>{task.priority} priority</Card.Header>
                <Card.Body>
                    <Card.Title>{task.name}</Card.Title>
                    <Card.Text>{task.description}</Card.Text>
                    <Button disabled={task.closed ? true : false} className='me-3' variant='primary' onClick={closeTask}>Close</Button>
                    <Button variant='secondary' onClick={() => {props.handleTaskDelete(props.id)}}>Delete</Button>
                </Card.Body>
                <Card.Footer className={task.closed ? 'text-muted' : 'text-warning'}>{task.closed ? 'closed' : 'in progress'}</Card.Footer>
            </Card>
        </div>
    );
};

export default Task;