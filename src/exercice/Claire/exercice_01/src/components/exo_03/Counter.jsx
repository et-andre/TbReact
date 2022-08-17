import { useState } from "react";

function Counter(props) {
    const { toIncrement } = props;
    const [value, setValue] = useState(0)
    
    function increment() {
        setValue( (v) => {
            return v + toIncrement;
        })
    }

    function reset() {
        setValue((v)=> {
            return 0;
        })
    }

    return (
        <>
            <p>{value}</p>
            <button className="btn btn-primary" onClick={increment}>Increment</button>
            {value !== 0 &&
                <button className="btn btn-secondary" onClick={reset}>Reset</button>
            }
        </>
    );
}

Counter.defaultProps = {
    toIncrement: 1
};

export default Counter;