import styled from "styled-components";

export const Title=styled.h2`
margin-bottom: ${p=>p.theme.spacing(4)};
padding: ${p=>p.theme.spacing(2)};
text-align: center;
text-decoration: underline;

font-size: 20px;

@media (min-width: 768px) {
  font-size: 22px;
}

@media (min-width: 1440px) {
  font-size: 28px;
}
`

export const TitleItem=styled.h3`
padding: ${p=>p.theme.spacing(2)};
text-align: center;

margin-bottom: ${p=>p.theme.spacing(4)};
text-align: center;

font-size: 18px;

@media (min-width: 768px) {
  font-size: 20px;
}

@media (min-width: 1440px) {
  font-size: 26px;
}
`

export const SubmitButton = styled.button`
  margin-left: ${p=>p.theme.spacing(2)};
  margin-bottom: ${p=>p.theme.spacing(2)};
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
  
  @media (min-width: 768px) {
  margin-left: ${p=>p.theme.spacing(10)};
  margin-right: ${p=>p.theme.spacing(10)};
}

@media (min-width: 1440px) {
  margin-left: ${p=>p.theme.spacing(20)};
  margin-right: ${p=>p.theme.spacing(20)};
}
`;