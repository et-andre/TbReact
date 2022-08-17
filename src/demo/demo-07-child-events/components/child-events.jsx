import {useState} from "react";

const ExampleEvents = ({ onResponse, onTriggeredEvent, onMachin, onClick }) =>
{
    const handleClick1 = () =>
    {
        onResponse(42);
    };

    const handleClick2 = () =>
    {
        onTriggeredEvent("YOUPIII");
    };

    const handleClick3 = () =>
    {

        onMachin("test 1234 =");
        onClick('ON CLICK');
    };

    return (
        <>
            <button onClick={handleClick1}>Click me!!!</button>
            <button onClick={handleClick2}>Click me!!!</button>
            <button onClick={handleClick3}>Click me!!!</button>
        </>
    );
}

const SecondChild = ({ number }) =>
{
    return (
        <>
            <h1>{ number === 42 ? "42 est la réponse universelle!!!" : "vous n'avez pas de chance" }</h1>
        </>
    );
}

const ChildEvents = () =>
{
    const [number, setNumber] = useState(5);

    const handleOnResponse = (val) =>
    {
        setNumber(val);
        console.log(val);
    }

    return (
        <>
            <ExampleEvents onResponse={handleOnResponse}
                         onMachin={(val) => console.log(val)}
                         onTriggeredEvent={(val) => console.log(val)}
                         onClick={(val) => console.log(val)}/>

            <SecondChild number={number} />
        </>
    );
}

export default ChildEvents;
