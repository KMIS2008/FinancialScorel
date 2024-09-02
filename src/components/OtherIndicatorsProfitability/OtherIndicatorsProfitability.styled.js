import styled from "styled-components";

export const Container = styled.ul`
padding: ${p=>p.theme.spacing(2)};
`
export const Number=styled.div`
width: 45px;
height: 25px;
text-align: center;
background: #F7F8FA;
border-radius: 5px;
border: 2px solid #1D1E2133;
`
export const ContainerCurrentRatio= styled.li`
margin-bottom: ${p=>p.theme.spacing(1)};
display: flex;
justify-content: space-between;
gap:5px;
align-items: center;
`

export const ContainerAnalis=styled.ul`
padding: ${p=>p.theme.spacing(2)};
`

export const Span=styled.span`
text-decoration: underline;
color: ${({ $Bad, $Good }) => 
    $Bad ? 'red' : 
    $Good ? 'green' : 
    'black'
  };
`

export const Text=styled.p`
margin-bottom: 10px;
text-align: justify;
`