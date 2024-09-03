import styled from "styled-components";

export const Container = styled.ul`
padding: ${p=>p.theme.spacing(2)};

list-style: none;

@media (min-width: 768px) {
  padding-left: ${p=>p.theme.spacing(10)};
  padding-right: ${p=>p.theme.spacing(10)};
}

@media (min-width: 1440px) {
  padding-left: ${p=>p.theme.spacing(20)};
  padding-right: ${p=>p.theme.spacing(20)};
}
`

export const Tittle=styled.h5`
font-size: 16px;

@media (min-width: 768px) {
  font-size: 18px;
}

@media (min-width: 1440px) {
  font-size: 24px;
}`

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

list-style: none;

@media (min-width: 768px) {
  padding-left: ${p=>p.theme.spacing(10)};
  padding-right: ${p=>p.theme.spacing(10)};
}

@media (min-width: 1440px) {
  padding-left: ${p=>p.theme.spacing(20)};
  padding-right: ${p=>p.theme.spacing(20)};
}
`

export const Span=styled.span`
text-decoration: underline;
color: ${({ $Bad, $Good }) => 
    $Bad ? 'red' : 
    $Good ? 'green' : 
    'black'
  };

font-size: 16px;

@media (min-width: 768px) {
  font-size: 18px;
}

@media (min-width: 1440px) {
  font-size: 22px;
}
`

export const Text=styled.p`
margin-bottom: 10px;
text-align: justify;

font-size: 16px;

@media (min-width: 768px) {
  font-size: 18px;
}

@media (min-width: 1440px) {
  font-size: 22px;
}
`