import InfoOpenClose from '../InfoOpenClose'
import OpeningHours from '../OpeningHours'

function Schedule({ states }) {

    const stateNow = (states === "open" ? "Aberto Agora" : "Fechado Agora");

    const schedule = [
        { key: "1", day: "Segunda", hours: "08:00 - 12:00 13:30 - 18:00" },
        { key: "2", day: "Terça", hours: "08:00 - 12:00 13:30 - 18:00" },
        { key: "3", day: "Quarta", hours: "08:00 - 12:00 13:30 - 18:00" },
        { key: "4", day: "Quinta", hours: "08:00 - 12:00 13:30 - 18:00" },
        { key: "5", day: "Sexta", hours: "08:00 - 12:00 13:30 - 18:00" },
        { key: "6", day: "Sabado", hours: "08:00 - 12:00 13:30 - 18:00" },
        { key: "7", day: "Domingo", hours: "08:00 - 12:00 13:30 - 18:00" },
        { key: "8", day: "Feriados", hours: "08:00 - 12:00 13:30 - 18:00" },
    ]

    return (
        <>
            <InfoOpenClose states={states} children={stateNow} />
            <OpeningHours schedule={schedule} />
        </>
    )
}

export default Schedule