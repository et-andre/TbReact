import {useState} from "react";

const ToggleDisplay = ({ ComponentA, ComponentB }) =>
{
    const [isClicked, setClicked] = useState(true);

    return (
        <>
            <button onClick={() => setClicked(c => !c)}>Toggle</button>
            <div>
                {isClicked ? (<ComponentA />) : (<ComponentB />)}
            </div>
        </>
    );
}

export default ToggleDisplay;
