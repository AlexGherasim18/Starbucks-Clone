import styled from "styled-components";
import { Link } from "react-router-dom";
import { softBlackText } from "../../variables.styles";

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