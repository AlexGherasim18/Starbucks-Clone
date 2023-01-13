import { useState } from "react";
import { PopupContainer, PopupInner, CloseBtn, ArrowBtns } from "./popup.styles";

const Popup = (props) => {
  const [currentPage, setCurrentPage] = useState(0);  
  const {category} = props;
  const pageTotal = category.pages.length;

  const increase = () => {
    if(!(currentPage >= pageTotal - 1)) {
      setCurrentPage(currentPage+1)
    } else {
      return currentPage;
    }
  }
  
  const decrease = () => {
    if(!(currentPage === 0)) {
      setCurrentPage(currentPage-1)
    } else {
      return currentPage;
    }
  }
  console.log(currentPage)

  return (
    <PopupContainer className="popup">
      <PopupInner>
        <div><img src={category.pages[currentPage].image} alt="categoryImage" /></div>
        <h3>{category.pages[currentPage].pageTitle}</h3>
        <p>{category.pages[currentPage].pageDesc}</p>
        <CloseBtn onClick={() => props.setTrigger('')}>X</CloseBtn>
        <ArrowBtns>
          <button onClick={decrease}><span>&#60;</span></button>
          <button onClick={increase}><span>&#62;</span></button>
        </ArrowBtns>
      </PopupInner>
    </PopupContainer>
  )
};

export default Popup;