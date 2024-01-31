import styled from "styled-components";

export const Section = styled.section`
  margin-top: 63px;
  /* padding-left: 130px; */
  position: relative;
`;

export const BackLine = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  right: -162px;
  width: 1283px;
  height: 411px;
`;

export const BackSafe = styled.img`
  position: absolute;
  right: -143px;
  top: -140px;
  z-index: -2;
  width: 645px;
  height: 994px;
`;

export const BackPhons = styled.img`
  position: absolute;
  top: -95px;
  left: 278px;
  width: 1088px;
  height: 924px;
`;

export const BackMonero = styled.img`
  position: absolute;
  top: 343px;
  left: 477px;
  width: 100px;
  height: 100px;
`;

export const BackBitoc = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 537px;
  right: -160px;
`;

export const BackLightCoin = styled.img`
  position: absolute;
  position: absolute;
  width: 200px;
  height: 200px;
  top: 8px;
  right: 50px;
  z-index: -1;
`;

export const InfoConatainer = styled.div`
  width: 511px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 33px;
  h2 {
    color: #fff;
    font-size: 74px;
    font-weight: 600;
  }
  span {
    text-align: right;
    -webkit-text-stroke-width: 2;
    -webkit-text-stroke-color: #fff;
  }
  p {
    color: #b6b6dd;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const QrCodeCon = styled.div`
  width: 366px;
  height: 215px;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 174px;
    margin-right: 20px;
  }
  p {
    color: #8a8aa4;
    font-size: 14px;
    font-weight: 400;
    line-height: 96.1%;
  }
`;

export const ImgLogos = styled.img`
  width: 174px;
  height: 50px;
`;

export const ImgQrCode = styled.img`
  width: 173px;
  height: 215px;
`;

export const BlacksCon = styled.div`
  margin-top: 51px;
`;

export const BlacksList = styled.ul`
  width: 463px;
  height: 161px;
  display: flex;
  gap: 6px;
  div {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  li {
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0);
    background: radial-gradient(
      126.27% 124.21% at 2.96% 5.05%,
      rgba(101, 101, 121, 0.5) 0%,
      rgba(40, 40, 57, 0.5) 100%
    );
    box-shadow: 0px 4px 49px 0px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10.5px);
  }
`;

export const LiLonger = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  justify-content: center;
  padding-bottom: 17px;
  width: 128px;
  height: 95px;
  h2 {
    color: #fff;
    font-size: 60px;
    font-weight: 400;
  }
  h3 {
    color: #fff;
    font-size: 40px;
    font-weight: 400;
  }
  span {
    font-size: 30px;
  }
  p {
    color: #a5a5c2;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 96.1%;
  }
`;

export const LiShorter = styled.li`
  width: 132px;
  height: 41px;
  display: flex;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: #a5a5c2;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 96.1%;
  }
`;

export const LiLast = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3px;
  padding-bottom: 17px;
  width: 150px;
  height: 95px;
  h3 {
    color: #fff;
    font-size: 37px;
    font-weight: 400;
  }
  span {
    font-size: 30px;
  }
  p {
    color: #a5a5c2;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 96.1%;
  }
`;
