import BackActionStyle from './styles';
import IconArrow from '../IconArrow';

function BackAction({ as }) {
    return (
        <BackActionStyle as={as}>
            <IconArrow />
            Voltar
        </BackActionStyle>
    )
}

export default BackAction;