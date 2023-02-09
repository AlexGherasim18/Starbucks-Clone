import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { SubNavBar, SubNavLink} from "./menu.styles";
import { NavLink} from "react-router-dom";
import { fetchCategoriesAsync } from "../../store/menu/menu.action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
// import Category from "../category/category.component";
// import { addCollectionAndDocuments } from "../../utils/firebase/firebase.utils";
// import SHOP_DATA from "../../categories";

const Menu = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [])
  return (
    <Fragment>
      <SubNavBar>
        <ul>
          <li><SubNavLink to="menu"><NavLink>All products</NavLink></SubNavLink></li>
          <li><SubNavLink to="featured">Featured</SubNavLink></li>
          <li><SubNavLink to="previous">Previous Order</SubNavLink></li>
          <li><SubNavLink to="favorites">Favorite Products</SubNavLink></li>
        </ul>
      </SubNavBar>
      <Routes>
        <Route index element={<CategoriesPreview />}/>
        <Route path=":category/:id" element={<Category />} />
      </Routes>
    </Fragment>
  )
}

export default Menu;