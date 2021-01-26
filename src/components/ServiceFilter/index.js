import { useState } from 'react';
import { ServiceFilterStyle, Label } from './styles';
import IconMenu from '../IconMenu';
import MenuFilter from '../MenuFilter';

function ServiceFilter() {
  const [activeMenu, setActiveMenu] = useState(false);

  function toggleMenu() {
    setActiveMenu(old => !old)
  }

  return (
    <>
      <ServiceFilterStyle onClick={toggleMenu}>
        <IconMenu />
        <Label>Guia de Serviços</Label>
      </ServiceFilterStyle>
      <MenuFilter active={activeMenu} />
    </>
  );
}

export default ServiceFilter;
