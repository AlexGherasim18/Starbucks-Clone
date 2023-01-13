import styled from "styled-components";
import { softBlackText, ceramic, warmNeutral, blackText, textXXS } from "../../variables.styles";



export const FormContainer = styled.div`
  border: 2px solid ${ceramic};
  box-shadow: 0 2px 5px ${warmNeutral};
  border-radius: 20px;
  padding: 40px 0;
  margin: 35px auto;
  width: 40%;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 60%;

    h3 {
      font-size: 20px;
    }

    span {
      width: 100%;
      text-align: left;
      color: ${blackText};
      font-size: ${textXXS}
    }
  }
`;  

export const SignUpContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 5px;
  padding: 10px;

  h2 {
    font-size: 25px;
    font-weight: 800;
    word-spacing: -3px;
  }
  span {
    text-align: center;
    width: 25%;
    font-size: 1.2rem;
    color: ${softBlackText};
  }
`;