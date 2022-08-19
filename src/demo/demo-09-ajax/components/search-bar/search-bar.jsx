import {useState} from "react";

const SearchBar = (props) =>
{
    const { msg, onSearch } = props;
    const [query, setQuery] = useState('');

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        onSearch(query);
    }

    return (
        <form>
            <label htmlFor='searchbox'>Entrer un nom</label>
            <input type='text' name='searchbox'
                   value={query} onChange={(e) => setQuery(e.target.value)} />

            <button onClick={handleSubmit}>Rechercher</button>
        </form>
    );
}

export default SearchBar;
