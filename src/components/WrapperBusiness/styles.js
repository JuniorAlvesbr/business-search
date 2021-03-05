import styled from 'styled-components';
import { StarStyle } from '../Stars/style';
import Title from '../Title';
import PhotoPreview from '../PhotoPreview';
import DescriptionBox from '../DescriptionBox';

const WrapperBusinessStyle = styled.article`
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;

    & > ${StarStyle} {
        margin-bottom: 5px;
    }

    & > ${Title} {
        margin-bottom: 10px;
    }

    & > ${PhotoPreview} {
        margin-bottom: 10px;
        width: 100%;
    }

    &> ${DescriptionBox} {
        width: 100%;
    }

`;

export default WrapperBusinessStyle;