import { createSelector } from "reselect";

const selectGiftCardsReducer = (state) => state.giftcards;

export const selectGiftCards = createSelector(
  [selectGiftCardsReducer],
  (giftCardsSlice) => giftCardsSlice.giftcards
)

export const selectGiftCardsMap = createSelector(
  [selectGiftCards],
  (giftcards) => giftcards.reduce((acc, card) => {
    const {name, items} = card;

    acc[name.toUpperCase()] = items;
    return acc;
  }, {})
)
