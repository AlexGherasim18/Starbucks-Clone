import { combineReducers } from "redux";
import { categoriesReducer } from "./menu/menu.reducer";
import { userReducer } from "./user/user-reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer
})