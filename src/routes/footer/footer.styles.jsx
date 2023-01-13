import styled from "styled-components";
import { ceramic, warmNeutral } from "../../variables.styles";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterBorder = styled.div`
  width: 100%;
  border-top: 2px solid ${ceramic};
  box-shadow: 0 -2px 5px ${warmNeutral};
`;