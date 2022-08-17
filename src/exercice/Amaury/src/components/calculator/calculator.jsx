import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Calculator = ({incrementValue}) => {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');
    const [validated, setValidated] = useState(false)

    const handleReset = () => {
        setFirstNumber('');
        setSecondNumber('');
        setOperator('');
        setResult('');
        setValidated(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setValidated(true);

        let res ='';

        if (operator == '+') {
            res = firstNumber + secondNumber;
        } else if (operator == '-') {
            res = firstNumber - secondNumber;
        } else if (operator == 'x') {
            res = firstNumber * secondNumber;
        } else if (operator == '/') {
            res = firstNumber / secondNumber;
        };

        setResult(res);
    };

    return (
        <div className='container'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className='mb-3 mt-5'>
                    <Form.Label>Number 1</Form.Label>
                    <Form.Control 
                        value={firstNumber} 
                        type='number' onChange={(e) => {setFirstNumber(parseInt(e.target.value))}}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Please enter a number</Form.Control.Feedback> 
                </Form.Group> 
                <Form.Group className='mb-3'>
                    <Form.Label>Operator</Form.Label>
                    <Form.Select required value={operator} onChange={(e) => {setOperator(e.target.value)}}>
                        <option value=''>Choose an operator</option>
                        <option value='+'>+</option>
                        <option value='-'>-</option>
                        <option value='x'>x</option>
                        <option value='/'>/</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Number 2</Form.Label>
                    <Form.Control 
                        value={secondNumber} type='number' 
                        onChange={(e) => {setSecondNumber(parseInt(e.target.value))}}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Please enter a number</Form.Control.Feedback>
                </Form.Group>
                <Button variant='success' type='submit' className='mb-2'>Calculate</Button>
                <br/>
                <Button variant='secondary' type='reset' className='mb-5' onClick={handleReset}>Reset</Button>
                <Form.Group className='mb-3'>
                    <Form.Label>Result</Form.Label>
                    <Form.Control 
                        value={result} 
                        type='text' 
                        disabled
                    />
                </Form.Group>
            </Form> 
        </div>
    );
};

export default Calculator;