import {useState} from "react";

const Search = ({ph, doSrch}) =>
{
    const [srch, setSrch] = useState("");

    const btnSrchClick = (ebsc) =>
    {
        ebsc.preventDefault();
        doSrch(srch);
    }
    return (
        <form>
            <label htmlFor="srch">Ville:</label>
            <input type="text" name="srch" id="srch" value={srch} placeholder={ph} onChange={(esc) => setSrch(esc.target.value)}></input>
            <button onClick={btnSrchClick}>Rechercher</button>
        </form>
    );
}

export default Search;
