import React from "react";

import Jassi from "../assets/images/TeamTamp/founder_img.jpg";
import Shardha_suman from "../assets/images/TeamTamp/shradha_suman_psychologists.jpg";
import vijendra from "../assets/images/TeamTamp/vijendra.jpg";
import Love_kumar from "../assets/images/TeamTamp/love_kumar.jpg";
import Garima from "../assets/images/TeamTamp/garimajain.jpg";
import Sanjana from "../assets/images/TeamTamp/sanjana.jpg";
import Hemant from "../assets/images/TeamTamp/hemant.jpg";
import Nishant from "../assets/images/TeamTamp/nishant.jpg";
import Prasant from "../assets/images/TeamTamp/prasant.jpg";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "JASSJYOT SINGH (Monu)",
    role: "Founder OF Shaheed-e-Azam SPOORT FOUNDATION",
    image: Jassi,
    // bio: "Visionary leader committed to serving humanity and upholding the values of Shaheed-e-Azam.",
  },
  {
    name: "Vijendra Mewada",
    role: "Treasurer of shaheed-e-azam sports foundation",
    image: vijendra,
    // bio: "Experienced financial manager dedicated to transparency and accountability.",
  },
  {
    name: "Lov Kumar",
    role: "Vise President of shaheed-e-azam sports foundation",
    image: Love_kumar,
    // bio: "Dedicated to empowering children through education and long-term support.",
  },
  {
    name: "Shardha Suman",
    role: "Manages the Mental Health Program at our NGO",
    image: Shardha_suman,
    // bio: "leading initiatives that promote emotional well-being, awareness",
  },
  {
    name: "Garima Jain",
    role: "Yoga instructor ",
    image: Garima,
    // bio: "Health awareness",
  },
  {
    name: "Dr.Sanjana Singh",
    role: "Advisor Health program ",
    image: Sanjana,
    // bio: "Health awareness",
  },
  {
    name: "Hemant Kumar",
    role: "Sporots Program Advior",
    image: Hemant,
    bio: "",
  },
  {
    name: "Nishant Upadhyay",
    role: "Social Welfare  Program coordinator",
    image: Nishant,
    bio: "",
  },
  {
    name: "Prashant Kushwah",
    role: "Social Welfare  Program Advisor",
    image: Prasant,
    bio: "",
  },
];

const OurTeam = () => {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80"
            alt="Our team working together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            Our Team
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            A dedicated group of individuals united by compassion, integrity,
            and service.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-20 px-4 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            People Behind the Mission
          </h2>
          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            Our team consists of passionate professionals, volunteers, and
            community leaders.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 md:py-20 px-4 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-14">
            Leadership & Core Team
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 sm:h-64 object-cover"
                />

                <div className="p-4 md:p-6 text-center">
                  <h3 className="text-lg md:text-xl font-bold mb-1">
                    {member.name}
                  </h3>

                  <p className=" font-semibold text-sm mb-2">
                    {member.role}
                  </p>

                  {member.bio && (
                    <p className="text-gray-600 text-xs md:text-sm">
                      {member.bio}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 px-4 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 md:gap-10 text-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Integrity</h3>
            <p className="text-gray-600 text-sm md:text-base">
              We maintain transparency and honesty in all our actions.
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Compassion</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Every decision we make is guided by empathy and care.
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Commitment</h3>
            <p className="text-gray-600 text-sm md:text-base">
              We are dedicated to meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4 md:px-16 bg-gray-900 text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
          Join Our Mission
        </h2>

        <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-8 max-w-xl mx-auto">
          Become a volunteer or supporter and help us serve humanity.
        </p>

        <Link
          to="/joinus"
          className="inline-block bg-red-600 px-6 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-lg font-bold hover:bg-red-700 transition"
        >
          Get Involved
        </Link>
      </section>
    </main>
  );
};

export default OurTeam;
