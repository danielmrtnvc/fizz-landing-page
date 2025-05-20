import "./App.css";
import { useState, useEffect } from "react";

import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { Ingredients } from "./components/ingredients";
import { Banner } from "./components/banner";
import { Mission } from "./components/mission";
import { Contact } from "./components/contact";
import { Nature } from "./components/nature";
import { Footer } from "./components/footer";
import { Analytics } from "@vercel/analytics/react"



import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Ingredients data={landingPageData.Ingredients} />

      <Banner data={landingPageData.Banner} />
      <Mission data={landingPageData.Mission} />

      <Contact data={landingPageData.Contact} />
      <Nature data={landingPageData.Nature} />
      <Footer data={landingPageData.Footer} />
      <Analytics />
    </div>
  );
};

export default App;
