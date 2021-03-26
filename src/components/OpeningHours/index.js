import { OpeningHoursStyle, Items, Days, Hours } from './styles'

function OpeningHours({ day, hours }) {
    return (
        <OpeningHoursStyle>
            <Items>
                <Days>{day}</Days>
                <Hours>{hours}</Hours>
            </Items>
        </OpeningHoursStyle>
    )
}

export default OpeningHours