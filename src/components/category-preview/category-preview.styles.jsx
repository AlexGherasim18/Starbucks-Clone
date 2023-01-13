import { Link } from "react-router-dom";
import styled from "styled-components";
import { blackText, textXS } from "../../variables.styles";


export const ProductCardImage = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 60px;
  margin-right: 10px;
`;

export const ProductCard = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${textXS};
  text-decoration: none;
  color: ${blackText};
  margin-bottom: 15px;
`;

export const CategoryListTitle = styled.h2`
  margin-top: 10px;

  &:first-child{
    margin-top: 0;
  }
`;

export const CategoryList=styled.ul`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
`;