import { Component, useRef, useState, useEffect } from "react";
import Meteo from "./meteo";
import Search from "./search";

const Ex7 = (props) =>
{
    const [srch, setSrch] = useState("");

    return(
        <>
            <Search ph="une ville en Belgique" doSrch={(s) => setSrch(s)} />
            <Meteo srch={srch} />
        </>
    );
}

export default Ex7;
