import styled from "styled-components";
import {SpotifyWithCircle} from "@styled-icons/entypo-social/SpotifyWithCircle";
import {FacebookWithCircle} from "@styled-icons/entypo-social/FacebookWithCircle";
import {PinterestWithCircle} from "@styled-icons/entypo-social/PinterestWithCircle";
import {InstagramWithCircle} from "@styled-icons/entypo-social/InstagramWithCircle";
import {YoutubeWithCircle} from "@styled-icons/entypo-social/YoutubeWithCircle";
import {TwitterWithCircle} from "@styled-icons/entypo-social/TwitterWithCircle";
import { ceramic, blackText, softBlackText } from "../../variables.styles";
import { Link } from "react-router-dom";
// import * as boxiconsLogos from '@styled-icons/boxicons-logos';

export const CopyRight = styled.div`
  color: ${softBlackText};
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

export const VertLine = styled.div`
  margin: 0 20px;
  border-left: 2px solid ${softBlackText};
  height: 20px;
`;

export const Policies = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 30px 0 20px 0;

  a {
    text-decoration: none;
    font-size: 1.4rem;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ForSpotify = styled(SpotifyWithCircle)`
  color: ${blackText};
  width: 35px;
  height: 35px;
`;
export const ForFacebook = styled(FacebookWithCircle)`
  color: ${blackText};
  width: 35px;
  height: 35px;
`;
export const ForPinterest = styled(PinterestWithCircle)`
  color: ${blackText};
  width: 35px;
  height: 35px;
`;
export const ForInstagram = styled(InstagramWithCircle)`
  color: ${blackText};
  width: 35px;
  height: 35px;
`;
export const ForYoutube = styled(YoutubeWithCircle)`
  color: ${blackText};
  width: 35px;
  height: 35px;
`;
export const ForTwitter = styled(TwitterWithCircle)`
  color: ${blackText};
  width: 35px;
  height: 35px;
`;

export const SocialLink = styled.div`
  border-radius: 50%;
  padding: 10px;
  margin-right: 10px;
  
  &:hover {
    background-color: ${ceramic};
  }
`;

export const SocialMediaLinks = styled(Link)`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

export const SocialMediaContainer = styled.div`
  border-top: 2px solid ${ceramic}; 
  margin-top: 40px;
`;
