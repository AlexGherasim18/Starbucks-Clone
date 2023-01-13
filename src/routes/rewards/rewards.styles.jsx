import { Link } from "react-router-dom";
import styled from "styled-components";
import { houseGreen, whiteText, fontBold, textXXS, lightGreen, lightGreenSecondary, starbucksGreen, warmNeutral, coolNeutral, softBlackText} from "../../variables.styles";

export const GridItem = styled.div `
  h3 {
    letter-spacing: 0.3em;
    font-size: 1.4rem;
    padding-bottom: 1.6rem;
    color: ${softBlackText}
  }
  p {
    font-size: 1.2rem;
    padding-bottom: 1.6rem;
  }
`;

export const TermsGridBox = styled.div`
  
  display: grid;
  grid-template-areas:
    "text text"
    "gridItem gridItem";
  grid-gap: 30px;
  padding: 4rem;
  margin-bottom: 50px;
  p {
    grid-area: text;
    font-size: 1.2rem;
  }
`;

export const CustomerServ = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-bottom: 128px;

  h2 {
    font-size: 2.8rem;
    padding-bottom: 1.6rem;
  }
  
  p {
    padding-bottom: 1.6rem;
    font-size: 1.2rem;
    line-height: 2rem;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 128px;

  h2 {
    font-size: 2.8rem;
    padding-bottom: 1.6rem;
  }
  
  p {
    padding-bottom: 1.6rem;
    font-size: 1.2rem;
  }

  form {
    width: 68%;

    div {
      display: flex;
      justify-content: flex-end;
    }
  }
`;  

export const StarCodesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 6.8rem;
  width: 70%;
  margin: auto;
`;

export const FlexDiv = styled.div `
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 1.9rem;
  }
  p {
    padding-top: 1.6rem;
    font-size: 1.4rem;
    width: 80%;
  }
`;

export const FlexImgContainer = styled.div`
  padding-right: 1.6rem;
  
  img {
    width: 112px;
    height: 158px;
  }
`;

export const FlexItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
`;

export const FlexItemOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;

  h4 {
    font-size: 2.4rem;
  }
  p {
    font-size: 1.6rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
`;

export const PayTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6.4rem;
  padding-top: 3rem;

  h2 {
    font-weight: 600;
    font-size: 2.6rem;
    padding-bottom: 1.6rem;
  }

  p {
    text-align: center;
    font-size: ${textXXS};
    width: 80%;
  }
`;

export const PayingContainer = styled.div`
  background: ${warmNeutral};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 1.9rem;
    text-align: center;
  }
  p {
    padding-top: 1.6rem;
    text-align: center;
    font-size: 1.4rem;
  }
  button {
    cursor: pointer;
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
    background: none;
    border: none;
    color: ${starbucksGreen};
    font-size: 1.4rem;
    font-weight: 600;
    border-bottom: 2px solid ${starbucksGreen};

    &:hover {
      border-bottom: none;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  img {
    cursor: pointer;
    width: 112px;
    height: 112px;
  }
`;

export const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
`;

export const ProsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2.4rem;
`;

export const RewardsProsContainer = styled.div`
  margin: auto;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export const RewardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: 8s ease-in;
  img {
    width: 24%;
    height: 15%;
    margin-right: 3rem;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 24%;
    margin-left: 3rem;
    h3 {
      font-size: 2rem;
      padding-bottom: 1.6rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;

export const Reward = styled.div`
  width: 100%;
  background-color: ${lightGreen};
  padding-bottom: 20px;
`;

export const RewardButton = styled.button`
  // display: flex;
  // justify-content: center;
  width: 100px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0.8rem 0.8rem 1.6rem 0.8rem;
  border-bottom: ${props => props.value === 'true' ? '3px solid green' : 'none'};
  span {
    font-size: 2.4rem;
    font-weight: 600;
    text-align: center;

    span {
      font-size: 1.4rem;
      color: gold;
    }
  }
`;

export const RewardLevel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  // button {
  //   width: 100px;
  //   border: none;
  //   background: none;
  //   cursor: pointer;
  //   padding: 0.8rem 0.8rem 1.6rem 0.8rem;
  //   border-bottom: ${value => value === 'true' ? '3px solid green' : 'none'};
    

  //   span {
  //     font-size: 2.4rem;
  //     font-weight: 600;
  //     letter-spacing: 2px;

  //     span {
  //       font-size: 1.4rem;
  //       color: gold;
  //     }
  //   }
  // }
`;

export const RewardsByPoints = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const RewardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${lightGreenSecondary};
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  img {
    width: 50px;
    height: 50px;
    margin-bottom: 30px;
  }
  h3 {
    font-weight: 600;
    font-size: 1.9rem;
  }
  p {
    padding-top: 1.6rem;
    font-size: 1.4rem;
    text-align: center;
    
  }
`;

export const Instructions = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 48px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2.8rem;
    padding-bottom: 4.8rem;
    padding-top: 3rem;
  }

  p {
    padding-top: 1.6rem;
    font-size: 1.6rem;
    text-align: center;
  }
`;

export const InstructionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 110px auto 80px auto;
  width: 90%;
`;

export const LinkButton = styled(Link)`
  margin: 30px 0 20px 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png");
  background-size: 170% 120%;
  background-repeat: no-repeat;
  background-position: 55% 100%;
  background-color: ${lightGreen};
  height: 700px;

  h2 {
    font-weight: 600;
    font-size: 3.6rem;
    width: 20%;
    margin: 140px 0 30px 40px;
  }

  div {
    font-size: 1.7rem;
    font-weight: 500;
    margin-left: 40px;
  }
`;

export const SubNav = styled.div`
  display:flex;
  align-items: center;
  background: ${houseGreen};
  color: ${whiteText};
  height: 50px;

  h2 {
   font-weight: ${fontBold};
   font-size: ${textXXS};
   margin-left: 40px;
  }
`;