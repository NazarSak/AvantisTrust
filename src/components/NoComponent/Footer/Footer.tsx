import Youtube from "../../../assets/Svg/youtube.svg";
import Instagram from "../../../assets/Svg/instagram.svg";
import Telegram from "../../../assets/Svg/telegram.svg";
import Facebook from "../../../assets/Svg/facebook.svg";

import {
  FooterCon,
  FirstDiv,
  List,
  Title,
  ListSmall,
  LastLi,
  ListSocial,
  Line,
  LastDiv,
} from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterCon>
      <FirstDiv>
        <List>
          <li>
            <Title>Products</Title>
            <ListSmall>
              <li>
                <p>Avantis Pump</p>
              </li>
              <li>
                <p>Avantis Signal</p>
              </li>
              <li>
                <p>Ambassador Program</p>
              </li>
              <li>
                <p>Avantis Education</p>
              </li>
            </ListSmall>
          </li>
          <li>
            <ListSmall>
              <li>
                <p>Risk Notice</p>
              </li>
              <li>
                <p>Terms of Use</p>
              </li>
              <li>
                <p>Privacy Policy</p>
              </li>
            </ListSmall>
          </li>
          <li>
            <ListSmall>
              <li>
                <p>AML Policy</p>
              </li>
              <li>
                <p>KYC</p>
              </li>
              <li>
                <p>Return policy</p>
              </li>
            </ListSmall>
          </li>
          <LastLi>
            <Title>Contacts</Title>
            <div>
              <p>avantisvealtn@gmail.com</p>
              <p>Cooperation avantiswealth@gmail.com</p>
            </div>
            <ListSocial>
              <li>
                <img src={Youtube} alt="Youtube" />
              </li>
              <li>
                <img src={Instagram} alt="Instagram" />
              </li>
              <li>
                <img src={Telegram} alt="Telegram" />
              </li>
              <li>
                <img src={Facebook} alt="Facebook" />
              </li>
            </ListSocial>
          </LastLi>
        </List>
      </FirstDiv>
      <Line />
      <LastDiv>
        <p>Copyright © 2022, Avantis</p>
        <p>All trademarks and copyrights belong to their respective owners.</p>
      </LastDiv>
    </FooterCon>
  );
};
