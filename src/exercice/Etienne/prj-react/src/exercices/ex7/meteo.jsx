import { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./weather";

const Meteo = ({srch, cntry}) =>
{
    const [bus, setBus] = useState(false);
    const [dta, setDta] = useState(null);
    const [err, setErr] = useState(null);

    const apk = "8a4cbc6e26169e27af302d16016f1d42";
    const country = srch ? cntry : "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${srch},${country}&appid=${apk}&units=metric&lang=fr`;
    //const url = `http://localhost:8080/...`;

    useEffect(() =>
    {
        setBus(true);
        setDta("");
        setErr("");

        axios.get(url)
            .then   (({data}) => {
                setDta(data   )    
            })
            .catch  (  eag    => setErr(eag.err))
            .finally(()       => setBus(false  ));
    }, [srch]);

    return (
        <div>
            {
                bus ? <p>Un peu de patience ...</p> :
                err ? <p>Error: {err}</p>           :
                dta ? <Weather dta={dta} />         :
                      <p>Pas de données, pas de réponse ...</p>
            }
        </div>
    );
}

export default Meteo;
