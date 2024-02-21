import styled from "styled-components";

export const Section = styled.section`
  margin-top: 200px;
  position: relative;
`;

export const PlanetsCon = styled.div`
  width: 1440px;
  height: 706px;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: -130px;
  flex-direction: column;
  z-index: 3;
`;
export const PlanetsConInfo = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  z-index: 3;
  h2 {
    color: #fff;
    font-size: 40px;
    font-weight: 600;
  }
  h3 {
    color: #fff;
    font-size: 40px;
    font-weight: 400;
  }
  span {
    color: #fff;
    text-align: right;
    -webkit-text-stroke-width: 2;
    -webkit-text-stroke-color: #fff;
    font-size: 40px;
    font-weight: 600;
  }
  p {
    margin-top: 5px;
    color: #b6b6dd;
    font-size: 16px;
    font-weight: 400;
    line-height: 114.1%;
  }
`;

export const BackStars = styled.img`
  position: absolute;
  width: 1439.001px;
  left: -130px;
  height: 706px;
`;

export const BlurConTop = styled.div`
  position: absolute;
  top: 0px;
  transform: rotate(180deg);
  left: -130px;
  width: 1439.001px;
  height: 161px;
  z-index: 1;
  background: linear-gradient(180deg, rgba(45, 45, 63, 0) 0%, #2b2b3d 100%);
`;
export const BlurConBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: -130px;
  width: 1439.001px;
  height: 161px;
  background: linear-gradient(180deg, rgba(45, 45, 63, 0) 0%, #2b2b3d 100%);
`;

export const StyleElipseDiv = styled.div`
  width: 3228px;
  height: 1047px;
  flex-shrink: 0;
  position: absolute;
  right: -1342px;
  border-radius: 601px;
  background: radial-gradient(
    ellipse at center,
    rgba(112, 0, 255, 0.4) -108%,
    rgba(112, 0, 255, 0.3) -7%,
    rgba(112, 0, 255, 0) 26%
  );
  z-index: -1;
`;

export const PlanetImgOne = styled.img`
  width: 300px;
  height: 255px;
  position: absolute;
  left: 100px;
  top: 0;
`;
export const PlanetImgTwo = styled.img`
  width: 300px;
  height: 300px;
  position: absolute;
  top: -25px;
  right: 369px;
`;

export const PlanetImgThree = styled.img`
  position: absolute;
  width: 271.88px;
  height: 324.53px;
  top: 70px;
  right: 130px;
`;

export const PlanetImgFour = styled.img`
  position: absolute;
  width: 310.68px;
  height: 250.61px;
  bottom: 20px;
  right: 310px;
`;

export const PlanetImgFive = styled.img`
  position: absolute;
  width: 450px;
  height: 370px;
  left: 120px;
  bottom: 50px;
`;

export const LineOne = styled.img`
  position: absolute;
  left: 403px;
  top: 148px;
`;

export const LineTwo = styled.img`
  position: absolute;
  top: 210px;
  right: 573px;
`;

export const LineThree = styled.img`
  position: absolute;
  right: 370px;
  top: 300px;
`;

export const LineFour = styled.img`
  position: absolute;
  bottom: 245px;
  right: 515px;
`;

export const LineFive = styled.img`
  position: absolute;
  left: 425px;
  top: 360px;
`;
