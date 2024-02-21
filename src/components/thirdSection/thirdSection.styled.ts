import styled from "styled-components";

export const Section = styled.section`
  width: 1285px;
  height: 744px;
  margin-top: 50px;
  position: relative;
`;

export const ContainerTitle = styled.div`
  display: flex;
  gap: 29px;
  h2 {
    font-size: 70px;
    font-weight: 100;
    line-height: 75px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    width: 710px;
  }
  p {
    width: 444px;
    font-family: "Titillium Web", "RUS by Daymarius", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    margin-left: 55px;
    text-align: left;
    color: #b6b6dd;
  }
`;
export const StyleElipseDiv = styled.div`
  width: 1228px;
  height: 1047px;
  flex-shrink: 0;
  position: absolute;
  top: -404px;
  right: 729px;
  border-radius: 601px;
  background: radial-gradient(
    ellipse at center,
    rgba(112, 0, 255, 0.4) -108%,
    rgba(112, 0, 255, 0.3) -7%,
    rgba(112, 0, 255, 0) 26%
  );
  z-index: 1;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 584px;
  column-gap: 77px;
  row-gap: 20px;
  height: 534px;
  li {
    width: 225px;
    height: 192px;
  }
`;

export const SpecialLiImg = styled.li`
  margin-top: 64px;
`;

export const ContainerInfo = styled.div`
  width: 280px;
  height: 255px;
  border: 1px solid;
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  border-radius: 18px;
  background: linear-gradient(
      131.77deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(255, 255, 255, 0.42) 103.58%
    ),
    radial-gradient(
      119.49% 119.49% at 2.96% 5.05%,
      rgba(101, 101, 121, 0.8) 0%,
      rgba(40, 40, 57, 0.8) 100%
    );
  box-shadow: 0px 4px 49px 0px #0000004d;

  border: 1px solid;

  border-image-source: linear-gradient(
    131.77deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 0.42) 103.58%
  );

  h2 {
    font-size: 24px;
    font-weight: 400;
    line-height: 37px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    width: fit-content;
  }
  h3 {
    color: #d46bfe;
    margin-top: 25px;
  }
  span {
    font-family: Titillium Web;
    font-size: 68px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: left;
    color: #b6b6dd;
    width: 221px;
  }
`;

export const ContainerInfoSpecial = styled.div`
  width: 280px;
  height: 191px;
  margin-top: 64px;
  border: 1px solid;
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  border-radius: 18px;
  background: linear-gradient(
      131.77deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(255, 255, 255, 0.42) 103.58%
    ),
    radial-gradient(
      119.49% 119.49% at 2.96% 5.05%,
      rgba(101, 101, 121, 0.8) 0%,
      rgba(40, 40, 57, 0.8) 100%
    );
  box-shadow: 0px 4px 49px 0px #0000004d;

  border: 1px solid;

  border-image-source: linear-gradient(
    131.77deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 0.42) 103.58%
  );

  h2 {
    font-size: 24px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    width: fit-content;
  }
  span {
    font-family: Titillium Web;
    font-size: 68px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: left;
    color: #b6b6dd;
    width: 221px;
  }
`;

export const SpecialSpanWhite = styled.span`
  color: white;
`;

export const SpecialSpanPing = styled.span`
  color: #d46bfe;
`;

export const ContainerInfoInside = styled.div`
  width: 240px;
  height: 125px;
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #262637;
  box-shadow: 2px 2px 4px 0px #00000026 inset;
  box-shadow: -2px -2px 4px 0px #ffffff26 inset;
  border-radius: 14px;
`;

export const ContainerInfoInsideSpecial = styled.div`
  width: 240px;
  height: 108px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #262637;
  box-shadow: 2px 2px 4px 0px #00000026 inset;
  box-shadow: -2px -2px 4px 0px #ffffff26 inset;
  border-radius: 14px;
`;

export const ArrowTopImg = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const ScheduleBackImg = styled.img`
  position: absolute;
  width: 930px;
  top: 143px;
  right: 0;
  height: 547px;
`;

export const BackMonero = styled.img`
  position: absolute;
  top: 530px;
  right: 420px;
  width: 150px;
  height: 150px;
  z-index: 1;
`;

export const BackBitoc = styled.img`
  position: absolute;
  width: 300px;
  height: 300px;
  top: 320px;
  z-index: 1;
  right: -160px;
`;

export const BackLightCoin = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 165px;
  right: 370px;
  z-index: 1;
`;
