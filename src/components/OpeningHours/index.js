import { OpeningHoursStyle, Items, Days, Hours } from './styles'

function OpeningHours({ schedule }) {

    return (
        <OpeningHoursStyle>
            {schedule.map(item => (
                <Items key={item.key}>
                    <Days>{item.day}</Days>
                    <Hours>{item.hours}</Hours>
                </Items>
            ))}
        </OpeningHoursStyle>
    )
}

export default OpeningHours