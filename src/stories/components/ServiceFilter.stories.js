import ServiceFilter from '../../components/ServiceFilter'

const Component = {
    title: 'Components/ServiceFilter',
    component: 'ServiceFilter'
}

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


const Template = args => <ServiceFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Guia de Serviços',
    items
}