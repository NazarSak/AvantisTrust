import styled from "styled-components";

export const Section = styled.section`
  margin-top: 220px;
  width: 1180px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 29px;
  margin-right: auto;
  h2 {
    font-size: 70px;
    font-weight: 300;
    line-height: 66.5px;
    color: white;
  }
`;

export const TitleContainerSec = styled.div`
  display: flex;
  width: 566px;
  align-items: baseline;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 29px;
  margin-right: auto;
  div {
    display: flex;
    width: 515px;
    gap: 29px;
    margin-left: -93px;
  }
  h2 {
    font-size: 70px;
    font-weight: 300;
    line-height: 66.5px;
    color: white;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 27.38px;
    color: white;
  }
`;

export const TitleContainerThird = styled.div`
  display: flex;
  width: 566px;
  align-items: baseline;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 29px;
  div {
    display: flex;
    width: 515px;
    gap: 29px;
    margin-left: -93px;
  }
  h2 {
    font-size: 70px;
    font-weight: 300;
    line-height: 66.5px;
    color: white;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 27.38px;
    color: white;
  }
`;

export const FirstContainer = styled.div`
  width: auto;
  display: flex;
  height: 526px;
`;

export const InfoContainer = styled.div`
  width: 514px;
  height: 345px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 37px;
  margin-top: 30px;
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    color: #b6b6dd;
  }
`;

export const SmallParagraphs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 42px;
  margin-top: -20px;
  img {
    width: 575px;
    height: 195px;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: end;
  margin-left: 60px;
  gap: 6px;
`;

export const ListItem = styled.li`
  border: 1px solid;
  border-radius: 10px;
  border: 1px 0px 0px 0px;
  padding: 20px 0px 22px 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 49px 0px #0000004d;

  background: radial-gradient(
    119.49% 119.49% at 2.96% 5.05%,
    rgba(101, 101, 121, 0.8) 0%,
    rgba(40, 40, 57, 0.8) 100%
  );

  &:nth-child(1) {
    width: 139px;
    height: 133px;
  }

  &:nth-child(2) {
    width: 139px;
    height: 149px;
  }

  &:nth-child(3) {
    width: 139px;
    height: 190px;
    border: 1px solid;
    p {
      width: 100px;
    }
  }

  &:nth-child(4) {
    width: 139px;
    height: 230px;
    background: radial-gradient(
      119.49% 119.49% at 2.96% 5.05%,
      rgba(212, 107, 254, 0.8) 0%,
      rgba(112, 0, 255, 0.8) 100%
    );
    p {
      width: 90px;
    }
  }
  p {
    width: 90px;
  }
  h3 {
    font-size: 26px;
    font-weight: 600;
    line-height: 24.99px;
    color: white;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: white;
  }
`;

export const ImgNumbers = styled.img`
  position: absolute;
  width: 1310px;
  height: 1020px;
  top: 500px;
  left: -97px;
  z-index: -1;
`;

export const SecondContainer = styled.div`
  display: flex;
  width: 1200px;
  gap: 155px;
  justify-content: center;
  align-items: center;
  margin-top: 110px;
`;

export const ImgDashboardTwo = styled.img`
  width: 479px;
  height: 231px;
`;

export const ThirdContainer = styled.div`
  display: flex;
  margin-top: 237px;
  gap: 128px;
`;

export const ImgDashboardThird = styled.img`
  width: 479px;
  height: 205px;
`;
