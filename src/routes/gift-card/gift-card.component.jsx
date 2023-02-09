// import CARDS_DATE from "../../cards"
// import { addCollectionAndDocuments } from "../../utils/firebase/firebase.utils"
import { useSelector } from "react-redux"
import { Fragment, useEffect } from "react"
import { fetchGiftCardsAsync } from "../../store/gift-cards/gift-cards.action"
import { useDispatch } from "react-redux"
import { selectGiftCardsMap } from "../../store/gift-cards/gift-cards.selector"
import GiftCardsPreview from "../../components/giftcardpreview/giftcardpreview.component"
import { PageWrapper } from "./gift-card.styles"

const GiftCard = () => {
  const dispatch = useDispatch()
  /* WE USE THIS useEffect TO ADD THE GIFT CARDS ARRAY TO FIRESTORE DATABASE */

  // useEffect(() => {
  //   addCollectionAndDocuments('gift cards', CARDS_DATE);
  // }, [])
  useEffect(() => {
    dispatch(fetchGiftCardsAsync())
  }, [])

  const giftCardsMap = useSelector(selectGiftCardsMap);
  // const products = Object.keys(giftCardsMap).map((name) => {
  //   const products = giftCardsMap[name]
  //   return products
  // })
  return (
    <Fragment>
      <PageWrapper>
        {Object.keys(giftCardsMap).map(name => {
          const products = giftCardsMap[name]
          return (
            <GiftCardsPreview key={name} name={name} products={products} />
          )
        })}
      </PageWrapper>
    </Fragment>
  )
}

export default GiftCard