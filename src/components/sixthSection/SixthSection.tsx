import React from "react";
import PurpleLine from "../../assets/Svg/PurpleLine.svg";
import Phone from "../../assets/Img/phone.png";
import directionLeft from "../../assets/Img/directionLeft.png";
import directionRight from "../../assets/Img/directionRight.png";
import VectorLine from "../../assets/Img/VectorLine.png";
import Benefits from "../../assets/Svg/Benefits.svg";
import Transaction from "../../assets/Svg/Transaction.svg";
import Handshake from "../../assets/Svg/handshake.svg";
import Bell from "../../assets/Svg/Bell.svg";
import Tocens from "../../assets/Svg/Tocens.svg";
import Support from "../../assets/Svg/Support.svg";
import Instructions from "../../assets/Svg/Instructions.svg";
import {
  Section,
  TitleCon,
  PhoneContiner,
  ImgDirectionLeft,
  ImgPhone,
  ImgDirectionRight,
  FirstList,
  SecondList,
  VectorLineImg,
} from "./sixthSection.styled";

export const SixthSection = () => {
  return (
    <Section>
      <TitleCon>
        <img src={PurpleLine} alt="PurpleLine" />
        <h2>All in one place</h2>
      </TitleCon>
      <VectorLineImg src={VectorLine} alt="VectorLine" />
      <PhoneContiner>
        <FirstList>
          <li>
            <img src={Benefits} alt="Benefits" />
            <p>Deposit and withdraw in 1 click</p>
          </li>
          <li>
            <img src={Transaction} alt="Transaction" />
            <p>Monitor the turnover of your structure</p>
          </li>
          <li>
            <img src={Handshake} alt="Handshake" />
            <p>Get referral bonuses</p>
          </li>
        </FirstList>
        <ImgDirectionLeft src={directionLeft} alt="directionLeft" />
        <ImgPhone src={Phone} alt="Phone" />
        <SecondList>
          <li>
            <img src={Tocens} alt="Tocens" />
            <p>Manage your finances</p>
          </li>
          <li>
            <img src={Support} alt="Support" />
            <p>Support 24/7</p>
          </li>
          <li>
            <img src={Bell} alt="Bell" />
            <p>Daily notifications</p>
          </li>
          <li>
            <img src={Instructions} alt="Instructions" />
            <p>Detailed instructions</p>
          </li>
        </SecondList>
        <ImgDirectionRight src={directionRight} alt="directionRight" />
      </PhoneContiner>
    </Section>
  );
};
