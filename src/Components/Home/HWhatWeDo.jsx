import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Food Assistance",
    description:
      "We provide daily meals, ration packs, and emergency food supplies to families facing hunger.",
    points: [
      "Daily meal distribution",
      "Emergency food drives",
      "Support for needy families",
    ],
    icon: "🍲",
  },
  {
    title: "Education Support",
    description:
      "We support children with school fees, books, and learning resources.",
    points: [
      "School fee support",
      "Books & uniforms",
      "Help for underprivileged kids",
    ],
    icon: "📚",
  },
  {
    title: "Healthcare Services",
    description: "Providing medical help, medicines, and emergency support.",
    points: ["Medical aid", "Health camps", "Emergency care"],
    icon: "🏥",
  },
];

export default function WhatWeDoCards() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-yellow-500 font-semibold uppercase tracking-wider">
            What We Do
          </span>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition duration-500 border border-transparent hover:border-yellow-400"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                {service.description}
              </p>

              {/* Points */}
              <ul className="space-y-2 mb-6">
                {service.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-gray-600 text-sm flex items-center gap-2"
                  >
                    <span className="text-yellow-500">✔</span> {point}
                  </li>
                ))}
              </ul>

              {/* Hover CTA */}
              <Link
                to="/whatwedo"
                className="inline-block text-sm font-semibold text-yellow-600 group-hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-14">
          <Link
            to="/whatwedo"
            className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-lg transition duration-300"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
