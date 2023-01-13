import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { CenterItems } from "../navigation/navigation.styles";
import { FooterBorder, FooterContainer } from "./footer.styles";
import InfoLinks from "../../components/infolinks/infolinks.component";
import SocialMedia from "../../components/socialmedia/socialmedia.component";

const Footer = () => {
  return (
    <Fragment>
      <Outlet />
      <FooterBorder>
        <CenterItems>
          <FooterContainer>
            <InfoLinks />
            <SocialMedia />
          </FooterContainer>
        </CenterItems>
      </FooterBorder>
    </Fragment>
  )
};

export default Footer;