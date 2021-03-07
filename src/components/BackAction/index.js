import BackActionStyle from './styles';
import IconArrow from '../IconArrow';

function BackAction({ as, content, onClick }) {
    return (
        <BackActionStyle as={as} onClick={onClick}>
            <IconArrow />
            {content}
        </BackActionStyle>
    )
}

export default BackAction;