import React from "react";
import { Link } from "react-router-dom";

import one from "../assets/images/gallery/1.jpg";
import two from "../assets/images/gallery/2.jpg";
import three from "../assets/images/gallery/3.jpg";
import four from "../assets/images/gallery/4.jpg";

const galleryData = [
  { id: 1, title: "Mountain View", image: one, size: "large" },
  { id: 2, title: "City Lights", image: two },
  { id: 3, title: "Beach Sunset", image: three },
  { id: 4, title: "Forest Path", image: four, size: "tall" },
];

const HomeGallery = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-yellow-500 font-semibold uppercase tracking-wider">
            Gallery
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
            Moments of Impact
          </h2>

          <p className="text-gray-500 mt-4 text-base md:text-lg max-w-2xl mx-auto">
            A glimpse of our journey, capturing real stories and meaningful change.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 auto-rows-[180px] md:auto-rows-[220px]">
          {galleryData.map((item) => {
            let sizeClasses = "";

            if (item.size === "large") {
              sizeClasses = "col-span-2 row-span-2";
            } else if (item.size === "tall") {
              sizeClasses = "row-span-2";
            }

            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-500 ${sizeClasses}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                  <h3 className="text-white text-lg md:text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>

                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition"></div>
              </div>
            );
          })}
        </div>

        {/* Button (Centered + Proper spacing) */}
        <div className="flex justify-center mt-14">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-lg transition duration-300"
          >
            View Full Gallery
            <span className="text-lg">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HomeGallery;