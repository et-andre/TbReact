import {useState} from "react";
import PropTypes from "prop-types";

const Counter = ({ incr }) =>
{
    const [count, setCount] = useState(0);

    const handleIncrement = () =>
    {
        setCount(c => c + incr);
    }

    const handleReset = () =>
    {
        setCount(0);
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={handleIncrement}>Increment</button>
            {count !== 0 && (<button onClick={handleReset}>Reset</button>)}
        </>
    );
}

Counter.defaultProps = {
    incr: 1
};

Counter.propTypes = {
    incr: PropTypes.number
};

export default Counter;
