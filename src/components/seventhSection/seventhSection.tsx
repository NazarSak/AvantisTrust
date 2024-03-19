import React from "react";
import LineShort from "../../assets/Svg/PurpleLineShort.svg";
import DashboardFirst from "../../assets/Img/DashboardFirst.png";
import DashboardSecond from "../../assets/Img/DashboardSecond.png";
import DashboardThird from "../../assets/Img/DashboardThree.png";
import Numbers from "../../assets/Img/Numbers.png";

import {
  Section,
  TitleContainer,
  FirstContainer,
  InfoContainer,
  DashboardContainer,
  SmallParagraphs,
  List,
  ListItem,
  ImgNumbers,
  SecondContainer,
  TitleContainerSec,
  TitleContainerThird,
  ImgDashboardTwo,
  ThirdContainer,
  ImgDashboardThird,
} from "./seventhSection.styled";

export const SeventhSection = () => {
  return (
    <Section>
      <TitleContainer>
        <img src={LineShort} alt="LineShort" />
        <h2>Referral program</h2>
      </TitleContainer>
      <ImgNumbers src={Numbers} alt="Numbers" />
      <FirstContainer>
        <InfoContainer>
          <p>
            Each of you is able to create your own team, which is focused on
            achieving high results in the direction of active online earnings.
            You can create your affiliate structure immediately after
            registration, by investing a minimum deposit.
          </p>
          <SmallParagraphs>
            <p>
              Avantis Trust's referral program has a linear structure of 4
              levels in depth.
            </p>
            <p>
              Each partner of the service is assigned a status that depends on
              the total amount of investments.
            </p>
            <p>The status affects the amount of interest paid.</p>
          </SmallParagraphs>
        </InfoContainer>
        <DashboardContainer>
          <List>
            <ListItem>
              <h3>Basic</h3>
              <p>from $100 up to $2000</p>
            </ListItem>
            <ListItem>
              <h3>Standard</h3>
              <p>from $2001 up to $5000</p>
            </ListItem>
            <ListItem>
              <h3>Premium</h3>
              <p>from $5001 up to $25,000</p>
            </ListItem>
            <ListItem>
              <h3>VIP</h3>
              <p>from $25001 and above</p>
            </ListItem>
          </List>
          <img src={DashboardFirst} alt="DashboardFirst" />
        </DashboardContainer>
      </FirstContainer>
      <SecondContainer>
        <ImgDashboardTwo src={DashboardSecond} alt="DashboardSecond" />
        <TitleContainerSec>
          <div>
            <img src={LineShort} alt="LineShort" />
            <h2>Partners bonus</h2>
          </div>
          <p>
            The Avantis Trust affiliate program allows each partner of our
            companies receive additional income from the total turnover of the
            structure. Attract new investors and earn up to 150 with them $000
            from the total turnover of the structure.
          </p>
        </TitleContainerSec>
      </SecondContainer>
      <ThirdContainer>
        <TitleContainerThird>
          <div>
            <img src={LineShort} alt="LineShort" />
            <h2>Start Bonus</h2>
          </div>
          <p>
            The company appreciates your efficiency. Therefore, as an additional
            incentive, you can receive a starting bonus. This is a reward that
            depends on the amount of sales in the first line within 14 days
            after you join the company. This is a one-time reward, which is
            assigned based on the maximum achievement in a specified period. The
            rank bonus is paid on the 15th day after registration on the
            platform.
          </p>
        </TitleContainerThird>
        <ImgDashboardThird src={DashboardThird} alt="DashboardThird" />
      </ThirdContainer>
    </Section>
  );
};
