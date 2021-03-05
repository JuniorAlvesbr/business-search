import { CardServiceStyle, Figure, Caption, Photo, Title } from './styles';
import Stars from '../Stars';

function CardService({ featured, featuredContent, stars, title }) {
    return (
        <CardServiceStyle>
            <Figure>
                <Photo />
                <Caption active={featured}>{featuredContent}</Caption>
            </Figure>

            <Stars amount={stars} />

            <Title>{title}</Title>
        </CardServiceStyle >
    );
};

export default CardService;