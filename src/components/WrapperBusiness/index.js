import WrapperBusinessStyle from './styles';
import Coffee from '../../assets/images/coffee.svg'
import Stars from "../Stars";
import Title from "../Title";
import PhotoPreview from '../PhotoPreview';
import DescriptionBox from "../DescriptionBox";

function WrapperBusiness({ stars, title, description }) {
    return (
        <WrapperBusinessStyle>
            <Stars amount={stars} />
            <Title>{title}</Title>
            <PhotoPreview src={Coffee} />
            <DescriptionBox>{description}</DescriptionBox>
        </WrapperBusinessStyle>
    )
};

export default WrapperBusiness;