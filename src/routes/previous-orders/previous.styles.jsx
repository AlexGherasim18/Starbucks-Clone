import styled from "styled-components";
import { softBlackText, textMD } from "../../variables.styles";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 20px;
  width: 28%;
`

export const MarginLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 91%;
  margin: 40px 0 50px auto;

  h1 {
    font-weight: 800;
    font-size: ${textMD};
    margin-bottom: 30px;
  }

  img {
    width: 225px;
    height: 190px;
    margin: 20px 0;
  }

  h2 {
    font-size: 26px;
    width: 25%;
    line-height: 35px;
    margin-bottom: 20px;
  }

  p {
    font-weight: 550;
    color: ${softBlackText};
    font-size: 1.9rem;
    width: 26%;
    line-height: 28px;
  }
`;