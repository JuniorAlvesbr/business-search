import MenuFilter from '../../components/MenuFilter';

const Component = {
    title: 'Components/MenuFilter',
    components: MenuFilter
};

export default Component;

const items = [
    { id: "alimentacao", label: "Alimentação" },
    { id: "animais", label: "Animais" },
    { id: "arteCultura", label: "Arte e Cultura" },
    { id: "entidades", label: "Entidades" },
    { id: "audioVideo", label: "Audio e Video" },
    { id: "automoveis", label: "Automoveis" },
    { id: "bancos", label: "Bancos" },
    { id: "bareseBebidas", label: "Bares e Bebidas" },
    { id: "belezaEstetica", label: "Beleza e Estética" },
    { id: "cafes", label: "Cafés" },
    { id: "crinaçasBebes", label: "Crianças e Bebes" },
    { id: "diversaoLazer", label: "Diversão e Lazer" },
    { id: "escritorios", label: "Escritórios" },
    { id: "esporte", label: "Esporte" },
    { id: "fastFood", label: "Fast Food" }
]


const Template = (args) => <MenuFilter {...args} />;

export const Open = Template.bind({});
Open.args = {
    active: true,
    items
};

export const Close = Template.bind({});
Close.args = {
    active: false,
    items
};