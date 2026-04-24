import React from "react";
import HeroSection from "./Home/HeroSection";
import WhatWeDo from "./WhatWeDo";
import Donate from "./Donate";
import Slider from "./Slider";
import AboutSection from "./AboutSection";
import TrustBar from "./TrustBar";
import { Link } from "react-router-dom";
import HomeGallery from "./HomeGallery";

import WhatWeDoCards from "./Home/HWhatWeDo";
import Testimonials from "./Home/Testimonials";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <HeroSection />
        {/* <Slider /> */}
        <section className="my-10 py-20 px-6 md:px-16 bg-brand-orange text-white bg-gray-950">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-extrabold">10K+</h3>
              <p className="mt-2">Meals Served</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold">200+</h3>
              <p className="mt-2">Children Educated</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold">250+</h3>
              <p className="mt-2">Medical Cases Helped</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold">50+</h3>
              <p className="mt-2">Relief Campaigns</p>
            </div>
          </div>
        </section>
        {/* /* what we do section intro */}
        <WhatWeDoCards />
        <AboutSection />
        <HomeGallery />
        <Testimonials />

        <section className="my-10 py-14 md:py-20 px-4 md:px-16 bg-gray-900 text-white text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Be Part of the Change
          </h2>
          <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-8 max-w-xl mx-auto">
            Your support helps us continue serving humanity.
          </p>

          <a
            href="#donate"
            className="inline-block bg-red-600 px-6 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-lg font-bold hover:bg-red-700 transition"
          >
            Donate Now
          </a>
        </section>
      </div>
    </>
  );
};

export default Home;
