import styled from "styled-components";
import { blackText, fontSemiBold, starbucksGreen, lightGreenSecondary } from "../../variables.styles";


export const CreateAccount =styled.div`
  text-align: center;
  width: 40%;
  background-color: ${lightGreenSecondary};
  padding: 30px 0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h3 {
    margin-bottom: 20px;
    color: ${starbucksGreen};
    font-weight: 800;
  }

  span {
    color: ${blackText};
    font-weight: ${fontSemiBold};
    width: 60%;
    margin-bottom: 20px;
  }
`;