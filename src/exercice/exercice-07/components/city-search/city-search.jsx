import {useState} from "react";

const CitySearch = ({ onSearch }) =>
{
    const [city, setCity] = useState('');

    return (
        <form>
            <input type='text' value={city} onChange={(e) => setCity(e.target.value)} />
            <input type='submit' onClick={(e) => {
                e.preventDefault();
                onSearch(city);
            }
            }/>
        </form>
    );
}

export default CitySearch;
