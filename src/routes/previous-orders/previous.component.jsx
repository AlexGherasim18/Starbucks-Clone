import { Fragment } from "react";
import { SubNavBar, SubNavLink } from "../menu/menu.styles";
import { MarginLayout, ButtonsContainer } from "./previous.styles";
import Button from "../../components/button.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button.component";
import { Link } from "react-router-dom";

const PreviousOrders = () => {
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
          <li><SubNavLink to="#">Previous Order</SubNavLink></li>
          <li><SubNavLink to="/menu/favorites">Favorite Products</SubNavLink></li>
        </ul>
      </SubNavBar>

      <MarginLayout>
        <h1>Previous Orders</h1>
        <img src="https://www.starbucks.com/weblx/images/moon-phases.gif" alt="moon" />
        <h2>When history repeats itself</h2>
        <p>Previous orders will appear here to quickly order again.</p>
        <ButtonsContainer>
          <Link to='/sign-in'><Button style={myStyle} buttonType={BUTTON_TYPE_CLASSES.base}>Sign in</Button></Link>
          <Link to='/sign-up'><Button style={myStyle} buttonType={BUTTON_TYPE_CLASSES.dark}>Join Now</Button></Link>
        </ButtonsContainer>
      </MarginLayout>
    </Fragment>
  )
};

export default PreviousOrders;