import PleanetOne from "../../assets/Img/planetOne.png";
import PleanetTwo from "../../assets/Img/planetTwo.png";
import PleanetThree from "../../assets/Img/planetThree.png";
import PleanetFour from "../../assets/Img/planetFour.png";
import PleanetFive from "../../assets/Img/planetFive.png";

import LinePOne from "../../assets/Svg/LinePOne.svg";
import LinePTwo from "../../assets/Svg/LinePTwo.svg";
import LinePThree from "../../assets/Svg/LinePThree.svg";
import LinePFour from "../../assets/Svg/LinePFour.svg";
import LinePFive from "../../assets/Svg/LinePFive.svg";

import StarsBack from "../../assets/Img/BackStars.png";

import {
  Section,
  StyleElipseDiv,
  PlanetsCon,
  PlanetsConInfo,
  BackStars,
  BlurConTop,
  BlurConBottom,
  PlanetImgOne,
  PlanetImgTwo,
  PlanetImgThree,
  PlanetImgFour,
  PlanetImgFive,
  LineOne,
  LineTwo,
  LineThree,
  LineFour,
  LineFive,
} from "./secondSection.styled";

export const SecondSection = () => {
  return (
    <>
      <Section>
        <BlurConTop />
        <BackStars src={StarsBack} alt="" />
        <BlurConBottom />
        <StyleElipseDiv />
        <PlanetsCon>
          <ul>
            <li>
              <PlanetImgOne src={PleanetOne} alt="PleanetOne" />
              <LineOne src={LinePOne} alt="" />
            </li>
            <li>
              <PlanetImgTwo src={PleanetTwo} alt="PleanetTwo" />
              <LineTwo src={LinePTwo} alt="" />
            </li>
            <li>
              <PlanetImgThree src={PleanetThree} alt="PleanetThree" />
              <LineThree src={LinePThree} alt="" />
            </li>
            <li>
              <PlanetImgFour src={PleanetFour} alt="PleanetFour" />
              <LineFour src={LinePFour} alt="" />
            </li>
            <li>
              <PlanetImgFive src={PleanetFive} alt="PleanetFive" />
              <LineFive src={LinePFive} alt="" />
            </li>
          </ul>
          <PlanetsConInfo>
            <h3>What is</h3>
            <h2>
              Avantis<span>Trust?</span>
            </h2>
            <p>
              Avantis Trust - alternative investments.The bottom line is that
              your money goes to all activities of the company. This is the
              Foundation that supports all of the company's products.
            </p>
          </PlanetsConInfo>
        </PlanetsCon>
      </Section>
    </>
  );
};
