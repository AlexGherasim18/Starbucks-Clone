import styled from "styled-components";

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CampaignInfo = styled.div`
  font-size: 1.2rem;
  font-weight: 550;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
    max-width: 40%;
    margin-bottom: 30px;

    &:first-child {
      margin-top: 40px
    };

    &:last-child {
      margin-top: 60px;
    }

    a {
      color: inherit;

      &:hover {
        text-decoration: none;
      }
    }
  }
`