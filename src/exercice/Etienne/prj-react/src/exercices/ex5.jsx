import { Component, useRef, useState } from "react";
import tsks from "./tsks.json";

export const Ex5 = (props) =>
{
    class Task extends Component {
        constructor(props, nom, id, dsc, pri, stt) {
            super(props);
            this.id  = id ;
            this.nom = nom;
            this.dsc = dsc;
            this.pri = pri;
            this.stt = stt;
        }
    }

    const refFld = useRef();

    const [data, setData] = useState(
        {
            id : -1,
            nom: "",
            dsc: "",
            pri: "easy",
            stt: "busy"
        }
    );

    let tasks = tsks;

    const TaskRow = ({ nom, dsc, pri, stt }) =>
    {
        return <tr>
            <td align="left" vertical-align="top" colSpan="3" width="750">
                <span id="data">
                    <div id="nom-pri">
                        {nom} {pri === "rush" ? "Urgent !" : ""}
                    </div>
                    <div id="desc">
                        {dsc}
                    </div>
                </span>
            </td>
            <td align="left" vertical-align="top" width="250">
                <span id="buttons">
                    <div id="end">
                        <button type="button" id="btend" name="btend" onClick={btendClick}>Terminer</button>
                    </div>
                    <div id="rem">
                        <button type="button" id="btrem" name="btrem" onClick={btremClick}>Supprimer</button>
                    </div>
                </span>
            </td>
        </tr>

    } // TaskRow

    const tasksJsx = tasks.map(
        tsk => <TaskRow key={tsk.id} {...tsk}/>
    );

    const fldOnChange = (efoc) =>
    {
        const { name } = efoc.target;
        const val = efoc.target.value;
        setData({ ...data, [name]: val });
    }

    const formSubmit = (efs) =>
    {
        efs.preventDefault();
        const nom = data.nom.trim();
        const dsc = data.dsc.trim();
        const pri = data.pri;
        let ok = true;
        if (ok && (nom === ""))
        {
            ok = false;
        }
        if (ok && (pri !== "easy") && (pri !== "rush"))
        {
            ok = false;
        }
        if (ok)
        {
            let id  = maxId() + 1;
            let stt = "new";
            let tsk = new Task(props, id, nom, dsc, pri, stt);
            tasks.push(tsk);
        }
    } // formSubmit

    const btendClick = (eec) =>
    {
        eec.preventDefault();
    }

    const btremClick = (erc) =>
    {
        erc.preventDefault();
    }

    function maxId()
    {
        let mx = 1;
        for (let tsk in tasks)
        {
            if (tsk.id > mx)
            {
                mx = tsk.id;
            }
        }
        return mx;

    } // maxId

    //const 

    return (<>
        <h1 align="left">Ajouter une nouvelle tâche</h1>
        <AddTask/>
        <form onSubmit={formSubmit}>
            <table className="tbl" width="1000px">
                <tbody>
                    <tr>
                        <td align="left" vertical-align="top" width="250">
                            <label htmlFor="nom">Nom:</label>
                        </td>
                        <td colSpan="3" align="left" vertical-align="top" width="750">
                            <input type="text" id="nom" name="nom" value={data.nom} ref={refFld} onChange={fldOnChange}></input>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" vertical-align="top" wdith="250">
                            <label htmlFor="dsc">Description:</label>
                        </td>
                        <td colSpan="3" align="left" vertical-align="top" width="750">
                            <textarea type="text" id="dsc" name="dsc" value={data.dsc} ref={refFld} onChange={fldOnChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" vertical-align="top" width="250">
                            <label htmlFor="nom">Priorité:</label>
                        </td>
                        <td align="left" vertical-align="top" width="250">
                            <select id="pri" name="pri" value={data.pri} ref={refFld} onChange={fldOnChange}>
                                <option value="easy">Normal</option>
                                <option value="rush">Urgent !</option>
                            </select>
                        </td>
                        <td width="250">
                        </td>
                        <td align="left" vertical-align="top" width="250">
                            <button type="submit" id="btnew" name="btnew">Ajouter</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
        <h1 align="left">Liste des tâches</h1>
        <TasksList/>
        <table className="tbl" width="1000px">
            <tbody>
                {tasksJsx}
            </tbody>
        </table>
    </>);
}

export default Ex5;
