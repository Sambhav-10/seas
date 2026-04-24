import React from "react";

const HeroSection = () => {
  return (
    <div className="pt-20 relative">
      
      <div
        className="relative w-full h-[75vh] md:h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        
        {/* Gradient Overlay (Better than flat black) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

        {/* Content */}
        <div className="relative text-center px-6 max-w-3xl">
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Empowering <span className="text-yellow-400">Communities</span>
          </h1>

          <p className="mt-6 text-sm sm:text-lg md:text-xl text-gray-200">
            Your support helps us build a better tomorrow for those who need it most.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            
            {/* Donate Button */}
            <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-lg transition duration-300">
              Donate Now
            </button>

            {/* Join Button */}
            <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black font-semibold rounded-full transition duration-300 backdrop-blur-sm">
              Join Us
            </button>

          </div>

        </div>
      </div>

    </div>
  );
};

export default HeroSection;