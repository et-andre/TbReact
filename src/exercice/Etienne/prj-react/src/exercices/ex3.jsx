import {useState} from "react";

const Ex3 = (props) =>
{
    const [cpt, setCpt] = useState(1);

    const btnUpClick = () =>
    {
        setCpt(before => {
            if (!before)
            {
                let bt = document.getElementById("btdown")
                bt.removeAttribute("hidden"     );
                bt.setAttribute   ("enabled", "");
            }
            return ++before;
        })
    }

    const btnDnClick = () =>
    {
        setCpt(before => {
            if (!--before)
            {
                let bt = document.getElementById("btdown")
                bt.removeAttribute("enabled"    );
                bt.setAttribute   ("hidden" , "");
            }
            return before;
        })
    }

    return (<>
        <p> { cpt } </p>
        <button onClick={btnUpClick}>Up</button>
        <button onClick={btnDnClick} id="btdown">Down</button>
    </>
    );
}

export default Ex3;
