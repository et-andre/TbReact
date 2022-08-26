import { useEffect, useState } from "react";

const Today = () => {
    const [day, setDay] = useState("")
    const [dayNumber, setDayNumber] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")

    useEffect(() => {
        setDay(() => {
            switch(new Date().getDay()) {
                case 0:
                    return "dimanche";
                case 1:
                    return "lundi";
                case 2:
                    return "mardi";
                case 3:
                    return "mercredi";
                    case 4:
                    return "jeudi";
                case 5:
                    return "vendredi";
                case 6:
                    return "samedi";
                default:
                    return "";
            }
        }
        );
    
        setMonth(() => {
            switch (new Date().getMonth()) {
                case 0:
                    return "Janvier";
                case 1:
                    return "Fevrier";
                case 2:
                    return "Mars";
                case 3:
                    return "Avril";
                case 4:
                    return "Mai";
                case 5:
                    return "Juin";
                case 6:
                    return "Juillet";
                case 7:
                    return "Aout";
                case 8:
                    return "Septembre";
                case 9:
                    return "Octobre";
                case 10:
                    return "Novembre";
                case 11:
                    return "Decembre";
                default:
                    return "";
            }
        })
        setYear(new Date().getFullYear());
        setDayNumber(new Date().getDate());
    }, [day, month, year, dayNumber])

    return (
        <div>
            <p>
                <span>Le {day} </span>
                <span>{dayNumber} {month} </span>
                <span>{year}</span>
            </p>
        </div>
    );
};


export default Today;