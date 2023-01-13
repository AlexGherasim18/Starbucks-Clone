import { Fragment } from "react";
import Button from "../../components/button.component";
import { GridItemContainer, GridItemImage, GridItemInfo } from "./featured-items.styles";

const GridItem = ({ category }) => {
  const { imageUrl, title, descr, button, buttonDesc, backgroundColor, id } = category;

  return (
    <Fragment>
      <GridItemContainer id={id} backgroundColor={backgroundColor}>
        <GridItemImage imageUrl={imageUrl} />
        <GridItemInfo backgroundColor={backgroundColor}>
          <h2>{title}</h2>
          <p>{descr}</p>
          <Button buttonType={button}><span>{buttonDesc}</span></Button>
        </GridItemInfo>
      </GridItemContainer>
    </Fragment>
  )
};

export default GridItem