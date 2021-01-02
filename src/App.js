import HeaderMain from './components/HeaderMain';
import LogoMain from './components/LogoMain';
import IconSearch from './components/IconSearch';
import ServiceFilter from './components/ServiceFilter';
import ButtonFixed from './components/ButtonFixed';

function App() {
  return (
    <>
      <HeaderMain>
        <LogoMain />
        <IconSearch />
      </HeaderMain>

      <ServiceFilter />
      <ButtonFixed>Insira o seu Negócio</ButtonFixed>
    </>
  );
}

export default App;
