import { FooterInfoLinks, FooterTab } from "./infolinks.styles";

const InfoLinks = () => {
  return (
    <FooterInfoLinks>
      <FooterTab>
        <h3>About Us</h3>
        <a href="/">Our Company</a>
        <a href="/">Our Coffee</a>
        <a href="/">Stories and News</a>
        <a href="/">Starbucks Archive</a>
        <a href="/">Investor Relations</a>
        <a href="/">Customer Service</a>
      </FooterTab>

      <FooterTab>
        <h3>Careers</h3>
        <a href="/">Culture and Values</a>
        <a href="/">Inclusion, Diversity, and Equity</a>
        <a href="/">College Achievement Plan</a>
        <a href="/">Alumni Community</a>
        <a href="/">U.S Careers</a>
        <a href="/">Customer Service</a>
      </FooterTab>

      <FooterTab>
        <h3>Social Impact</h3>
        <a href="/">People</a>
        <a href="/">Planet</a>
        <a href="/">Environmental and Social Impact Reporting</a>
      </FooterTab>

      <FooterTab>
        <h3>For Business Partners</h3>
        <a href="/">Landlord Support Center</a>
        <a href="/">Suppliers</a>
        <a href="/">Corporate Gift Card Sales</a>
        <a href="/">Office and Foodservice Coffee</a>
      </FooterTab>

      <FooterTab>
        <h3>Order and Pickup</h3>
        <a href="/">Order on the App</a>
        <a href="/">Order on the Web</a>
        <a href="/">Delivery</a>
        <a href="/">Order and Pickup Options</a>
        <a href="/">Explore and Find Coffee for Home</a>
      </FooterTab>
    </FooterInfoLinks>
  )
}

export default InfoLinks;