import { SocialMediaContainer, SocialMediaLinks, SocialLink, ForSpotify, ForFacebook, ForInstagram, ForPinterest, ForYoutube, ForTwitter, VertLine, Policies, CopyRight } from "./socialmedia.styles";

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <SocialMediaLinks>
        <SocialLink><ForSpotify /></SocialLink>
        <SocialLink><ForFacebook /></SocialLink>
        <SocialLink><ForPinterest /></SocialLink>
        <SocialLink><ForInstagram /></SocialLink>
        <SocialLink><ForYoutube /></SocialLink>
        <SocialLink><ForTwitter /></SocialLink>
      </SocialMediaLinks>
      <Policies>
        <a href="/">Privacy policy</a>
        <VertLine />
        <a href="/">Terms Of Use</a>
        <VertLine />
        <a href="/">CA Supply Chain Act</a>
        <VertLine />
        <a href="/">Cookie Preferences</a>
      </Policies>
      <CopyRight><p>&copy; 2022 Starbucks Coffee Company. All rights reserved.</p></CopyRight>
    </SocialMediaContainer>
  )
}

export default SocialMedia;