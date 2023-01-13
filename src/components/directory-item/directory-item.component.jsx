import { Fragment } from "react";
import Button from "../button.component";
import { DirectoryItemContainer, CategoryImage, CategoryInfo } from "./directory-item.styles";


const DirectoryItem = ({ category }) => {
  const { imageUrl, title, descr, button, buttonDesc, backgroundColor, id } = category;

  return (
    <Fragment>
      <DirectoryItemContainer id={id} backgroundColor={backgroundColor}>
        <CategoryImage imageUrl={imageUrl} />
        <CategoryInfo>
          <h2>{title}</h2>
          <p>{descr}</p>
          <Button buttonType={button}><span>{buttonDesc}</span></Button>
        </CategoryInfo>
      </DirectoryItemContainer>
      <br /> <br />
      
    </Fragment>
  )
};

export default DirectoryItem;