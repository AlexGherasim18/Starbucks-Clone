import { SideList, MenuListItem } from "./side-menu.styles";



const SideMenuContainer = ({name, products}) => {
  return (
    <SideList>
      <h2>{name}</h2>
      {products.map((product) => {
        return <MenuListItem key={product.id} to={`/menu/${name}/${product.id}`}>{product.name}</MenuListItem>
      }
      )}
    </SideList>
  )
}

export default SideMenuContainer;