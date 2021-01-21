import { CheckBoxStyle, Content } from './styles';

function CheckBox({ id, label }) {
    return (
        <>
            <CheckBoxStyle id={id} />
            <Content htmlFor={id}>{label}</Content>
        </>
    )
}

export default CheckBox;