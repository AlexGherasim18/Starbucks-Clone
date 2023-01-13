import styled, { css } from "styled-components";
import { textXS, apronGreen, softBlackText, starbucksGreen } from "../../variables.styles";

const shrinkLabel = css`
  top: -18px;
  font-size: 1.2rem;
  color: ${apronGreen};
`;

export const FormInputLabel = styled.label`
  font-size: ${textXS};
  position: absolute;
  top: 12px;
  left: 25px;
  pointer-events: none;
  transition: 300ms ease all;

  ${({shrink}) => shrink && shrinkLabel};
`;

export const Input = styled.input`
  border-style: none;
  border: 2px solid ${softBlackText};
  background: none;
  font-size: 20px;
  padding: 8px 20px;
  
  width: 100%;
  border-radius: 15px;

  &:focus {
    outline: none;
    border: 2px solid ${starbucksGreen};
  }
  &:focus ~ ${FormInputLabel} {
    ${shrinkLabel};
  }
`;


export const Group = styled.div`
  position: relative;
  margin: 25px 0;
`;