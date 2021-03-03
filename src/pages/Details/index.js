import HeaderMain from "../../components/HeaderMain";
import BackAction from "../../components/BackAction";
import Stars from "../../components/Stars";
import Title from "../../components/Title";
import PhotoPreview from '../../components/PhotoPreview';
import Coffee from '../../assets/images/coffee.svg'

function Details() {
    return (
        <>
            <HeaderMain />
            <BackAction />
            <Stars amount="5" />
            <Title>Cafeteria D’ Arte</Title>
            <PhotoPreview src={Coffee} />
        </>
    )
}

export default Details;