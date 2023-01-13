import { CATEGORIES_ACTION_TYPES } from "./menu.reducer"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
export const createAction = (type, payload) => ({ type, payload })

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart())
  try {
    const categoriesArray = await getCategoriesAndDocuments('categories');
    function compare(a, b) {
      if(a.displayOrder < b.displayOrder) {
        return -1;
      }
      if(a.displayOrder > b.displayOrder) {
        return 1;
      }
    }
    const categoriesArraySort = categoriesArray.sort(compare)
    dispatch(fetchCategoriesSuccess(categoriesArraySort));
  } catch (error){
    dispatch(fetchCategoriesFailed(error));
  }
}