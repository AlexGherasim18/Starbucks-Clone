import { Fragment } from "react"
import { CategoryList, CategoryListTitle, ProductCard, ProductCardImage } from "./category-preview.styles"

const CategoryPreview = ({ name, products }) => {
  return (
    <Fragment>
      <CategoryListTitle>{name}</CategoryListTitle>
      <CategoryList>
        {products.map((product) => {
          
          // console.log(product)
          return <ProductCard key={product.id} to={`${name}/${product.id}`}>
            <ProductCardImage src={product.children.length > 0 ? `${product.children[0].products[0].assets.masterImage.uri}?impolicy=1by1_tight_288` : `${product.products[0].assets.masterImage.uri}?impolicy=1by1_tight_288`} alt="thumbnail" />
            <div>{product.name}</div>
          </ProductCard>}
        )}
      </CategoryList>
    </Fragment>
  )
}


export default CategoryPreview
