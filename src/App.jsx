import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductUi from "./components/ProductUi";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Showcase from "./components/Showcase";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductUi />
      <Showcase />
    </main>
  );
};

export default App;
