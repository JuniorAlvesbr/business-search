import MenuFilterStyle from "./styles";
import CheckBox from '../CheckBox';

function MenuFilter({ active, items }) {
    return (
        <MenuFilterStyle active={active}>
            {items.map(({ id, label }) => <CheckBox key={id} id={id} label={label} />)}
        </MenuFilterStyle>
    )
}

export default MenuFilter;