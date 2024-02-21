import { Header } from "./components/NoComponent/header/Header";
import { FirstSection } from "./components/firstSection/firstSection";
import { SecondSection } from "./components/secondSection/SecondSection";
import ThirdSection from "./components/thirdSection/thirdSection";
import FourthSection from "./components/fourthSection/FourthSection";

import "./App.css";
import FifthSection from "./components/fifthSection/FifthSection";

function App() {
  return (
    <div>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </div>
  );
}

export default App;
