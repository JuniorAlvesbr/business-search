import { CheckBoxStyle, Content } from './styles';

function CheckBox({ id }) {
    return (
        <>
            <CheckBoxStyle id={id} />
            <Content htmlFor={id}>Alimentação</Content>
        </>
    )
}

export default CheckBox;