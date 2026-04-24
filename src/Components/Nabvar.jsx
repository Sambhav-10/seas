import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="z-50 fixed w-full bg-[#F6F6F6] border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="" className="w-12 md:w-20 mr-2" />

          <div className="leading-none">
            <p className="text-lg md:text-3xl font-serif text-black">
              Shaheed-E-Azam
            </p>
            <p className="text-[10px] md:text-xs tracking-widest text-sky-600 text-center">
              SPORTS FOUNDATION
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <Link
            to="/whatwedo"
            className="font-bold hover:border-b-2 hover:border-gray-500 px-2 py-1 transition"
          >
            What We Do
          </Link>
          <Link
            to="/team"
            className="font-bold hover:border-b-2 hover:border-gray-500 px-2 py-1 transition"
          >
            Our Team
          </Link>
          <Link
            to="/joinus"
            className="font-bold hover:border-b-2 hover:border-gray-500 px-2 py-1 transition"
          >
            Join Us
          </Link>
          <Link
            to="/donation"
            className="font-bold hover:border-b-2 hover:border-gray-500 px-2 py-1 transition"
          >
            Donation
          </Link>
          <Link
            to="/gallery"
            className="font-bold hover:border-b-2 hover:border-gray-500 px-2 py-1 transition"
          >
            Gallery
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col px-6 pb-4 space-y-3 font-medium text-gray-900 bg-[#F6F6F6]">
          <Link onClick={() => setOpen(false)} to="/whatwedo" className="hover:text-sky-600">
            What We Do
          </Link>
          <Link onClick={() => setOpen(false)} to="/team" className="hover:text-sky-600">
            Our Team
          </Link>
          <Link onClick={() => setOpen(false)} to="/joinus" className="hover:text-sky-600">
            Join Us
          </Link>
          <Link onClick={() => setOpen(false)} to="/donation" className="hover:text-sky-600">
            Donation
          </Link>
          <Link onClick={() => setOpen(false)} to="/gallery" className="hover:text-sky-600">
            Gallery
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;