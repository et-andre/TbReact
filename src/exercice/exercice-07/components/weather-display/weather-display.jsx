const WeatherDisplay = ({ id, city, country, weather, temperature, updateTime, onCallRefresh }) =>
{
    return(
        <div>
            <h2>{city} {country}</h2>
            <p>Température : {temperature}</p>
            <p>Last update : {updateTime.toLocaleString()}</p>
            <button onClick={() => onCallRefresh(id)} >Actualiser</button>
        </div>
    )
}

export default WeatherDisplay;
