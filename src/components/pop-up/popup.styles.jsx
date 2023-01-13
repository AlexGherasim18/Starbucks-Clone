import styled from "styled-components";

export const ArrowBtns = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  
  button {
    margin: 0 50px 15px 50px;
    
    span {
      font-size: 2.4rem;
    }
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
`;

export const PopupInner = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 420px;
  border-radius: 10px;
  padding: 0 30px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
  }

  h3 {
    margin-top: 2rem;
    margin-bottom: 1.2rem;
    font-size: 1.9rem;
  }

  p {
    text-align: center;
    margin-bottom: 1.6rem;
    font-size: 1.4rem;
    padding: 0 20px;
    word-spacing: 3px;
  }
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
`;  