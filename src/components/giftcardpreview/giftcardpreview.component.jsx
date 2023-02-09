import { Fragment, useState } from "react";
import { ListTitle, ListArr, ListImg } from "./giftcardpreview.styles"

const GiftCardsPreview = ({name, products }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleNext = () => {
    if (products.length > 4) {
      setCurrentIndex(currentIndex + 4)
    }
    return currentIndex
  }
  const handlePrev = () => {
    if(!(currentIndex <= 0)) {
      setCurrentIndex(currentIndex - 4)
    }
    return currentIndex
  }
  return (
   <Fragment>
    <ListTitle>{name}</ListTitle>
    <ListArr>
      {!(currentIndex === 0) ?<button onClick={handlePrev}>&#60;</button> : null}
      <ListImg src={products[currentIndex].imageUrl} alt="cardImage" />
      {products[currentIndex + 1] ? <ListImg src={products[currentIndex + 1].imageUrl} alt="cardImage"/> : null}
      {products[currentIndex + 2] ? <ListImg src={products[currentIndex + 2].imageUrl} alt="cardImage"/> : null}
      {products[currentIndex + 3] ? <ListImg src={products[currentIndex + 3].imageUrl} alt="cardImage"/> : null}
      {products.length > 4 && !(currentIndex + 4 > products.length) ?<button onClick={handleNext}>&#62;</button> : null}
    </ListArr>
   </Fragment>
  )
}

export default GiftCardsPreview;