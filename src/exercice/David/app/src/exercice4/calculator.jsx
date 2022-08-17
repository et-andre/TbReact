import { useState } from "react";
import style from "./calculator.module.css"

const Calculator = (props) => {
    const [nbr1, setNbr1]     = useState(0);
    const [nbr2, setNbr2]     = useState(0);
    const [op, setOp]         = useState("+");
    const [result, setResult] = useState(0)

    const handleNbr1 = (e) => {
        if (!isNaN(e.target.value))
            setNbr1(e.target.value);
    };

    const handleNbr2 = (e) => {
        if (!isNaN(e.target.value))
            setNbr2(e.target.value);
    };

    const handleOp = (e) => {
        setOp(e.target.value);
    }

    const computeResult = (e) => {
        switch (op) {
            case '+':
                setResult(parseInt(nbr1) + parseInt(nbr2))
                break;
            case "-":
                setResult(parseInt(nbr1) - parseInt(nbr2))
                break;
            case "x":
                setResult(parseInt(nbr1) * parseInt(nbr2))
                break;
            case "/":
                setResult(String(parseInt(nbr1) / parseInt(nbr2)))
                break;
            default:
        }
    }

    return (
        <div className={style.mydiv}>
            <form action="">
                <label htmlFor="nbr1">nbr1: </label>
                <input className={`${style.myMargin} ${style.bordered}`} type="text" name="nbr1" id="nbr1" value={nbr1} onChange={handleNbr1}/>
                <label htmlFor="operation">operation: </label>
                <select className={`${style.myMargin} ${style.bordered}`} name="operation" id="operation" value={op} onChange={handleOp}>
                    <option className={style.bordered} value="+">+</option>
                    <option className={style.bordered} value="-">-</option>
                    <option className={style.bordered} value="x">x</option>
                    <option className={style.bordered} value="/">/</option>
                </select>
                <label htmlFor="nbr2">nbr2: </label>
                <input className={`${style.myMargin} ${style.bordered}`} type="text" name="nbr2" id="nbr2" value={nbr2} onChange={handleNbr2}/>
                <br />
                <input className={style.bordered} type="submit" value="Calculer" onClick={(e) => {
                    e.preventDefault();
                    computeResult();
                }}/>
                <input type="text" name="" id="" value={result} readOnly onSubmit={computeResult}/>
            </form>
        </div>
    );
};

export default Calculator;