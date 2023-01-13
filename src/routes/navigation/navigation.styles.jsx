import styled from "styled-components";
import { Link } from "react-router-dom";
import { warmNeutral, ceramic, blackText, textXXS, fontBold, fontSemiBold, accentGreen, trueBlack, trueWhite } from "../../variables.styles";
import {Map} from "@styled-icons/boxicons-solid/Map";

export const NavigationContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${ceramic};
  box-shadow: 0 2px 5px ${warmNeutral};
`;

export const CenterItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;

  margin: 0 auto;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 60px;
  margin-right: 20px;
  text-decoration: none;
`;

export const LinksWrapper = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LeftList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftItem = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 20px;
  color: ${blackText};
  font-size: ${textXXS};
  font-weight: ${fontBold};
  height: 100%;
  &:hover {
    color: ${accentGreen}
  }
`;

export const RightList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const RightItem = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  color: ${blackText};
  font-size: 1.3rem;
  font-weight: ${fontSemiBold};

  &:hover {
    color: ${accentGreen};
  }
`;

export const LocationDotIcon = styled(Map)`
  width: 25px;
  height: 40px;
  
`;

export const SignOutButton = styled.div`
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
`;