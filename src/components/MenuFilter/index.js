import MenuFilterStyle from "./styles";
import CheckBox from '../CheckBox';

function MenuFilter({ active }) {
    return (
        <MenuFilterStyle active={active}>
            <CheckBox id="alimentacao" label="Alimentação" />
            <CheckBox id="animais" label="Animais" />
            <CheckBox id="arteCultura" label="Arte e Cultura" />
            <CheckBox id="entidades" label="Entidades" />
            <CheckBox id="audioVideo" label="Audio e Video" />
            <CheckBox id="automoveis" label="Automoveis" />
            <CheckBox id="bancos" label="Bancos" />
            <CheckBox id="bareseBebidas" label="Bares e Bebidas" />
            <CheckBox id="belezaEstetica" label="Beleza e Estética" />
            <CheckBox id="cafes" label="Cafés" />
            <CheckBox id="crinaçasBebes" label="Crianças e Bebes" />
            <CheckBox id="diversaoLazer" label="Diversão e Lazer" />
            <CheckBox id="escritorios" label="Escritórios" />
            <CheckBox id="esporte" label="Esporte" />
            <CheckBox id="fastFood" label="Fast Food" />
        </MenuFilterStyle>
    )
}

export default MenuFilter;