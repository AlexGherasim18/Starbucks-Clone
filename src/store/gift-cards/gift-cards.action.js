import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { GIFTCARDS_ACTION_TYPES } from "./gift-cards.reducer";
export const createAction = (type, payload) => ({ type, payload })

export const fetchGiftCardsStart = () => createAction(GIFTCARDS_ACTION_TYPES.FETCH_GIFTCARDS_START);

export const fetchGiftCardsSuccess = (giftCardsArr) => createAction(GIFTCARDS_ACTION_TYPES.FETCH_GIFTCARDS_SUCCESS, giftCardsArr)
export const fetchGiftCardsFailed = (error) => createAction(GIFTCARDS_ACTION_TYPES.FETCH_GIFTCARDS_FAILED, error)

export const fetchGiftCardsAsync = () => async (dispatch) => {
  dispatch(fetchGiftCardsStart());

  try {
    const giftCardsArr = await getCategoriesAndDocuments('gift cards');
    function compare(a, b) {
      if(a.displayNumber < b.displayNumber) {
        return -1;
      }
      if(a.displayNumber > b.displayNumber) {
        return 1;
      }
    }
    const giftCardsArrSort = giftCardsArr.sort(compare);
    dispatch(fetchGiftCardsSuccess(giftCardsArrSort));
  } catch (error) {
    dispatch(fetchGiftCardsFailed(error))
  }
}