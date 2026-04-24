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
  {
    title: "Mental Health Support",
    description:
      "We support individuals and families with mental health care, counseling, and emotional assistance, ensuring no one suffers in silence due to lack of resources or awareness.",
    points: [
      "Counseling & therapy support",
      "Mental health awareness programs",
      "Crisis & emotional support",
    ],
    icon: "🧠",
  },
  {
    title: "Gender Equality",
    description:
      "We promote equal rights, opportunities, and respect for all genders, empowering individuals to live with dignity and freedom while challenging discrimination and social barriers.",
    points: [
      "Women empowerment programs",
      "Equal opportunities & rights awareness",
      "Support against gender-based violence",
    ],
    icon: "⚖️",
  },
  {
    title: "Humanitarian Relief",
    description:
      "During natural disasters and crises, we act fast to provide relief, shelter, and essential supplies to affected communities.",
    points: [
      "Disaster relief",
      "Winter & shelter support",
      "Emergency response",
    ],
    icon: "🤝",
  },
];

const WhatWeDo = () => {
  return (
    <main className="w-full md:pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=80"
            alt="Community support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            What We Do
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            We serve humanity by addressing hunger, education, healthcare, and
            humanitarian needs with compassion and transparency.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 md:py-20 px-4 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
            Inspired by the values of Shaheed-e-Azam, our mission is to uplift
            marginalized communities by providing essential services that
            restore dignity, hope, and opportunity.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 md:py-20 px-4 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14">
            Our Core Work
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base mb-4">
                  {service.description}
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-14 md:py-20 px-4 md:px-16 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {[
            ["10K+", "Meals Served"],
            ["200+", "Children Educated"],
            ["250+", "Medical Cases Helped"],
            ["50+", "Relief Campaigns"],
          ].map(([num, label], i) => (
            <div key={i}>
              <h3 className="text-2xl md:text-4xl font-extrabold">{num}</h3>
              <p className="mt-2 text-sm md:text-base">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="py-14 md:py-20 px-4 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-10">
            How We Work
          </h2>

          <ol className="space-y-4 text-sm md:text-lg text-gray-700">
            <li>
              <strong>1.</strong> Identify Needs
            </li>
            <li>
              <strong>2.</strong> Mobilize Resources
            </li>
            <li>
              <strong>3.</strong> Deliver Support
            </li>
            <li>
              <strong>4.</strong> Measure Impact
            </li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 px-4 md:px-16 bg-gray-900 text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
          Be Part of the Change
        </h2>
        <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-8 max-w-xl mx-auto">
          Your support helps us continue serving humanity.
        </p>

        <Link
          to="/donation"
          className="inline-block bg-red-600 px-6 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-lg font-bold hover:bg-red-700 transition"
        >
          Donate Now
        </Link>
      </section>
    </main>
  );
};

export default WhatWeDo;
