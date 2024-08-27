import styled from "styled-components";

export const Container=styled.div`
display: flex;
flex-direction: column;
gap: ${p=>p.theme.spacing(2)}
`

export const Button=styled.button`
padding: ${p=>p.theme.spacing(1)};
border-radius: 30px;
border: 2px solid #1D1E2133;

&:hover {
            border: 2px solid #F7F8FA;
            background: #0CAFFF;
          }
`