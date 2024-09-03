import styled from "styled-components";

export const Container=styled.div`
padding-top: ${({ $isHeader }) => ($isHeader ? '15px' : '0')};
display: flex;
flex-direction: ${({ $isHeader }) => ($isHeader ? 'none' : 'column')};
gap: ${p=>p.theme.spacing(2)};
justify-content:${({ $isHeader }) => ($isHeader ? 'center' : 'none')};
`

export const Button=styled.button`
padding: ${p=>p.theme.spacing(1)};
border-radius: 20px;
border: 2px solid ${p => (p.$isActive ? '#F7F8FA' : '#1D1E2133')};
background: ${p => (p.$isActive ? '#0CAFFF' : 'transparent')};
font-weight: ${p => (p.$isFinish ? 'bold' : 'normal')};

width: ${({ $isHeader }) => ($isHeader ? '200px' : 'none')};

&:hover {
            border: 2px solid #F7F8FA;
            background: #0CAFFF;
          }

`