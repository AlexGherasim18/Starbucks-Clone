
import styled from "styled-components";
import { textXL, textMD, textXS, whiteText, houseGreen, starbucksGreen } from "../../variables.styles";


export const CategoryImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
`;

export const CategoryInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: ${textXL};
    max-width: 65%;
    text-align: center;
    margin-bottom: 40px;
  }

  p {
    font-size: ${textMD};
    max-width: 60%;
    text-align: center;
    margin-bottom: 30px
  }

  span {
    font-size: ${textXS};
  }
`;

export const DirectoryItemContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: ${({id}) => id % 2 !== 0 ? 'row' : 'row-reverse'};
  background: ${({backgroundColor}) => `${backgroundColor}`};
  color: ${({backgroundColor}) => backgroundColor === `${starbucksGreen}` ? `${whiteText}` : `${houseGreen}`}
`;