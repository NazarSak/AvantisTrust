import { useState } from "react";
import PurpleLine from "../../assets/Svg/PurpleLine.svg";
import Table from "../../assets/Img/table.png";
import Checkermark from "../../assets/Svg/checkermark.svg";
import banner from "../../assets/Img/banner.png";
import MoneroCoin from "../../assets/Img/Monero.png";
import Bitcoin from "../../assets/Img/bitcoin.png";

import {
  Section,
  TitleCon,
  TableImg,
  Paragraph,
  InvestingCon,
  Containers,
  FirstDiv,
  SecondDiv,
  InfoDiv,
  ImgBanner,
  TextInBanner,
  ButCon,
  Line,
  LineTwo,
  ImgBitcoin,
  ImgMoneroCoin,
  Field,
  RangeCon,
  FirstNumber,
  SecondNumber,
  SubmitButton,
} from "./fifthSection.styled";

export const FifthSection = () => {
  const [count, setCount] = useState(100);
  const [inputValue, setInputValue] = useState(100);

  const handleInputChange = (event: any) => {
    const newValue = parseInt(event.target.value);
    setInputValue(newValue);
    setCount(newValue);
  };

  const handleKeyPress = (event: any) => {
    const newValue = event.target.value;
    if (event.key === "Enter") {
      if (newValue >= 100 && newValue <= 1000000) {
        setInputValue(newValue);
        setCount(newValue);
        event.target.value = "";
      } else {
        alert("Please enter a valid amount from 100 to 1 000 000 USD");
      }
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setInputValue(100);
    setCount(100);
  };

  const customInputStyle = {
    width: "453px",
    height: "3px",
    color: "ping",
    border: "1px solid pink",
    borderRadius: "5px",
    fontSize: "16px",
    marginTop: "12px",
  };

  return (
    <Section>
      <div>
        <TitleCon>
          <img src={PurpleLine} alt="PurpleLine" />
          <h2>Investment plans Avantis Trust</h2>
        </TitleCon>
        <TableImg src={Table} alt="Table" />
        <Paragraph>
          *Initial investment is returned at the end of the tariff period
        </Paragraph>
        <InvestingCon>
          <h2>Calculate your potential profit</h2>
          <Containers>
            <FirstDiv>
              <h3>Select period</h3>
              <ButCon>
                <button>50 days</button>
                <button>100 days</button>
                <button>365 days</button>
              </ButCon>
              <Line />
              <Field
                type="number"
                onKeyDown={handleKeyPress}
                placeholder="Enter investment amount"
              />
              <Paragraph>*Minimum investment amount is 100 USD</Paragraph>
              <RangeCon>
                <h3>Quick amount selection</h3>
                <h4>{count} USD</h4>
                <FirstNumber>100 USD</FirstNumber>
                <input
                  type="range"
                  min={100}
                  max={1000000}
                  value={inputValue}
                  onChange={handleInputChange}
                  style={customInputStyle}
                />

                <SecondNumber>1 000 000 USD</SecondNumber>
              </RangeCon>
              <SubmitButton onClick={handleSubmit}>Invest now</SubmitButton>
            </FirstDiv>
            <SecondDiv>
              <InfoDiv>
                <h3>Advance paynemt</h3>
                <LineTwo />
                <ul>
                  <li>
                    <img src={Checkermark} alt="Checkermark" />
                    <h4>
                      <span>15 $/</span> in a day
                    </h4>
                  </li>
                  <li>
                    <img src={Checkermark} alt="Checkermark" />
                    <h4>
                      <span>150 $/</span> in Week
                    </h4>
                  </li>
                  <li>
                    <img src={Checkermark} alt="Checkermark" />
                    <h4>
                      <span>1500 $/</span> per month
                    </h4>
                  </li>
                  <li>
                    <img src={Checkermark} alt="Checkermark" />
                    <h4>
                      <span>15000 $/</span>in year
                    </h4>
                  </li>
                </ul>
              </InfoDiv>
              <ImgBanner src={banner} alt="" />
              <TextInBanner>
                <p>Daily percentage</p>
                <span>1,2%</span>
                <ImgBitcoin src={Bitcoin} alt="Bitcoin" />
                <ImgMoneroCoin src={MoneroCoin} alt="MoneroCoin" />
              </TextInBanner>
            </SecondDiv>
          </Containers>
        </InvestingCon>
      </div>
    </Section>
  );
};

