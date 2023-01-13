import styled from "styled-components";
import { textMD, textXS, errorRed, whiteText, houseGreen } from "../../variables.styles";

export const GridItemImage = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 120px;
  background-position: center;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  background-size: 710px 560px;
`;

export const GridItemInfo = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h2 {
    font-size: ${textMD};
    max-width: 95%;
    text-align: center;
    margin-bottom: 40px;
  }

  p {
    font-size: 16px;
    max-width: 90%;
    text-align: center;
    margin-bottom: 30px
  }

  span {
    font-size: ${textXS};
  }
`;

export const GridItemContainer = styled.div`
  width: 100%;
  margin: auto;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({backgroundColor}) => `${backgroundColor}`};
  color: ${({backgroundColor}) => backgroundColor === `${errorRed}` ? `${whiteText}` : `${houseGreen}`}
`;