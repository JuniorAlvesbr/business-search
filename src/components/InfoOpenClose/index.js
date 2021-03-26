import styled from 'styled-components'

const InfoOpenClose = styled.p`
    color: ${({ states }) => states === "open" ? '#62c370' : '#ff0000'};
    font-size: 24px;
    padding: 20px 16px 10px;
`

export default InfoOpenClose;
