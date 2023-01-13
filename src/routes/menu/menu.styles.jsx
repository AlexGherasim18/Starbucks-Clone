import { Link } from "react-router-dom";
import styled from "styled-components";
import { blackText, coolNeutral, softBlackText } from "../../variables.styles";


export const MenuListItem = styled(Link)`
  color:${softBlackText};
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 550;
  padding-bottom: 15px;
  max-width: 80%;
`;

export const SideList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-bottom: 20px;
  h2 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  min-width: 20%;
`;

export const MenuPageWrapper=styled.div`
  padding-top: 30px;
  margin: auto;
  width: 82%;
  display: flex;
  flex-direction: row;

  h1 {
    font-size: 30px;
    margin-bottom: 40px;
  }
`;

export const SubNavLink = styled(Link)`
  text-decoration: none;
  color: ${blackText};
  font-size: 1rem;
  font-weight: 520;
`;

export const SubNavBar = styled.div`
  background-color: ${coolNeutral};
  display: flex;
  padding: 10px 0;
  ul {
    width: 82%;
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: start;

    margin: auto;

    li {
      margin-right: 20px;
      padding: 5px 0;
      text-underline-offset: 8px;
    }
  }
`;