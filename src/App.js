import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import FooterComp from "./components/common/FooterComp";
import HeaderComp from "./components/common/HeaderComp";
import Faq from "./components/Faq/Faq";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import NewsEvents from "./components/NewsEvetns/NewsEvents";

function App() {
  return (
    <div>
      <HeaderComp />
      <section className="container mt-5 pt-2" style={{ minHeight: "90vh" }}>
        <HeroBanner />
        <Banner />
        <Benefits />
        <About />
        <Faq />
        <NewsEvents />
      </section>
      <FooterComp />
    </div>
  );
}

export default App;
