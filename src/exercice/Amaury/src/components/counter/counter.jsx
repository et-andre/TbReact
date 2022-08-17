import { useState } from 'react';
import Button from 'react-bootstrap/Button';


const Counter = ({incrementValue}) => {
    const [value, setValue] = useState(0);

    const handleReset = () => {
        setValue(0);
    };

    const handleIncrement = () => {
        setValue(value + incrementValue);
    };

    return (
        <>
            <p>{value}</p>
            <Button variant='success' onClick={handleIncrement}>Increment</Button>
            <br />
            {
                value != 0 ? <Button variant='danger' onClick={handleReset}>Reset</Button> : ''
            }
        </>
    );
};

Counter.defaultProps = {
    incrementValue: 1
};

export default Counter;