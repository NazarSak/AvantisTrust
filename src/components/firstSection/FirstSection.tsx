import PlayMarket from "../../assets/Img/googlebutton.png";
import Apple from "../../assets/Img/appleButton.png";
import QrCode from "../../assets/Img/qrcode.png";

import {
  Section,
  InfoConatainer,
  QrCodeCon,
  ImgLogos,
  ImgQrCode,
} from "./firstSection.styled";

export const FirstSection = () => {
  return (
    <Section>
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
    </Section>
  );
};
