import styled from "styled-components";

export const HeaderCon = styled.header`
  display: flex;
  width: 1180px;
  justify-content: center;
  padding-top: 20px;
  margin: 0 auto;
  nav {
    display: flex;
    margin: 0 49px 0 130px;
  }
`;

export const LogoImg = styled.img`
  width: 70px;
  height: 40px;
`;

export const List = styled.ul`
  display: flex;
  gap: 40px;
  a {
    color: #b6b6dd;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
  }
  p {
    color: #d46bfe;
    font-family: "Titillium Web", sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const ContainerSocial = styled.div`
  display: flex;
  gap: 26px;
`;

export const StyleElipse = styled.img`
  width: 2004px;
  top: -280px;
  left: -100px;
  border-radius: 601px;
  position: absolute;
  filter: blur(0px);
`;

export const StyleElipseDiv = styled.div`
  width: 2178px;
  height: 1047px;
  flex-shrink: 0;
  position: absolute;
  top: -474px;
  left: -270px;
  border-radius: 601px;
  background: radial-gradient(
    ellipse at center,
    rgba(112, 0, 255, 0.4) -108%,
    rgba(112, 0, 255, 0.3) -7%,
    rgba(112, 0, 255, 0) 26%
  );
  z-index: -1;
`;
