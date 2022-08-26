import { useEffect, useState } from 'react';
import {Card, Button} from 'react-bootstrap';


const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timeout = setTimeout(tick, 200); 

        return () => {clearTimeout(timeout)};
    }, [time]);

    const tick = () => {
        setTime(new Date());
    };

    const formatTime = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        return hours + ' : ' + minutes + ' : ' + seconds;
    };

    return (
        <div className='container'>
            <Card className='mb-3'>
                <Card.Header>Horloge</Card.Header>
                <Card.Body>{formatTime(time)}</Card.Body>
            </Card>
        </div>
    );
};

export default Clock;