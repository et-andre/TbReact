import {useState} from "react";

const initialData = {
    email: '',
    emailError: false,
    firstname: '',
    isPresent: false,
    nbPersons: '0',
    comment: ''
};

const ComplexFormV2 = () =>
{
   const [inputs, setInputs] = useState(initialData);

    const handleInput = (event) =>
    {
        console.log(event.target);
        const { name, value, checked, type } = event.target;

        const newValues = {
            ...inputs,
            [name]: type === 'checkbox' ? checked : value
        }

        const newVal = { ...inputs };
        newVal[name] = type === 'checkbox' ? checked : value;

        console.log(newValues);
        console.log(newVal);

        setInputs(newValues);
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        const data = { ...inputs }

        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>Email</label>
                <input id='email' type='text' required
                       name='email'
                       value={inputs.email} onChange={handleInput} />
            </div>

            <div>
                <label htmlFor='firstname'>Firstname</label>
                <input id='firstname' name='firstname' type='text'
                       value={inputs.firstname} onChange={handleInput}/>
            </div>

            <div>
                <label htmlFor='isPresent'>Present</label>
                <input id='isPresent' name='isPresent' type='checkbox'
                       checked={inputs.isPresent} onChange={handleInput}/>
            </div>

            <div>
                <label htmlFor='nbPerson'>Nb person</label>
                <input id='nbPerson' name='nbPersons' type='text'
                       value={inputs.nbPersons} onChange={handleInput}/>
            </div>

            <div>
                <label htmlFor='comment'>Comment</label>
                <textarea id='comment' name='comment' type='text'
                          value={inputs.comment} onChange={handleInput}/>
            </div>

            <button type='submit'>Submit</button>
        </form>
    );
}

export default ComplexFormV2;
