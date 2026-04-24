import Five from "../assets/images/slider/5.jpg";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="relative bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px]">
          <img
            src={Five}
            alt="SEAS Foundation Story"
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />

          {/* Optional overlay for depth */}
          <div className="absolute inset-0 rounded-2xl bg-black/10"></div>
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          
          <span className="text-yellow-500 font-semibold uppercase tracking-wide">
            About Us
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
            Our Story of Impact
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            SEAS Foundation began with a single question —{" "}
            <strong>what if help reached people before hope was lost?</strong>
            What started as a small act of kindness soon became a mission to
            stand beside families facing hunger, illness, and hardship.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            From feeding empty stomachs to supporting children’s education and
            responding during crises, our journey has always been guided by
            compassion, dignity, and trust.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Today, SEAS Foundation continues to serve humanity with transparency
            and heart — believing that even the smallest help can change a life.
          </p>

          {/* Button */}
          <Link
            to="/about"
            className="inline-block px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-md transition duration-300"
          >
            Learn More
          </Link>

        </div>
      </div>
    </section>
  );
}