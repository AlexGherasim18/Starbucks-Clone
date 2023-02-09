import { combineReducers } from "redux";
import { giftCardsReducer } from "./gift-cards/gift-cards.reducer";
import { categoriesReducer } from "./menu/menu.reducer";
import { userReducer } from "./user/user-reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  giftcards: giftCardsReducer
})