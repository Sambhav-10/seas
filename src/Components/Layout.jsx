import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Nabvar";
import Information from "./Information";


export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      {/* <Information/> */}
      <header className="shadow-sm">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
