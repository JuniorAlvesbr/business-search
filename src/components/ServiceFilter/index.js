import { useState } from 'react';
import { ServiceFilterStyle, Label } from './styles';
import IconMenu from '../IconMenu';
import MenuFilter from '../MenuFilter';
import IconClose from '../IconClose';

function ServiceFilter() {
  const [activeMenu, setActiveMenu] = useState(false);

  function toggleMenu() {
    setActiveMenu(old => !old)
  }

  return (
    <>
      <ServiceFilterStyle active={activeMenu} onClick={toggleMenu}>
        <IconMenu />
        <IconClose />
        <Label>Guia de Serviços</Label>
      </ServiceFilterStyle>
      <MenuFilter active={activeMenu} />
    </>
  );
}

export default ServiceFilter;
