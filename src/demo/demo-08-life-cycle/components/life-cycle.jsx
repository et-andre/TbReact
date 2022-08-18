import {useEffect, useState} from "react";

const ClickCounter = () =>
{
    const [count, setCount] = useState(0);
    const [test, setTest] = useState(0);

    console.log("CREATE/UPDATE COMPONENT");

    useEffect(() => {
        document.title = `Compteur : ${count}`;
        console.log(`Vous avez cliquer ${count} fois sur le bouton.`);

        return () => {
            console.log("DESTROY COMPONENT");
        }
    }, [count]);

    const handleIncr = () => {
        setCount(c => c + 1);
    }

    const handleReset = () => {
        setCount(0);
    }

    const handleBtnTest = () => {
        setTest(t => t + count);
    }

    return (
        <div>
            <p>Nombre de clique : {count}</p>

            <button onClick={handleIncr}>Increase</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleBtnTest}>Test</button>
        </div>
    );
}

export default ClickCounter;
