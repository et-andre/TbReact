import {useState} from "react";

const ComplexForm = () =>
{
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [isPresent, setIsPresent] = useState(false);
    const [nbPersons, setNbPersons] = useState('0');
    const [comment, setComment] = useState('');

    const handleInputNumber = (setState, event) =>
    {
        const value = event.target.value;

        const regex = /^[0-9]+$/;

        if(value !== '' && regex.test(value))
        {
            setState(value);
        }
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        const data = {
            email,
            firstname,
            isPresent,
            nbPersons: parseInt(nbPersons) ? nbPersons : 0,
            comment
        };

        console.log(data);

        setEmail('');
        setEmailError(false);
        setFirstname('');
        setComment('');
        setNbPersons('0');
        setIsPresent(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>Email</label>
                <input id='email' type='text' required
                    value={email} onChange={(e) => setEmail(e.target.value.trim())}
                        onBlur={() => setEmailError(email === '')}/>
                {emailError && (
                    <span>Required</span>
                )}
            </div>

            <div>
                <label htmlFor='firstname'>Firstname</label>
                <input id='firstname' type='text'
                       value={firstname} onChange={(e) => setFirstname(e.target.value.trim())}/>
            </div>

            <div>
                <label htmlFor='isPresent'>Present</label>
                <input id='isPresent' type='checkbox'
                       checked={isPresent} onChange={(e) => setIsPresent(e.target.checked)}/>
            </div>

            <div>
                <label htmlFor='nbPerson'>Nb person</label>
                <input id='nbPerson' type='text'
                       value={nbPersons} onChange={(e) => handleInputNumber(setNbPersons, e)}/>
            </div>

            <div>
                <label htmlFor='comment'>Comment</label>
                <textarea id='comment' type='text'
                       value={comment} onChange={(e) => setComment(e.target.value)}/>
            </div>

            <button type='submit'>Submit</button>
        </form>
    );
}

export default ComplexForm;
