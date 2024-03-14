import styled from "styled-components";

export const Section = styled.section`
  margin-top: 145px;
  /* width: 1305px; */
  /* height: 655px; */
  position: relative;
`;

export const VectorLineImg = styled.img`
  position: absolute;
  width: 1275px;
  height: 465px;
  top: 140px;
  z-index: -1;
`;

export const TitleCon = styled.div`
  width: 318px;
  height: 99px;
  display: flex;
  gap: 25px;
  h2 {
    font-size: 50px;
    font-weight: 400;
    line-height: 47px;
    color: white;
  }
`;

export const PhoneContiner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImgDirectionLeft = styled.img`
  position: absolute;
  width: 155px;
  height: 265px;
  top: 215px;
  left: 265px;
`;

export const ImgPhone = styled.img`
  position: absolute;
  width: 570px;
  height: 630px;
  top: 0;
  left: 355px;
`;

export const ImgDirectionRight = styled.img`
  position: absolute;
  width: 155px;
  height: 400px;
  right: 270px;
  top: 85px;
  z-index: -1;
`;

export const FirstList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 77px;
  margin-top: 80px;
  li {
    width: 211px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 19px;
    padding: 10px 39px 10px 13px;
    border-radius: 10px;
    background: radial-gradient(
      119.49% 119.49% at 2.96% 5.05%,
      rgba(101, 101, 121, 0.8) 0%,
      rgba(40, 40, 57, 0.8) 100%
    );
    border: 1px solid white;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    color: #ffffff;
  }
`;

export const SecondList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 77px;
  margin-top: -50px;
  margin-right: 5px;
  width: fit-content;
  li {
    width: 211px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 19px;
    padding: 10px 39px 10px 13px;
    border-radius: 10px;
    background: radial-gradient(
      119.49% 119.49% at 2.96% 5.05%,
      rgba(101, 101, 121, 0.8) 0%,
      rgba(40, 40, 57, 0.8) 100%
    );
    border: 1px solid white;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    color: #ffffff;
  }
`;
