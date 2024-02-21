import PurpleLine from "../../assets/Svg/PurpleLine.svg";
import ArrowTop from "../../assets/Svg/ArrowTop.svg";
import ScheduleBack from "../../assets/Img/schedule.png";

import MoneroCoin from "../../assets/Img/Monero.png";
import Bitcoin from "../../assets/Img/bitcoin.png";
import LiteCoin from "../../assets/Img/LiteCoin.png";

import {
  Section,
  ContainerTitle,
  List,
  ArrowTopImg,
  ContainerInfo,
  ContainerInfoInside,
  SpecialSpanWhite,
  ContainerInfoSpecial,
  ContainerInfoInsideSpecial,
  ScheduleBackImg,
  BackMonero,
  BackBitoc,
  BackLightCoin,
  StyleElipseDiv,
} from "./thirdSection.styled";

const ThirdSection = () => {
  return (
    <Section>
      <StyleElipseDiv />
      <BackMonero src={MoneroCoin} alt="MoneroCoin" />
      <BackBitoc src={Bitcoin} alt="Bitcoin" />
      <BackLightCoin src={LiteCoin} alt="LiteCoin" />

      <ScheduleBackImg src={ScheduleBack} alt="ScheduleBack" />

      <ContainerTitle>
        <img src={PurpleLine} alt="" />
        <h2>Cryptocurrency market in 2021</h2>
        <p>
          The growth rate of cryptocurrencies is accelerating due to the
          involvement of professional investors from classical markets. A new
          trend is that large companies and banks (for example, Tesla, Square
          Inc., MicroStrategy Inc. and others) are becoming holders of
          cryptocurrency
        </p>
      </ContainerTitle>
      <List>
        <li>
          <ContainerInfo>
            <ArrowTopImg src={ArrowTop} alt="" />
            <ContainerInfoInside>
              <h2>more</h2>
              <SpecialSpanWhite>$ 100</SpecialSpanWhite>
              <h2>billion</h2>
            </ContainerInfoInside>
            <p>invested in the cryptocurrency market</p>
          </ContainerInfo>
        </li>
        <li>
          <ContainerInfo style={{ marginTop: "64px" }}>
            <ArrowTopImg src={ArrowTop} alt="" />
            <ContainerInfoInside>
              <h3>
                на <span>240 %</span>
              </h3>
            </ContainerInfoInside>
            <p>the value of crypto assets has increased in 2021</p>
          </ContainerInfo>
        </li>
        <li>
          <ContainerInfo>
            <ArrowTopImg src={ArrowTop} alt="" />
            <ContainerInfoInside>
              <h2>
                $ <span>2</span> trillion
              </h2>
            </ContainerInfoInside>
            <p>total value of digital assets</p>
          </ContainerInfo>
        </li>
        <li>
          <ContainerInfoSpecial>
            <ContainerInfoInsideSpecial>
              <h2>
                at <span>17</span>
              </h2>
              <h2>once</h2>
            </ContainerInfoInsideSpecial>
            <p>The cryptocurrency market has grown in 2021</p>
          </ContainerInfoSpecial>
        </li>
      </List>
    </Section>
  );
};

export default ThirdSection;
