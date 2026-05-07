import React from "react";
import { Copy } from "lucide-react";

const DonationSection = () => {
  // const upiId = "yourname@upi";

  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(upiId);
  //   alert("UPI ID copied!");
  // };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <div>nothing</div>
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Support Our Mission 💚
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Your contribution helps us create real impact. Every donation, small
            or big, makes a meaningful difference.
          </p>
        </div>

        {/* Main Card */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-xl p-10">
          {/* QR Code Section */}
          {/* <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
              <img
                src="/qr-code.png"  // 👉 Replace with your QR image
                alt="QR Code"
                className="w-56 h-56 object-contain"
              />
            </div>

            <p className="mt-6 text-gray-500">
              Scan this QR code to donate instantly via UPI
            </p>
          </div> */}

          {/* Details Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Donation Details
            </h3>

            {/* UPI */}
            {/* <div className="bg-green-50 p-4 rounded-xl mb-4 flex justify-between items-center">
              <span className="font-medium text-gray-700">
                UPI ID: {upiId}
              </span>
              <button
                onClick={copyToClipboard}
                className="text-green-600 hover:text-green-800"
              >
                <Copy size={18} />
              </button>
            </div> */}

            {/* Bank Details */}
            <div className="bg-gray-50 p-4 rounded-xl space-y-2">
              <p>
                <strong>Account Name:</strong> SHAHEED E AZAM SPORTS FOUNDATION
              </p>
              <p>
                <strong>Bank:</strong> Axis Bank of India
              </p>
              <p>
                <strong>Account No:</strong> 925010013625060
              </p>
              <p>
                <strong>IFSC:</strong>UTIB0003114{" "}
              </p>
            </div>

            {/* CTA */}
            <button className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition">
              Donate Now
            </button>
          </div>
        </div>

        {/* Impact Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg p-8 rounded-2xl">
            <h4 className="text-3xl font-bold text-green-600">₹500</h4>
            <p className="mt-3 text-gray-600">
              Helps provide educational materials for one student.
            </p>
          </div>

          <div className="bg-white shadow-lg p-8 rounded-2xl">
            <h4 className="text-3xl font-bold text-green-600">₹1000</h4>
            <p className="mt-3 text-gray-600">
              Supports medical aid for those in need.
            </p>
          </div>

          <div className="bg-white shadow-lg p-8 rounded-2xl">
            <h4 className="text-3xl font-bold text-green-600">₹5000</h4>
            <p className="mt-3 text-gray-600">
              Funds a complete community support initiative.
            </p>
          </div>
        </div>

        {/* Trust Note */}
        <p className="text-center text-gray-500 mt-12 text-sm">
          100% of your donation goes directly towards the cause. Transparent
          usage reports are shared monthly.
        </p>
      </div>
    </section>
  );
};

export default DonationSection;
