import { Fragment } from "react";
import { SubNavBar, SubNavLink } from "../menu/menu.styles";
import { MarginLayout, ButtonsContainer } from "../previous-orders/previous.styles";
import Button from "../../components/button.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button.component";
import { Link } from "react-router-dom";

const FavoriteProducts = () => {
  const myStyle = {
    padding: "10px 20px",
    fontSize: "16px"
  }
  return (
    <Fragment>
      <SubNavBar>
        <ul>
          <li><SubNavLink to="/menu">All products</SubNavLink></li>
          <li><SubNavLink to="/menu/featured">Featured</SubNavLink></li>
          <li><SubNavLink to="/menu/previous">Previous Order</SubNavLink></li>
          <li><SubNavLink to="#">Favorite Products</SubNavLink></li>
        </ul>
      </SubNavBar>

      <MarginLayout>
        <h1>Favorite Products</h1>
        <img src="https://www.starbucks.com/weblx/images/fav-tapes.png" alt="moon" />
        <h2>Save your favorite mixes</h2>
        <p>Use the heart to save customizations. Your favorites will appear here to order again..</p>
        <ButtonsContainer>
          <Link to='/sign-in'><Button style={myStyle} buttonType={BUTTON_TYPE_CLASSES.base}>Sign in</Button></Link>
          <Link to='/sign-up'><Button style={myStyle} buttonType={BUTTON_TYPE_CLASSES.dark}>Join Now</Button></Link>
        </ButtonsContainer>
      </MarginLayout>
    </Fragment>
  )
};

export default FavoriteProducts