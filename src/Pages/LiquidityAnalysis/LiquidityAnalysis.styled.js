import styled from "styled-components";

export const Title=styled.h2`
margin-bottom: ${p=>p.theme.spacing(4)};
padding: ${p=>p.theme.spacing(2)};
text-align: center;
text-decoration: underline;

font-size: 18px;

@media (min-width: 768px) {
  font-size: 20px;
}

@media (min-width: 1440px) {
  font-size: 26px;
}
`