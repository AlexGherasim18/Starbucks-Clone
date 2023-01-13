import styled from "styled-components";
import { errorRed, textXL } from "../../variables.styles";

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
`;

export const Title = styled.h1`
  color: ${errorRed};
  font-size: ${textXL};
  margin: 50px 0;
`;

export const CenterItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  
  margin: 0 auto 50px auto;
`;
