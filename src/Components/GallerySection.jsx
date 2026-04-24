import React from "react";

import one from "../assets/images/gallery/1.jpg";
import two from "../assets/images/gallery/2.jpg";
import three from "../assets/images/gallery/3.jpg";
import four from "../assets/images/gallery/4.jpg";
import five from "../assets/images/gallery/5.jpg";
import six from "../assets/images/gallery/6.jpg";
import siven from "../assets/images/gallery/7.jpg";
import eight from "../assets/images/gallery/8.jpg";
import nine from "../assets/images/gallery/9.jpg";
import ten from "../assets/images/gallery/10.jpg";
import eleven from "../assets/images/gallery/11.jpg";
import twelve from "../assets/images/gallery/12.jpg";
import thirteen from "../assets/images/gallery/13.jpg";
import fourteen from "../assets/images/gallery/14.jpg";
import fifteen from "../assets/images/gallery/15.jpg";
import sixteen from "../assets/images/gallery/16.jpg";
import eighteen from "../assets/images/gallery/18.jpg";
import nineteen from "../assets/images/gallery/19.jpeg";
import twenty from "../assets/images/gallery/20.jpeg";
import tweentyone from "../assets/images/gallery/21.jpeg";
import tweentytwo from "../assets/images/gallery/22.jpeg";
const galleryData = [
  {
    id: 1,
    title: "Mountain View",
    image: one,
    size: "large",
  },
  {
    id: 2,
    title: "City Lights",
    image: two,
  },
  {
    id: 3,
    title: "Beach Sunset",
    image: three,
  },
  {
    id: 4,
    title: "Forest Path",
    image: four,
    size: "tall",
  },
  {
    id: 5,
    title: "Desert",
    image: five,
  },
  {
    id: 6,
    title: "Snow Mountains",
    image: six,
  },
  {
    id: 7,
    title: "Snow Mountains",
    image: siven,
  },
  { id: 8, image: eight },
  { id: 9, image: nine },
  { id: 10, image: ten },
  { id: 11, image: eleven },
  { id: 12, image: twelve },
  { id: 13, image: thirteen },
  { id: 14, image: fourteen },
  { id: 15, image: fifteen },
  { id: 16, image: sixteen },
   { id: 18, image: eighteen },
  { id: 19, image: nineteen },
  { id: 20, image: twenty },
  { id: 21, image: tweentyone },
  { id: 22, image: tweentytwo },
 
];

const GallerySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Our Gallery
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            A creative mix of big and small moments
          </p>
        </div>

        {/* Mixed Pattern Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[220px]">
          {galleryData?.map((item) => {
            let sizeClasses = "";

            if (item?.size === "large") {
              sizeClasses = "col-span-2 row-span-2";
            } else if (item.size === "tall") {
              sizeClasses = "row-span-2";
            }

            return (
              <div
                key={item?.id}
                className={`group relative overflow-hidden rounded-3xl shadow-lg ${sizeClasses}`}
              >
                {/* Image */}
                <img
                  src={`${item?.image}?auto=format&fit=crop&w=1200&q=80`}
                  alt={item?.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                  <h3 className="text-white text-xl font-semibold">
                    {item?.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
