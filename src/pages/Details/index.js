import { Link } from 'react-router-dom';
import HeaderMain from "../../components/HeaderMain";
import BackAction from "../../components/BackAction";
import WrapperBusiness from '../../components/WrapperBusiness';

function Details() {
    return (
        <>
            <HeaderMain />
            <BackAction as={Link} content="Voltar" />
            <WrapperBusiness
                stars="5"
                title="Café do Zé"
                description="Aqui é só felicidade e café com um bom sol no verão e no inverno"
            />
        </>
    )
}

export default Details;