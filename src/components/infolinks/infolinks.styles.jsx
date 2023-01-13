import styled from "styled-components";
import { softBlackText, blackText, textXS } from "../../variables.styles";

export const FooterInfoLinks = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
`;

export const FooterTab = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 35px;
  max-width: 18%;
  h3 {
    margin-bottom: 30px;
    font-size: ${textXS}
  }
  a {
    color: ${softBlackText};
    text-decoration: none;
    margin-bottom: 15px;
    font-size: 1.4rem;

    &:hover {
      color: ${blackText};
    }
  }
`;