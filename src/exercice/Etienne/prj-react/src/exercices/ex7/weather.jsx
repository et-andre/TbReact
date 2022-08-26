const Weather = ({dta}) =>
{
    const city  = dta.name;
    const coord = dta.coord;
    const wthrs = dta.weather;
    const wthr  = wthrs[0];
    const main  = dta.main;
    const dtTm  = dta.dt;
    const syst  = dta.sys;

    // conversion degrés Kelvin => degrés Celsius
    const kc  = -273.15;

    // conversion d'une datetime Unix en date
    function dt2str(dt)
    {
        return dtTm2str(dt, "D");
    }

    // conversion d'une datetime Unix en heure
    function tm2str(dt)
    {
        return dtTm2str(dt, "T");
    }

    // conversion d'une datetime Unix en date ou heure
    function dtTm2str(dt, what)
    {
        let d = new Date(dt * 1000);
        switch(what)
        {
        case "D":
            return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
        case "T":
            let h = d.getHours();
            let m = d.getMinutes();
            let s = d.getSeconds();
            return `${h < 10 ? "0" : ""}${h}:${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
        }
    }

    // conversion d'une latitude degrés décimaux pos/nég en dms N/S
    function latDms(dd)
    {
        return `${dd2dms(dd)} ${dd < 0 ? "S" : "N"}`;
    }

    // conversion d'une longitude degrés décimaux pos/nég en dms E/O
    function lonDms(dd)
    {
        return `${dd2dms(dd)} ${dd < 0 ? "O" : "E"}`;
    }

    // conversion d'une latitude/longitude degrés décimaux en dms
    function dd2dms(dd)
    {
        let d = Math.abs(dd);
        let e = Math.floor(d);
        d     = 60 * (d - e);
        let m = Math.floor(d);
        d     = 60 * (d - m);
        let s = Math.floor(d);
        d     = d - s;
        let r = ("" + d).slice(2,4);

        return `${e}°${m < 10 ? "0" : ""}${m}'${s < 10 ? "0" : ""}${s}"${r}`;
    }

    return (
        <>
            <h1>{city}</h1>
            <table align="center">
                <tr>
                    <td align="left" rowSpan="2">Coord.:</td>
                    <td align="left">latitude:</td>
                    <td align="left">{latDms(coord.lat)}</td>
                </tr>
                <tr>
                    <td align="left">longitude:</td>
                    <td align="left">{lonDms(coord.lon)}</td>
                </tr>
                <tr>
                    <td align="left" colSpan="2">Date:</td>
                    <td align="left">{dt2str(dtTm)}</td>
                </tr>
                <tr>
                    <td align="left" colSpan="2">Météo:</td>
                    <td align="left">{wthr.description}</td>
                </tr>
                <tr>
                    <td align="left" colSpan="2">Température:</td>
                    <td align="left">{(main.temp).toFixed(1)}° C</td>
                </tr>
                <tr>
                    <td align="left" colSpan="2">Pression:</td>
                    <td align="left">{main.pressure} hPa</td>
                </tr>
                <tr>
                    <td align="left" rowSpan="2">Soleil:</td>
                    <td align="left">lever:</td>
                    <td align="left">{tm2str(syst.sunrise)}</td>
                </tr>
                <tr>
                    <td align="left">coucher:</td>
                    <td align="left">{tm2str(syst.sunset)}</td>
                </tr>
            </table>
        </>
    );
}

export default Weather;
