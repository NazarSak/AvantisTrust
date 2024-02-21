import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 265px;
  position: relative;
`;

export const StyleElipseDiv = styled.div`
  width: 1228px;
  height: 1047px;
  flex-shrink: 0;
  position: absolute;
  top: 30px;
  left: -32px;
  border-radius: 601px;
  background: radial-gradient(
    ellipse at center,
    rgba(112, 0, 255, 0.4) -108%,
    rgba(112, 0, 255, 0.3) -7%,
    rgba(112, 0, 255, 0) 26%
  );
  z-index: 1;
`;

export const StyleElipseDivImg = styled.img`
  position: absolute;
  top: -382px;
  left: -425px;
`;

export const VectorLineImg = styled.img`
  position: absolute;
  width: 1275px;
  height: 465px;
  z-index: -1;
`;

export const List = styled.ul`
  width: 500px;
  height: 593px;
  margin-left: -55px;

  li {
    display: flex;
    align-items: center;
  }
  h2 {
    font-size: 20px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #b6b6dd;
  }
  img {
    width: 200px;
    height: 200px;
  }
`;

export const ListSecond = styled.ul`
  width: 500px;
  height: 593px;
  margin-left: -55px;
  z-index: 1;
  li {
    display: flex;
    align-items: center;
  }
  h2 {
    font-size: 20px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #b6b6dd;
  }
  img {
    width: 200px;
    height: 200px;
  }
`;

export const ConInfo = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  margin-left: -10px;
`;

export const SpecialLi = styled.li`
  margin-left: 49px;
`;

export const ConInfoSmall = styled.div`
  display: flex;
  width: 270px;
  flex-direction: column;
  margin-left: -10px;
`;

export const IpadImg = styled.img`
  width: 520px;
  height: 519px;
`;
