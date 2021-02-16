import styled from 'styled-components';
import { Link } from 'react-router-dom'
import IconArrow from '../IconArrow';

const BackActionStyle = styled(Link)`
    color: #fffcee;
    font-size: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;

    & > ${IconArrow} {
        margin-right: 10px;
    }

`;

export default BackActionStyle;