import styled from 'styled-components';

export const Form=styled.form`
padding: ${p=>p.theme.spacing(2)};

@media (min-width: 768px) {
  padding-left: ${p=>p.theme.spacing(10)};
  padding-right: ${p=>p.theme.spacing(10)};
}

@media (min-width: 1440px) {
  padding-left: ${p=>p.theme.spacing(20)};
  padding-right: ${p=>p.theme.spacing(20)};
}
`

export const CommentTextArea = styled.textarea`
margin-top: ${p=>p.theme.spacing(2)};
  width: 100%;
  height: 150px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none; 
  margin-bottom: 10px;
  outline: #45a049;

  &:hover {
    border: 2px solid #45a049;
  }
`;

export const SubmitButton = styled.button`
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

export const Label=styled.label`
padding-left: ${p=>p.theme.spacing(3)};
`