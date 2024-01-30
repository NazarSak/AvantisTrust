import Logo from "../../assets/Img/logo.png";
import PlayMarket from "../../assets/Img/playMarket.png";
import AppleMarket from "../../assets/Img/Apple.png";
import {
  HeaderCon,
  LogoImg,
  List,
  ContainerSocial,
  StyleElipseDiv,
} from "./header.styled";

export const Header = () => {
  return (
    <HeaderCon>
      <LogoImg src={Logo} alt="Logo" />
      <nav>
        <List>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Advantages</a>
          </li>
          <StyleElipseDiv />
          <li>
            <a href="">Tariffs and calculator</a>
          </li>
          <li>
            <a href="">Functional</a>
          </li>
          <li>
            <a href="">Referral program</a>
          </li>
          <li>
            <p>EN</p>
          </li>
        </List>
      </nav>
      <ContainerSocial>
        <img src={PlayMarket} width="44" height="44" alt="PlayMarket" />
        <img src={AppleMarket} width="44" height="44" alt="AppleMarket" />
      </ContainerSocial>
    </HeaderCon>
  );
};
