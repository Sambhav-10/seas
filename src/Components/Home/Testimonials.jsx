import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "This foundation changed my life and gave my family hope when we needed it most.",
  },
  {
    name: "Priya Verma",
    text: "Their support helped my child continue education without any interruption.",
  },
  {
    name: "Amit Patel",
    text: "I never imagined strangers could care this much. Truly inspiring work.",
  },
  {
    name: "Sneha Iyer",
    text: "From healthcare to food support, they stood by us in every situation.",
  },
  {
    name: "Vikram Singh",
    text: "A transparent and trustworthy organization making real impact.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    const container = scrollRef.current;

    const interval = setInterval(() => {
      if (container) {
        const cardWidth = container.offsetWidth * 0.85; // 85% width → 15% peek
        container.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });

        // loop back
        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth - 10
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-yellow-400 font-semibold uppercase tracking-wider">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Voices of Change
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Real stories from people whose lives have been touched by our efforts.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 w-[85%] md:w-[45%] bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition duration-500"
            >
              <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
                “{item.text}”
              </p>

              <h3 className="text-yellow-400 font-semibold text-lg">
                – {item.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}