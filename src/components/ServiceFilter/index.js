import { useState } from 'react';
import { ServiceFilterStyle, Label } from './styles';
import IconMenu from '../IconMenu';
import MenuFilter from '../MenuFilter';
import IconClose from '../IconClose';

function ServiceFilter({ label, items }) {
  const [activeMenu, setActiveMenu] = useState(false);

  function toggleMenu() {
    setActiveMenu(old => !old)
  }

  return (
    <>
      <ServiceFilterStyle active={activeMenu} onClick={toggleMenu}>
        <IconMenu />
        <IconClose />
        <Label>{label}</Label>
      </ServiceFilterStyle>
      <MenuFilter active={activeMenu} items={items} />
    </>
  );
}

export default ServiceFilter;
