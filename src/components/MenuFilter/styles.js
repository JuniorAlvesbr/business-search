import styled from 'styled-components';
import { Content as CheckBox } from '../CheckBox/styles';

const MenuFilterStyle = styled.menu`
    box-sizing: border-box;
    background-color: #3A4042;
    padding: var(--gap-medium) var(--gap-smaller);
    transform: ${({ active }) => active ? 'translateX(0)' : 'translateX(-100%)'};
    position: absolute;
    left: 0;
    right: 0;
    z-index: 100;
    transition: transform 200ms ease-in-out;

    & > ${CheckBox}:not(:last-child) {
        margin-bottom: var(--gap-medium);
    }
`;

export default MenuFilterStyle;