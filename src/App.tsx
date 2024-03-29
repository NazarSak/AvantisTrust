import { Header } from "./components/NoComponent/header/Header";
import { FirstSection } from "./components/firstSection/FirstSection";
import { SecondSection } from "./components/secondSection/SecondSection";
import { ThirdSection } from "./components/thirdSection/ThirdSection";
import { FourthSection } from "./components/fourthSection/FourthSection";
import { FifthSection } from "./components/fifthSection/FifthSection";
import { SixthSection } from "./components/sixthSection/SixthSection";
import { SeventhSection } from "./components/seventhSection/seventhSection";
import { Footer } from "./components/NoComponent/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Footer/>
    </div>
  );
}

export default App;
