import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header
        className="text-center py-12 text-white rounded-lg shadow-xl transition-transform transform hover:scale-105"
        style={{
          background:
            "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(0,0,0,1) 100%)",
        }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide font-sans">
          Welcome to the Medical Information Portal
        </h1>
        <p className="mt-6 text-xl sm:text-2xl font-medium font-serif">
          By Shivani Talekar
        </p>
        <p className="mt-2 text-lg sm:text-xl font-medium font-serif">
          4th year (33)
        </p>
        <p className="mt-2 text-lg sm:text-xl font-medium font-serif">
          Sub-faculty Therapy
        </p>
        <p className="mt-2 text-lg sm:text-xl font-medium font-serif">
          Teacher: Karabekova Nazgul Ma'am
        </p>
      </header>

      <main className="mt-6 space-y-8">
        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b-2 border-blue-300 pb-2">
              Sections
            </h2>
            <div className="space-y-4">
              <Link
                to="/gerd"
                className="block text-xl font-semibold text-blue-500 hover:text-blue-700 transition-colors"
              >
                GERD
              </Link>
              <Link
                to="/portal-hypertension"
                className="block text-xl font-semibold text-blue-500 hover:text-blue-700 transition-colors"
              >
                Portal Hypertension
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center mt-8 py-4 bg-gray-800 text-white rounded-md">
        <p>© 2024 Medical Information Portal</p>
      </footer>
    </div>
  );
};

export default Home;