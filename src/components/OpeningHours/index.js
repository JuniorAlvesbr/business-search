import { OpeningHoursStyle, Items, Days, Hours } from './styles'

function OpeningHours() {
    return (
        <OpeningHoursStyle>
            <Items>
                <Days>Segunda</Days>
                <Hours>08:00 - 12:00 13:00 - 18:00</Hours>
            </Items>
        </OpeningHoursStyle>
    )
}

export default OpeningHours