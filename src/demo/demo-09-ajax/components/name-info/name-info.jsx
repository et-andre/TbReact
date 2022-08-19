import {useEffect, useState} from "react";
import axios from "axios";
import LoadingScreen from "../loading-screen/loading-screen";
import ErrorScreen from "../error-screen/error-screen";
import ResponseScreen from "../response-screen/response-screen";

const NameInfo = ({ name }) =>
{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(
        () =>
        {
            const url = `https://api.agify.io/?name=${name}&country_id=BE`;

            setIsLoading(true);
            setError(null);
            setData(null);

            const timerId = setTimeout(() =>
            {
                axios.get(url)
                    .then(({ data }) =>
                    {
                        setData({
                           name: data.name,
                           age: data.age
                        });
                    })
                    .catch(e => setError(e.error))
                    .finally(() => setIsLoading(false));
            }, 1000);

            return () => clearTimeout(timerId);

        },
    [name]);

    return (
        <div>
            {isLoading ? (
                <LoadingScreen />
            ) : error ? <ErrorScreen error={error} />  :
                data ?
                    (<ResponseScreen {...data} />) : <p>Vous devez entrer un nom!</p> }
        </div>
    );
}

export default NameInfo;
