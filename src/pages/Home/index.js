import HeaderMain from '../../components/HeaderMain';
import LogoMain from '../../components/LogoMain';
import IconSearch from '../../components/IconSearch';
import ServiceFilter from '../../components/ServiceFilter';
import ButtonFixed from '../../components/ButtonFixed';
import ServiceWrapper from '../../components/ServiceWrapper';
import CardService from '../../components/CardService';

function Home() {
    return (
        <>
            <HeaderMain>
                <LogoMain />
                <IconSearch />
            </HeaderMain>

            <ServiceFilter />

            <ServiceWrapper>
                <CardService />
                <CardService />
                <CardService />
                <CardService />
            </ServiceWrapper>

            <ButtonFixed>Insira o seu Negócio</ButtonFixed>
        </>
    )
}

export default Home;