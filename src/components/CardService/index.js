import { CardServiceStyle, Figure, Caption, Photo, Title } from './styles';
import Stars from '../Stars';

function CardService() {
    return (
        <CardServiceStyle>
            <Figure>
                <Photo />
                <Caption>Em Destaque</Caption>
            </Figure>

            <Stars amount="5" />

            <Title>Cafeteria D’ Arte</Title>
        </CardServiceStyle>
    );
};

export default CardService;