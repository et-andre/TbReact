const Weather = ({dta}) =>
{
    const city  = dta.name;
    const coord = dta.coord;
    const wthrs = dta.weather;
    const wthr  = wthrs[0];
    const main  = dta.main;
    const dtTm  = dta.dt;
    const syst  = dta.sys;

    const kc  = -273.15;

    function dtTm2str(dt, what)
    {
        let d = new Date(dt * 1000);
        switch(what)
        {
        case "D":
            return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
        case "T":
            return `${d.getHours()}:${d.getMinutes() + 1}:${d.getSeconds()}`;
        }
    }

    function latDms(dd)
    {
        return `${dd2dms(dd)} ${dd < 0 ? "S" : "N"}`;
    }

    function lonDms(dd)
    {
        return `${dd2dms(dd)} ${dd < 0 ? "O" : "E"}`;
    }

    function dd2dms(dd)
    {
        let e = Math.floor(dd);
        let d = 60 * (dd - e);
        let m = Math.floor(d);
        d     = 60 * (d - m);
        let s = Math.floor(d);
        d     = d - s;
        let r = ("" + d).slice(2,5);

        return `${e}°${m < 10 ? "0" : ""}${m}'${s < 10 ? "0" : ""}${s}"${r}`;
    }

    return (
        <table align="center">
            <thead>
                <th>
                    <td align="left" colSpan="3">{city}</td>
                </th>
            </thead>
            <tr>
                <td align="left" colSpan="2">Coordonnées:</td>
                <td align="left">{latDms(coord.lat)} {lonDms(coord.lon)}</td>
            </tr>
            <tr>
                <td align="left" colSpan="2">Date:</td>
                <td align="left">{dtTm2str(dtTm, "D")}</td>
            </tr>
            <tr>
                <td align="left" colSpan="2">Météo:</td>
                <td align="left">{wthr.main}</td>
            </tr>
            <tr>
                <td align="left" colSpan="2">Température:</td>
                <td align="left">{(main.temp + kc).toFixed(1)}° C</td>
            </tr>
            <tr>
                <td align="left" colSpan="2">Pression:</td>
                <td align="left">{main.pressure} hPa</td>
            </tr>
            <tr>
                <td align="left">Soleil:</td>
                <td align="left">lever:</td>
                <td align="left">{dtTm2str(syst.sunrise, "T")}</td>
            </tr>
            <tr>
                <td align="left"></td>
                <td align="left">coucher:</td>
                <td align="left">{dtTm2str(syst.sunset, "T")}</td>
            </tr>
        </table>
    );
}

export default Weather;
