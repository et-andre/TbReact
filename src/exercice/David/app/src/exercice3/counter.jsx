import { useState } from "react"

const Counter = (props) => {
    const [get, set] = useState(0)

    const increment = () => {
        console.log(props.increment);
        set(previous => previous + props.increment)
    }

    const reset = () => {
        set(0)
    }
    return (
        <div className="counter-elem">
            <p>{get}</p>
            <button onClick={increment}>Add {props.increment}</button>
            {get > 0 && (<button onClick={reset}>Reset</button>)}
        </div>
    );
}

Counter.defaultProps = {
    increment: 1
}

export default Counter