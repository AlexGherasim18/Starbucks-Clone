import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as StarbucksLogo } from "../../assets/logo.svg"
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { NavigationContainer, CenterItems, LogoContainer, LinksWrapper, LeftList, LeftItem, RightList, RightItem, LocationDotIcon, SignOutButton } from "./navigation.styles";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  
  return (
    <Fragment>
      <NavigationContainer>
        <CenterItems>
          <LogoContainer to='/'>
            <StarbucksLogo className="logo"/>
          </LogoContainer>

          <LinksWrapper>
            <LeftList>
              <LeftItem to='menu'>MENU</LeftItem>
              <LeftItem to='rewards'>REWARDS</LeftItem>
              <LeftItem>GIFT CARDS</LeftItem>
            </LeftList>
            <RightList>
              <RightItem>
                <LocationDotIcon /> 
                Find a Store
              </RightItem>
              {currentUser ? (<SignOutButton onClick={signOutUser}>Sign Out</SignOutButton>) : (<Link to='/sign-in'><Button buttonType={BUTTON_TYPE_CLASSES.base}>Sign in</Button></Link>)}
              <Link /*href='sign-up'*/ to='/sign-up'><Button buttonType={BUTTON_TYPE_CLASSES.dark}>Join Now</Button></Link>
            </RightList>
          </LinksWrapper>
        </CenterItems>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
};


export default Navigation;