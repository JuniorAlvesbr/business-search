import HeaderMain from '../../components/HeaderMain';
import ServiceFilter from '../../components/ServiceFilter';
import ButtonFixed from '../../components/ButtonFixed';
import ServiceWrapper from '../../components/ServiceWrapper';

function Home() {

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

    const servicesList = [
        {
            featuredContent: "Em Destaque",
            featured: true,
            stars: 5,
            title: "Cafeteria D’ Arte"
        },
        {
            featuredContent: "Em Destaque",
            featured: false,
            stars: 3,
            title: "Cafeteria Pedro"
        },
        {
            featuredContent: "Em Destaque",
            featured: false,
            stars: 1,
            title: "Cafeteria jose"
        },
    ]

    return (
        <>
            <HeaderMain />

            <ServiceFilter label="Guia de Serviços" items={items} />

            <ServiceWrapper list={servicesList} />

            <ButtonFixed>Insira o seu Negócio</ButtonFixed>
        </>
    )
}

export default Home;