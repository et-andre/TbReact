import {useState}   from "react";

import Countries    from "./countries"
import opts         from "./opts";

const Search = ({ph, doSrch}) =>
{
    const [srch , setSrch ] = useState("");
    const [cntry, setCntry] = useState("");
    const [phc  , setPhc  ] = useState(ph);

    const cntryChng = (ecc) =>
    {
        setCntry(ecc.target.value); // not available right now because useState is asynchronous
        let ctr = Countries.filter((ctr) => ctr.cde === ecc.target.value)[0];
        //let ctr = Countries.filter((ctr) => ctr.cde === cntry)[0];
        let ph2 = (ctr.cde === "") ? "" : `: ${ctr.ctr}`;
        setPhc(`${ph}${ctr.cde === "" ? "" : ph2}`);
    }

    const btnSrchClick = (ebsc) =>
    {
        ebsc.preventDefault();
        doSrch(srch, cntry);
        setSrch("");
        setCntry("");
        setPhc(ph);
    }

    return (
        <form>
            <table align="center">
                <tbody>
                    <tr>
                        <td align="left">
                            <label htmlFor="cntry">Pays:</label>
                        </td>
                        <td align="left">
                            <select name="cntry" id="cntry" value={cntry} onChange={cntryChng}>
                                {opts}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            <label htmlFor="srch">Ville:</label>
                        </td>
                        <td align="left">
                            <input type="text" name="srch" id="srch" value={srch} placeholder={phc} onChange={(esc) => setSrch(esc.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" colSpan="2">
                            <button onClick={btnSrchClick}>Rechercher</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

export default Search;
