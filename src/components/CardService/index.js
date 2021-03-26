import { BrowserRouter, Link } from 'react-router-dom';
import { CardServiceStyle, Figure, Caption, Photo, Title } from './styles';
import Stars from '../Stars';

function CardService({ featured, featuredContent, stars, title }) {
    return (
        <CardServiceStyle>
            <BrowserRouter>
                <Link to="/details">
                    <Figure>
                        <Photo />
                        <Caption active={featured}>{featuredContent}</Caption>
                    </Figure>

                    <Stars amount={stars} />

                    <Title>{title}</Title>
                </Link>
            </BrowserRouter>
        </CardServiceStyle>
    );
};

export default CardService;