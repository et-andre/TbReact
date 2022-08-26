import { useEffect, useState } from "react";

const Clock = (props) => {
    const [locale, setLocale] = useState(new Date());

    const update = () => {
        setLocale(new Date());
    };

    useEffect(() =>  {
        setTimeout(update, 200);

        return () => {
            clearTimeout();
        }
    });

    return (
        <div>
            <p>{locale.toTimeString()}</p>
        </div>
    );
};

export default Clock