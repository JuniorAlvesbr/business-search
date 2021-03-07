import { Link } from 'react-router-dom';
import { CardServiceStyle, Figure, Caption, Photo, Title } from './styles';
import Stars from '../Stars';

function CardService({ featured, featuredContent, stars, title }) {
    return (
        <CardServiceStyle>
            <Link to="/details">
                <Figure>
                    <Photo />
                    <Caption active={featured}>{featuredContent}</Caption>
                </Figure>

                <Stars amount={stars} />

                <Title>{title}</Title>
            </Link>
        </CardServiceStyle >
    );
};

export default CardService;