import styled from 'styled-components';
import LogoMain from '../LogoMain';
import IconSearch from '../IconSearch';

const HeaderMain = styled.header`
  background-color: #3c5268;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > ${LogoMain}, & > ${IconSearch} {
    width: 24px;
  }
`;

export default HeaderMain;
