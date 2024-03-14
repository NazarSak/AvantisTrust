import Ipad from "../../assets/Img/ipad.png";
import Bitoc from "../../assets/Img/Bitoc.png";
import Cryptocurrency from "../../assets/Img/cryptocurrency.png";
import Transaction from "../../assets/Img/transaction.png";
import VectorLine from "../../assets/Img/VectorLine.png";
import Transparency from "../../assets/Img/transparency.png";
import Risiks from "../../assets/Img/risiks.png";
import Benefits from "../../assets/Img/benefits.png";
import ElipseBack from "../../assets/Img/elipseBack.png";

import {
  VectorLineImg,
  SectionContainer,
  List,
  ListSecond,
  ConInfo,
  ConInfoSmall,
  IpadImg,
  SpecialLi,
  StyleElipseDiv,
  StyleElipseDivImg,
} from "./fourthSection.styled";

export const FourthSection = () => {
  return (
    <section>
      <SectionContainer>
        <VectorLineImg src={VectorLine} alt="VectorLine" />

        <List>
          <li>
            <img src={Bitoc} alt="Bitoc" />
            <ConInfo>
              <h2>The best traders and analysts</h2>
              <p>
                Avantis conducts a thorough selection of all employees; HR,
                together with our underwriting department, examines each
                candidate using more than 100 parameters.
              </p>
            </ConInfo>
          </li>
          <li>
            <img src={Transparency} alt="Transparency" />
            <ConInfoSmall>
              <h2>Transparencys</h2>
              <p>
                We provide an extensive documentary base where all legal aspects
                of interaction between Avantis and its partners are explained.
              </p>
            </ConInfoSmall>
          </li>
          <li>
            <img src={Benefits} alt="Benefits" />
            <ConInfo>
              <h2>Ease of user interface</h2>
              <p>
                We abandoned the platform. Due to the unnecessary need for our
                investors to directly participate in trading, the Avantis team
                created a
                <br />
                Telegram bot that will have all the necessary tools to control
                their finances.
              </p>
            </ConInfo>
          </li>
        </List>

        <IpadImg src={Ipad} alt="Ipad" />
        <StyleElipseDiv />
        <StyleElipseDivImg src={ElipseBack} alt="" />
        <ListSecond>
          <li>
            <img src={Transaction} alt="Transaction" />
            <ConInfoSmall>
              <h2>Low transaction costs</h2>
              <p>
                Decentralization of the process of exchanging crypto assets
                allows you to reduce commissions by eliminating intermediaries.
              </p>
            </ConInfoSmall>
          </li>
          <SpecialLi>
            <img src={Cryptocurrency} alt="Bitoc" />
            <ConInfoSmall>
              <h2>Fast financial transactions</h2>
              <p>
                Blockchain transactions are used almost instantly, and smart
                contract systems automate other processes.
              </p>
            </ConInfoSmall>
          </SpecialLi>
          <li>
            <img src={Risiks} alt="Bitoc" />
            <ConInfoSmall>
              <h2>Risk diversification</h2>
              <p>
                Avantis Trust позволяет вложить свои средства не в одну
                стратегию, а в несколько. Таким образом, распределение
                (диверсификация) дает возможность получать большую прибыль и
                снижает риск проседания капитала.
              </p>
            </ConInfoSmall>
          </li>
        </ListSecond>
      </SectionContainer>
    </section>
  );
};


