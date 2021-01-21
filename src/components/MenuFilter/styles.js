import styled from 'styled-components';
import { Content as CheckBox } from '../CheckBox/styles';

const MenuFilterStyle = styled.menu`
    background-color: #3A4042;
    padding: var(--gap-medium) var(--gap-smaller);

    & > ${CheckBox}:not(:last-child) {
        margin-bottom: var(--gap-medium);
    }
`;

export default MenuFilterStyle;