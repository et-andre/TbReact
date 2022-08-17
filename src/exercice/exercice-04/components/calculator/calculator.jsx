import {useRef, useState} from "react";

const regexNbr = /^[0-9]+(\.[0-9]*)?$/;

const Calculator = () =>
{
    const [inputs, setInputs] = useState(
        {
            number1: '',
            number2: '',
            operator: '+'
        }
    );

    const [result, setResult] = useState('');

    // permet de créer une référence vers un élément html.
    // utiliser une ref pour changer le focus sur un champ du form.
    const refInput = useRef();

    const handleNumberInput = (e) =>
    {
        const { name } = e.target;

        const val = e.target.value.replace(',', '.');

        if(regexNbr.test(val))
        {
            setInputs({
                ...inputs,
                [name]: val
            });
        }
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        const number1 = parseFloat(inputs.number1);
        const number2 = parseFloat(inputs.number2);

        switch (inputs.operator)
        {
            case '+':
                setResult(number1 + number2)
                break;
            case '-':
                setResult(number1 - number2)
                break;
            case '*':
                setResult((number1 * number2).toString())
                break;
            case '/':
                setResult(number1 / number2)
                break;
        }

        setInputs({
            number1: '',
            number2: '',
            operator: '+'
        });

        console.log(refInput);
        refInput.current.focus();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='number1'>Number 1</label>
                <input name='number1' id='number1' type='text' value={inputs.number1}
                       onChange={handleNumberInput} ref={refInput} />
            </div>
            <div>
                <label htmlFor='operator'>Operator</label>
                <select name='operator' id='operator' value={inputs.operator} onChange={(e) =>
                    setInputs({ ...inputs, operator: e.target.value})}>
                        <option value='+'>+</option>
                        <option value='-'>-</option>
                        <option value='*'>*</option>
                        <option value='/'>/</option>
                </select>
            </div>
            <div>
                <label htmlFor='number2'>Number 2</label>
                <input name='number2' id='number2' type='text' value={inputs.number2} onChange={handleNumberInput}/>
            </div>
            <button type='submit'>Calculer</button>
            <input type='text' value={result} readOnly />
        </form>
    );
}

export default Calculator;
