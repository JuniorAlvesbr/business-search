import { useHistory } from 'react-router-dom';
import HeaderMain from "../../components/HeaderMain";
import BackAction from "../../components/BackAction";
import WrapperBusiness from '../../components/WrapperBusiness';

function Details() {
    const history = useHistory();

    function handleClick() {
        history.goBack()
    }

    return (
        <>
            <HeaderMain />
            <BackAction as="a" content="Voltar" onClick={handleClick} />
            <WrapperBusiness
                stars="5"
                title="Café do Zé"
                description="Aqui é só felicidade e café com um bom sol no verão e no inverno"
            />
        </>
    )
}

export default Details;