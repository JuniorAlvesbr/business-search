import styled from 'styled-components'

export const OpeningHoursStyle = styled.ol`
    padding: 16px;
`

export const Items = styled.li`
   display: grid;
   grid-template-columns: 2fr 1fr;
   grid-template-rows: 100%;
   color: #fffcee;
   border-bottom: 1px dashed #fffcee;
   padding-top: 5px;
`

export const Days = styled.p`
    font-size: 16px;
`

export const Hours = styled.p`
    font-size: 14px;
    line-height: 20px;
    text-align: right;
`
