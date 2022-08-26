import { Component, useRef, useState, useEffect } from "react";
import Ex6d from "./Ex6d"
import Ex6t from "./Ex6t"

export const Ex6bis = (props) =>
{
    const [what, setWhat] = useState("date");
    const [val , setVal ] = useState("");
    const [valp, setValp] = useState("");
    const [disp, setDisp] = useState("");

    let idTmr = -1;

    function ts200()
    {
        let dt = new Date();
        switch (what)
        {
        case "Date":
            setValp(`${dys[dt.getDay()]} ${dt.getDate()} ${mnths[dt.getMonth()]} ${dt.getFullYear()}`);
            //console.log(`ts200, date: ${val}`);
            break;
        case "Time":
            let h = dt.getHours();
            let m = dt.getMinutes();
            let s = dt.getSeconds();
            setValp(`${h}:${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`);
            //console.log(`ts200, time: ${val}`); 
            break;
        }
        if (valp !== val) setVal(valp);
    }

    useEffect(() => {
        //console.log("useEffect");
        if (idTmr === -1)
        {
            //console.log("idTmr === -1");
            idTmr = setInterval(ts200, 200);
            //console.log(`idTmr = "${idTmr}"`);
        }
        setDisp(val);
        return () =>
        {

        }
    }, [val]);

    function swapHrDt()
    {
        if (idTmr === -1) idTmr = setInterval(ts200, 200);
        //console.log(`swap before: ${what}`);
        setWhat(what === "Time" ? "Date" : "Time")
        //console.log(`swap after: ${what}`);
    }

    return (<>
        <p>{what}: {disp}</p>
        <button onClick={swapHrDt}>Swap</button>
    </>);

}

export default Ex6bis;
