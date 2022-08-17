import { useState } from "react";


function Calc() {

    const [data, setData] = useState({input1: 0, operator: '+', input2: 0})
    const [result, setResult] = useState(0)
    
    function handleInput(e) {
        const {name, type, value} = e.target
        setData({
            ...data,
            [name]: type === 'number' ? parseInt(value) : value
        })
        console.log(name, ' ', value, ' ', type)
    }
    
    function compute() {
        let res = 0
        switch (data.operator) {
            case '+':
                res = data.input1 + data.input2
                break;
            case '-':
                res = data.input1 - data.input2
                break;
            case '/':
                res = data.input1 / data.input2
                break;
            case 'x':
                res = data.input1 * data.input2
                break;
        }
        setResult(res)
    }

    return (
        <>
            <label htmlFor="input1">Nbr1</label>
            <input id="input1" name="input1" type="number" value={data.input1} onChange={handleInput}/>
            <select name="operator" value={data.operator} onChange={handleInput}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="x">x</option>
                <option value="/">/</option>
            </select>
            <label htmlFor="input2">Nbr2</label>
            <input id="input2" name="input2" type="number" value={data.input2} onChange={handleInput}/>
            <input type="submit" onClick={compute} value="Calculer"/>
            <input name="result" type="number" value={result} readOnly/>
        </>

    )
}

export default Calc;