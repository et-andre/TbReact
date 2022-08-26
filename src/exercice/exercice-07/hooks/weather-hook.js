import {useEffect, useState} from "react";
import axios from "axios";

const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const useWeatherAjax = (city) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, sethasError] = useState(false);
    const [data, setData] = useState(null);
    const [lastCall, setLastCall] = useState(new Date());

    const reload = () =>
    {
        setLastCall(new Date());
    }

    useEffect(() =>
    {
        setIsLoading(true);
        sethasError(false);
        setData(null);
        console.log(process.env.REACT_APP_WEATHER_KEY);

        const timeoutId = setTimeout(() => {
            axios.get(WEATHER_URL, {
                params:
                {
                    q: city,
                    // appid:  process.env.REACT_APP_WEATHER_KEY,
                    appid: "353fa5b453c97ad69c163a1d432ea481",
                    units: 'metric',
                    lang: 'fr'
                }
            }).then(({ data }) => {
                setData({
                    id: data.id,
                    city: data.name,
                    country: data.sys.country,
                    weather: data.weather[0].description,
                    temperature: data.main.temp,
                    updateTime: new Date(data.dt * 1000)
                })
            }).catch((e) => sethasError(true))
            .finally(() => setIsLoading(false));
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [city, lastCall]);

    console.log('State hook', data, hasError, isLoading);

    return [data, hasError, isLoading, reload];
}
