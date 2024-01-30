import styled from "styled-components";

export const Section = styled.section`
  margin-top: 63px;
  padding-left: 130px;
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
