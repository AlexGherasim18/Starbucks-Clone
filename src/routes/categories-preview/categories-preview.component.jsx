import { useSelector } from "react-redux";
import SideMenuContainer from "../../components/side-menu/side-menu.components";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/menu/menu.selector";
import { MenuPageWrapper, SideMenu } from "../menu/menu.styles";



const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  Object.keys(categoriesMap).map((name) => {
    const products = categoriesMap[name]
    return console.log(products)
  })
  return (
    <MenuPageWrapper>
      <SideMenu>
        {Object.keys(categoriesMap).map((name) => {
          const products = categoriesMap[name]
          
          return (
            <SideMenuContainer key={name} name={name} products={products}/>
          )
        })}
      </SideMenu>
      <div>
        <h1>Menu</h1>
        {Object.keys(categoriesMap).map((name) => {
          const products = categoriesMap[name]
          return (
            <CategoryPreview key={name} name={name} products={products} />
          )
        })}
      </div>
    </MenuPageWrapper>

  )
}

export default CategoriesPreview;