import BackActionStyle from './styles';
import IconArrow from '../IconArrow';

function BackAction({ as, content }) {
    return (
        <BackActionStyle as={as}>
            <IconArrow />
            {content}
        </BackActionStyle>
    )
}

export default BackAction;