import styled from "styled-components";
import { trueBlack, trueWhite, whiteText, softBlackText,apronGreen,houseGreen, lightGreen, blackText, fontSemiBold, ceramic, starbucksGreen, accentGreen, textXS, lightGreenSecondary, errorRed, trueGreen } from "../variables.styles";

export const BaseButton = styled.button`
  border-radius: 50px;
  border: 1px solid ${trueBlack};
  text-decoration: none;
  margin: 0 20px;
  color: ${blackText};
  font-size: 1.3rem;
  font-weight: ${fontSemiBold};
  padding: 8px 14px;
  background-color: ${trueWhite};
  &:hover {
    background-color: ${ceramic};
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const DarkButton = styled(BaseButton)`
  border: none;
  background-color: ${trueBlack};
  color: ${whiteText};

  &:hover {
    background-color: ${softBlackText};
  }
`;

export const LightGreen = styled(BaseButton)`
  border: 1px solid ${houseGreen};
  color: ${houseGreen};
  background-color: ${lightGreen};

  &:hover {
    background-color: ${ceramic};
  }
`;

export const DarkGreen = styled(BaseButton)`
  border: 1px solid ${trueWhite};
  color: ${whiteText};
  background-color: ${starbucksGreen};
  
  &:hover {
    background-color: ${apronGreen};
  }
`;  

export const SignUpButton = styled(BaseButton)`
  // width: 50%;
  margin: 0;
  height: 60px;
  align-self: flex-end;
  font-size: 1.8rem;
  background-color: ${accentGreen};
  color: ${whiteText};
  box-shadow: 0 2px 5px ${accentGreen};
  border: none;
  &:hover {
    background-color: ${accentGreen};
  }
`;

export const JoinNowButton = styled(BaseButton)`
  border: 1px solid ${houseGreen};
  color: ${starbucksGreen};
  background-color: ${lightGreenSecondary};
  width: 120px;
  height: 40px;
  font-size: ${textXS};

  &:hover {
    background-color: ${lightGreen};
  }
`;

export const ErrorRed = styled(BaseButton)`
  border: 1px solid ${trueWhite};
  color: ${whiteText};
  background-color: ${errorRed};
  transition: 0.3s;
  
  &:hover {
    background-color: hsla(0,0%,100%,.12);;
  }
`;

export const TrueGreen = styled(BaseButton)`
  border: 1px solid ${houseGreen};
  color: ${houseGreen};
  background-color: ${trueGreen};
  transition: 0.3s;

  &:hover {
    background-color: rgba(30,57,50,.1);
  }
`;