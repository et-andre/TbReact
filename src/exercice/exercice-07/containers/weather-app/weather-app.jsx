import {useRef, useState} from "react";
import CitySearch from "../../components/city-search/city-search";
import WeatherFetch from "../../components/weather-fetch/weather-fetch";

const WeatherApp = () =>
{
    const [city, setCity] = useState('');

    const maVarRef = useRef("test");
    // maVarRef.current = "new value";
    // let maVariable = "test";

    return (
        <>
            <CitySearch onSearch={(val) => setCity(val)}/>
            <WeatherFetch city={city} />
        </>
    );
}

export default WeatherApp;
