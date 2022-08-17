import {useState} from "react";

const BasicForm = () =>
{
    const [pseudo, setPseudo] = useState('');

    const handleSumbit = (e) =>
    {
        e.preventDefault();

        console.log(`SUBMIT -> ${pseudo}`);

        setPseudo('');
    }

    return (
        <form onSubmit={handleSumbit}>
            <div>
                <label>Pseudo</label>
                <input type='text' value={pseudo} onChange={(e) => setPseudo(e.target.value)}/>
            </div>
            <button type='submit'>Validate</button>
        </form>
    );
}

export default BasicForm;
