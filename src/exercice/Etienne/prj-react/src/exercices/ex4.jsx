import {useState} from "react";

const initData = {
    val1: "0",
    oper: "add",
    val2: "0",
    res : "",
    err : ""
};

const Ex4 = (props) =>
{
    const [data, setData] = useState(initData);

    const ValChanged = (ec) =>
    {
        const { name, value } = ec.target;
        const newVals = { ...data, [name]: value };
        setData(newVals);
    }

    const btnReset = (er) =>
    {
        setData("", "+", "", "", "");
    }

    const formSubmit = (es) =>
    {
        es.preventDefault();
        let res = 0;
        let err = "";
        if (data.oper === "add")
        {
            res = parseInt(data.val1) + parseInt(data.val2);
        }
        else if (data.oper === "min")
        {
            res = parseInt(data.val1) - parseInt(data.val2);
        }
        else if (data.oper === "mul")
        {
            res = parseInt(data.val1) * parseInt(data.val2);
        }
        else if (data.oper === "exp")
        {
            res = parseInt(data.val1) ** parseInt(data.val2);
        }
        else if (data.oper === "div")
        {
            if (!parseInt(data.val2))
            {
                err = "division par 0 impossible";
            }
            else
            {
                res = parseInt(data.val1) / parseInt(data.val2);
                err = "";
            }
        }
        setData({...data, res: res, err: err});
    }

    return (<>
        <form onSubmit={formSubmit}>
            <label htmlFor="val1">Nb1:</label>
            <input id="val1" name="val1" type="number" value={data.val1} onChange={ValChanged}></input>
            <label htmlFor="oper">Opération</label>
            <select id="oper" name="oper" value={data.oper} onChange={ValChanged}>
                <option value="add">+</option>
                <option value="min">-</option>
                <option value="mul">x</option>
                <option value="div">/</option>
                <option value="exp">^</option>
            </select>
            <label htmlFor="val2">Nb2:</label>
            <input id="val2" name="val2" type="number" value={data.val2} onChange={ValChanged}></input>
            <button type="submit">Calculer</button>
            <input id="res"  name="res"  type="number" value={data.res } disabled></input>
            {(data.err !== "") && <input id="err"  name="err"  type="textarea" value={data.err} disabled></input>}
            <button type="button" onClick={btnReset}>Effacer</button>
        </form>
    </>);
}

export default Ex4;
