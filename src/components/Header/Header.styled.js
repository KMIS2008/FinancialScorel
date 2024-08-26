import styled from "styled-components";

export const Container=styled.div`
position: relative;
height: 130px;
background: ${p=>p.theme.colors.green}
`
export const Title=styled.h1`
padding: ${p=>p.theme.spacing(4)};
margin: 0 auto;
text-align: center;
`

export const Name=styled.h2`
margin: 0 auto;
text-align: center;
`
export const Svg = styled.svg`
position: absolute;
top:10px;
right: 10px;
width: 32px;
height: 26px;
cursor: pointer;
`