import styled from "styled-components";

export const Title=styled.h2`
padding: ${p=>p.theme.spacing(2)};
text-align: center;
`

export const TitleItem=styled.h3`
padding: ${p=>p.theme.spacing(2)};
text-align: center;
`

export const SubmitButton = styled.button`
  margin-left: ${p=>p.theme.spacing(2)};
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
  
`;