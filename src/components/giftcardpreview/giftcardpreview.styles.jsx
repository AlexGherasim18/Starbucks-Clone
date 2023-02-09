import styled from "styled-components";
import { blackText, coolNeutral, softBlackText } from "../../variables.styles";

export const ListTitle = styled.h3`
  font-size: 1.4rem;
  color:${blackText};
  margin-bottom: 2rem;
  margin-top: 5rem;
`

export const ListArr = styled.ul`
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  button {
    cursor: pointer;
    width: 50px;
    height: 50px;
    align-self: center;
    border-radius: 50%;
    background: none;
    background-color: ${coolNeutral};
    border: none;
    font-size: 24px;
    color: ${softBlackText}
  }
`;

export const ListImg = styled.img`
  width: 280px;
  margin: 1rem 1.6rem;
  cursor: pointer;
  

    border-radius: 5%;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

  
`