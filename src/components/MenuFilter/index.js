import MenuFilterStyle from "./styles";
import CheckBox from '../CheckBox';

function MenuFilter() {
    return (
        <MenuFilterStyle>
            <CheckBox id="alimentacao" />
            <CheckBox id="animais" />
            <CheckBox id="arteCultura" />
            <CheckBox id="entidades" />
            <CheckBox id="audioVideo" />
            <CheckBox id="automoveis" />
            <CheckBox id="bancos" />
            <CheckBox id="bareseBebidas" />
            <CheckBox id="belezaEstetica" />
            <CheckBox id="cafes" />
            <CheckBox id="crinaçasBebes" />
            <CheckBox id="diversaoLazer" />
            <CheckBox id="escritorioSeguranca" />
            <CheckBox id="esporteFitness" />
            <CheckBox id="fastFood" />
        </MenuFilterStyle>
    )
}

export default MenuFilter;