import { Component, useRef, useState, useEffect } from "react";
import Meteo    from "./meteo";
import Search   from "./search";

const Ex7 = (props) =>
{
    const [srch , setSrch ] = useState("");
    const [cntry, setCntry] = useState("");

    const doSearch = (s, c) =>
    {
        setSrch(s);
        setCntry(c);
    }

    return(
        <>
            <Search ph="une ville" doSrch={doSearch} />
            <Meteo srch={srch} cntry={cntry} />
        </>
    );
}

export default Ex7;
