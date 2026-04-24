import React from "react";

const TrustBar = () => {
  return (
    <div className="bg-gray-100 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-center gap-4">
          {/* Item 1 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">10,000+</h2>
            <p className="text-gray-600 text-sm">People Supported</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-8 w-px bg-gray-300"></div>

          {/* Item 2 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">50+</h2>
            <p className="text-gray-600 text-sm">Campaigns Completed</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-8 w-px bg-gray-300"></div>

          {/* Item 3 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">Since 2018</h2>
            <p className="text-gray-600 text-sm">Serving Humanity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
