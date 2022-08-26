import {useWeatherAjax} from "../../hooks/weather-hook";
import LoadingDisplay from "../loading-display/loading-display";
import ErrorDisplay from "../error-display/error-display";
import WeatherDisplay from "../weather-display/weather-display";

const WeatherFetch = ({ city }) =>
{
    const [data, hasError, isLoading, reload] = useWeatherAjax(city);

    const handleRefresh = () =>
    {
        reload();
    }

    return (
        <div>
            {isLoading ? <LoadingDisplay /> :
            hasError ? <ErrorDisplay errorMsg='City not found'/> :
            <WeatherDisplay {...data} onCallRefresh={handleRefresh} />}
        </div>
    );
}

export default WeatherFetch;
