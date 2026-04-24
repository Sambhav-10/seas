import { Routes, Route } from "react-router-dom";
import "./App.css";

// import About from "./Components/About";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import WhatWeDo from "./Components/WhatWeDo";
import OurTeam from "./Components/OurTeam";
import Gallery from "./Components/Gallery";
import Donate from "./Components/Donate";
import OurPorgram from "./Components/OurProgram";
import AboutSection from "./Components/AboutSection";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutSection />} />
          <Route path="whatwedo" element={<WhatWeDo />} />
          <Route path="team" element={<OurTeam />} />
          <Route path="donation" element={<Donate />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="joinus" element={<OurPorgram />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
