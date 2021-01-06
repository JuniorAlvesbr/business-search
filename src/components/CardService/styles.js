import styled from 'styled-components';
import photo from '../../assets/images/coffee.svg';
import { Item, StarStyle } from '../Stars/style';

export const Figure = styled.figure`
    display: flex;
    position: relative;
`;

export const Photo = styled.img.attrs({ src: photo, alt: 'Foto dos prestadores de serviço' })`
    border-bottom: 2px solid #fffcee;
`;

export const Caption = styled.figcaption`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F25A70;
    width: 100%;
    height: 36px;
    position: absolute;
    bottom: 2px;
    font-size: 24px;
    color: #fffcee;
    text-transform: uppercase;
    border-top: 2px solid #fffcee;
`;

export const Title = styled.h2`
    color: #fffcee;
    font-size: 20px;
    line-height: 30px;
    margin-left: var(--gap-smaller);
`;

export const CardServiceStyle = styled.article`
    max-width: 288px;
    width: 100%;
    border: 5px solid #FFFCEE;
    border-radius: 14px;
    overflow: hidden;
    padding-bottom: var(--gap-smaller);

    & > ${StarStyle} {
        margin: var(--gap-smaller) var(--gap-smaller) var(--gap-smaller) var(--gap-smaller);
    }

`;