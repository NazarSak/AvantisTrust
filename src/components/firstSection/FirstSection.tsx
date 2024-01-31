import PlayMarket from "../../assets/Img/googlebutton.png";
import Apple from "../../assets/Img/appleButton.png";
import QrCode from "../../assets/Img/qrcode.png";
import VectorLine from "../../assets/Img/VectorLine.png";
import Safe from "../../assets/Img/Safe.png";
import Phons from "../../assets/Img/TwoPhons.png";
import MoneroCoin from "../../assets/Img/Monero.png";
import Bitcoin from "../../assets/Img/bitcoin.png";
import LiteCoin from '../../assets/Img/LiteCoin.png'


import {
  Section,
  BackLine,
  BackSafe,
  BackPhons,
  InfoConatainer,
  QrCodeCon,
  ImgLogos,
  ImgQrCode,
  BlacksCon,
  BlacksList,
  LiLonger,
  LiShorter,
  LiLast,
  BackMonero,
  BackBitoc,
  BackLightCoin,
} from "./firstSection.styled";

export const FirstSection = () => {
  return (
    <Section>
      <BackLine src={VectorLine} alt="VectorLine" />
      <BackSafe src={Safe} alt="" />
      <BackPhons src={Phons} alt="Phons" />
      <BackMonero src={MoneroCoin} alt="MoneroCoin" />
      <BackBitoc src={Bitcoin} alt="Bitcoin" />
      <BackLightCoin src={LiteCoin} alt="LiteCoin" />
      <InfoConatainer>
        <h2>
          Avantis <span>Trust</span>
        </h2>
        <p>
          A unique investment project that combines the capital of private
          investors, the knowledge and experience of the best team of analysts
          in the field of cryptocurrencies
        </p>
      </InfoConatainer>
      <QrCodeCon>
        <div>
          <ImgLogos src={Apple} alt="image" />
          <ImgLogos src={PlayMarket} alt="image" />
          <p>
            *Point the camera and scan the QR code to download the application
          </p>
        </div>
        <ImgQrCode src={QrCode} alt="" />
      </QrCodeCon>
      <BlacksCon>
        <BlacksList>
          <div>
            <LiLonger>
              <h2>
                <span>$</span>100
              </h2>
              <p>investments from</p>
            </LiLonger>
            <LiShorter>
              <p>Automated operation</p>
            </LiShorter>
          </div>
          <div>
            <LiShorter>
              <p>Convenient bot functionality</p>
            </LiShorter>
            <LiLonger>
              <h2>12</h2>
              <p>investment plans</p>
            </LiLonger>
          </div>
          <LiLast>
            <h3>
              0,3-1,8<span>%</span>
            </h3>

            <p>profit per day</p>
          </LiLast>
        </BlacksList>
      </BlacksCon>
      
    </Section>
  );
};
