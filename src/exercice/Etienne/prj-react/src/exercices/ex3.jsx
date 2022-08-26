import {useState} from "react";

const Ex3 = (props) =>
{
    const [cpt, setCpt] = useState(0);

    const btnUpClick = () =>
    {
        setCpt(before => {
            return ++before;
        })
    }

    const btnDnClick = () =>
    {
        setCpt(before => {
            return 0;
        })
    }

    return (<>
        <h2> { cpt } </h2>
        <button onClick={btnUpClick}>Up</button>
        {(cpt !== 0) && <button onClick={btnDnClick}>Reset</button>}
    </>
    );
}

export default Ex3;
