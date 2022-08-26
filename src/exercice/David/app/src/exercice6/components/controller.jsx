import { useState } from "react";
import Clock from "./clock"
import Today from "./today"

const Controller = () => {
    const [view, setView] = useState("clock");

    const switchView = () => {
        view === "clock" ? setView("today") : setView("clock");
    };

    return (
        <div>
            {view === "clock" ? <Clock/> :  <Today/>}
            <button onClick={switchView}>switch</button>
        </div>
    );

}

export default Controller