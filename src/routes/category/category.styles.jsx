import styled from "styled-components";
import { textXS, blackText } from "../../variables.styles";

export const CategoryListTitle = styled.h2`
  margin: 30px 0 20px 50px;
  font-size: 18px;

  &:first-child{
    margin-top: 0;
  }
`;

export const FilterList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
`;

export const ProductsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductCardImage = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ProductCardFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${textXS};
  text-decoration: none;
  color: ${blackText};
  margin-bottom: 15px;

  div {
    text-align: center;
    max-width: 60%;
    margin-top: 12px;
  }
`;