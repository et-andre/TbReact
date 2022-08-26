import { useEffect, useState } from "react";


function Clock() {

    const [time, setTime] = useState(new Date());

    function tick() {
        setTime(new Date())
    }

    useEffect(() => {
        console.log("Setting interval to update the time.");
        const id = setTimeout(tick, 200);

        return () => {
            console.log("Unregister from component.");
            clearTimeout(id);
        }
    }, [time]);

    return (
        <>
            <p>Time: {time.toLocaleTimeString("fr-FR", {hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>
        </>
    );
}
export default Clock;