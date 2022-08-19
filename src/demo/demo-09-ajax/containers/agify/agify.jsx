import SearchBar from "../../components/search-bar/search-bar";
import {useState} from "react";
import NameInfo from "../../components/name-info/name-info";

const Agify = () =>
{
    const [name, setName] = useState('');

    return (
        <>
            <SearchBar msg='' onSearch={(val) => setName(val)} />
            <NameInfo name={name} />
        </>
    );
}

export default Agify;
