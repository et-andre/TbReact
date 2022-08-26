import { useEffect, useState } from 'react';
import {Card, Button} from 'react-bootstrap';


const CustomDate = () => {
    const [date, setDate] = useState('');

    useEffect(() => {
        let newDate = new Date();
        setDate(formatDate(newDate));
    }, []);

    const formatDate = (date) => {
        let dd = date.getDate();
        let mm = date.getMonth();
        let yyyy = date.getFullYear();

        let months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        let monthName = months[mm];

        return dd + ' ' + monthName + ' ' + yyyy;
    };

    return (
        <div className='container'>
            <Card className='mb-3'>
                <Card.Header>Date</Card.Header>
                <Card.Body>{date}</Card.Body>
            </Card>
        </div>
    );
};

export default CustomDate;