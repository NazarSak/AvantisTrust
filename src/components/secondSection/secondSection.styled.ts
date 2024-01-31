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
export const PlanetImgTwo = styled.img``;

export const PlanetImgThree = styled.img``;

export const PlanetImgFour = styled.img``;

export const PlanetImgFive = styled.img``;

export const LineOne = styled.img`
  position: absolute;
  left: 403px;
  top: 148px;
`;

export const LineTwo = styled.img``;

export const LineThree = styled.img``;

export const LineFour = styled.img``;

export const LineFive = styled.img``;
