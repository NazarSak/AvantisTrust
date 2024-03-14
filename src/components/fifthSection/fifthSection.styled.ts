import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  margin-top: 118px;
`;

export const TitleCon = styled.div`
  width: 621px;
  display: flex;
  gap: 29px;
  h2 {
    font-size: 70px;
    font-weight: 400;
    text-align: left;
    color: #ffffff;
  }
`;

export const TableImg = styled.img`
  width: 1180px;
  height: 240px;
  margin-top: 46px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 13px;
  text-align: left;
  color: #b6b6dd;
  margin-top: 18px;
`;

export const InvestingCon = styled.div`
  width: 1073px;
  height: 518px;
  display: flex;
  margin-top: 38px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 40px;
    font-weight: 400;
    line-height: 38px;
    text-align: center;
    color: white;
  }
`;

export const Containers = styled.div`
  display: flex;
  gap: 47px;
  margin-top: 23px;
`;

export const FirstDiv = styled.div`
  width: 491px;
  height: 381px;
  background: radial-gradient(
    119.49% 119.49% at 2.96% 5.05%,
    rgba(101, 101, 121, 0.8) 0%,
    rgba(40, 40, 57, 0.8) 100%
  );
  box-shadow: 0px 4px 49px 0px #0000004d;
  border-radius: 12px;
  padding: 30px 38px 30px 38px;
  h3 {
    font-size: 24px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
`;

export const SecondDiv = styled.div`
  width: 383px;
  height: 381px;
  border-radius: 12px;
  background: radial-gradient(
    119.49% 119.49% at 2.96% 5.05%,
    rgba(101, 101, 121, 0.8) 0%,
    rgba(40, 40, 57, 0.8) 100%
  );
  box-shadow: 0px 4px 49px 0px #0000004d;
  padding: 30px 38px 30px 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const InfoDiv = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    margin-right: auto;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  li {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  h4 {
    font-family: "Titillium Web", sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 23px;
    color: white;
  }
  span {
    font-size: 30px;
    font-weight: 500;
    line-height: 29px;
  }
`;

export const ImgBanner = styled.img`
  position: absolute;
  width: 459px;
  height: 133px;
  bottom: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;
export const ImgBitcoin = styled.img`
  position: absolute;
  width: 175px;
  height: 175px;
  right: -15px;
  bottom: -50px;
`;

export const ImgMoneroCoin = styled.img`
  position: absolute;
  width: 92.34px;
  height: 92.34px;
  right: 90px;
  bottom: -30px;
`;

export const TextInBanner = styled.div`
  z-index: 1;
  gap: 8px;
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  span {
    font-size: 64px;
    font-weight: 500;
    line-height: 62px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 13px;
  }
`;

export const ButCon = styled.div`
  display: flex;
  gap: 15px;
  margin: 15px 0;
  button {
    width: 154px;
    height: 48px;
    border-radius: 8px;
    background: #262637;
    color: #ffffff;
    outline: none;
    border: none;
    box-shadow: -2px -2px 4px 0px #ffffff26 inset;
    transition: border 0.7s;
    &:hover,
    &:focus {
      border: 2px solid white;
    }
  }
`;

export const Line = styled.div`
  width: 492px;
  border: 1px solid #262637;
`;

export const LineTwo = styled.div`
  width: 395px;
  border: 1px solid #262637;
  margin: 20px 0;
`;

export const RangeCon = styled.div`
  width: 492px;
  height: 83px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  margin-top: 16px;
  background: #262637;
  box-shadow: -2px -2px 4px 0px #ffffff26 inset;
  padding: 10px 0px;
  h3 {
    font-size: 14px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: center;
    color: #b6b6dd;
  }
  h4 {
    font-size: 24px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    color: #ffffff;
    margin-top: 6px;
  }
  h5 {
    font-size: 10px;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: 0em;
    text-align: left;
    color: #b6b6dd;
  }
`;

export const FirstNumber = styled.h5`
  position: absolute;
  bottom: 0;
  left: 20px;
`;
export const SecondNumber = styled.h5`
  position: absolute;
  bottom: 0;
  right: 20px;
`;

export const Field = styled.input`
  width: 477px;
  height: 48px;
  border-radius: 8px;
  background: #262637;
  box-shadow: -2px -2px 4px 0px #ffffff26 inset;
  border: none;
  outline: none;
  padding-left: 13px;
  margin-top: 16px;
  color: #b6b6dd;
`;

export const SubmitButton = styled.button`
  width: 300px;
  height: 54px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px;
  font-size: 20px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  margin: 0 auto;
  margin-top: 19px;
  background: transparent;
  border: 1px solid #ffffff;
`;
