import { Fragment, useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { selectCategoriesMap } from "../../store/menu/menu.selector";
import { MenuPageWrapper } from "../menu/menu.styles";
import SideMenuContainer from "../../components/side-menu/side-menu.components";
import { SideMenu } from "../menu/menu.styles";
import { FilterList, ProductCardFilter, ProductsSection, CategoryListTitle, ProductCardImage  } from "./category.styles";

const Category = () => {
  const {category, id} = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);

  const [data, setData] = useState(categoriesMap[category])
  useEffect(() => {
    setData(categoriesMap[category])
  },[category, categoriesMap])

  const [currentProducts, setCurrentProducts] = useState()
  useEffect(() => {
    if (data) {
      data.filter(function(element) {
        // let setCurrentProducts;
        if(element.id === id) {
          setCurrentProducts(element);
        }
        return setCurrentProducts;
      });
    }
  }, [data, id])
  
  // const currentProducts = data.filter(function(element) {
  //   let setCurrentProducts;
  //   if(element.id === id) {
  //     setCurrentProducts = element;
  //   }
  //   return setCurrentProducts;
  // });
  // console.log(currentProducts.name)
// if (currentProducts !== undefined) {
//   console.log(currentProducts)
// }

  const [products, setProducts] = useState();
  useEffect(() =>{

    if(currentProducts && currentProducts.children && currentProducts.children.length > 0) {
      setProducts(currentProducts.children)
    }else if (currentProducts && currentProducts.children.length === 0) {
      setProducts([currentProducts])
    }
  }, [currentProducts])
if (products) {
  console.log(products)
}

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
      <ProductsSection>
        <h1>Menu</h1>
        {<div>{products && products.map((product) => 
          <Fragment key={product.id}>
            <CategoryListTitle>{product.name}</CategoryListTitle> 
            <FilterList>
              {product.products 
                && product.products.map((item) => {
                  return <ProductCardFilter key={item.productNumber} to='/'>
                      <ProductCardImage src={item.assets.masterImage.uri ? `${item.assets.masterImage.uri}?impolicy=1by1_tight_288` : `${item.assets.thumbnail.large.uri}`} alt="thumbnail"/>
                      <div>{item.name}</div>
                  </ProductCardFilter>
                })
              }
            </FilterList>
          </Fragment>)}
        </div>}
      </ProductsSection>  
    </MenuPageWrapper>
  )
}

export default Category