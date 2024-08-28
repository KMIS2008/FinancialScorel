import styled from "styled-components";

export const Form= styled.form` 
display: flex;
flex-direction: column;
padding: ${p=>p.theme.spacing(4)};
`

export const Error = styled.span`
font-family: Manrope;
font-size: 12px;
font-weight: 500;
line-height: 1,16;
letter-spacing: -0.03em;

  color: #EF2447;
  margin-bottom: 8px;
`;

export const Input =styled.input`
margin-bottom: ${p=>p.theme.spacing(2)};
margin-top: ${p=>p.theme.spacing(1)};
width: 100%;
height: 44px;
padding: 0 0 0 20px;
border-radius: 60px;
outline: none;
border: 1px solid #1D1E2133;

    &:hover {
            border: 1px solid #0CAFFF;
          }

    &::placeholder {
        color: #1D1E2166; 
  }
`

export const Label=styled.label`
padding-left: ${p=>p.theme.spacing(3)};
`

export const Button =styled.button`
padding: ${p=>p.theme.spacing(1)};
background: ${p=>p.theme.colors.green};
border-radius: 50px;
font-family: Inter;
font-size: 24px;
font-weight: 600;
line-height: 1,21;

cursor: pointer;

&:hover{
    background: ${p=>p.theme.colors.yellow}; 
}
`

export const ContainerFlex=styled.div`
@media (min-width: 768px) {
  display: flex;
gap:5px;
}

`

export const ContainerColumn=styled.div`
@media (min-width: 768px) {
display: flex;
flex-direction: column;
gap:5px;
}
`