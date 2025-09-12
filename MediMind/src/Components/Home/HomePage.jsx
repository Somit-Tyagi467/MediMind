import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar.jsx";
import Features from "./Features.jsx";
import PersonIcon from "@mui/icons-material/Person";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import HomePageConfig from "../../Config/HomePageConfig.jsx";
import { Link } from "react-router-dom";

// floating blob animation
const blobFloat = {
  animate: {
    y: [0, -12, 0],
    x: [0, 6, 0],
    transition: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  },
};

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 via-teal-400 to-emerald-200 text-gray-900 relative overflow-hidden flex flex-col">
      {/* Decorative blobs */}
      <motion.div
        className="absolute -left-24 -top-36 w-96 h-96 rounded-full bg-gradient-to-br from-emerald-300 to-teal-500 opacity-30 filter blur-3xl"
        variants={blobFloat}
        animate="animate"
        aria-hidden
      />
      <motion.div
        className="absolute right-8 top-24 w-72 h-72 rounded-full bg-gradient-to-br from-green-200 to-cyan-400 opacity-20 filter blur-3xl"
        variants={blobFloat}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
        aria-hidden
      />

      {/* Navbar */}
      <Navbar navItems={HomePageConfig.nav} />

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-6 pt-12 pb-20">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight whitespace-pre-line text-white drop-shadow-lg">
              {HomePageConfig.hero.title}
            </h1>
            <p className="mt-4 text-lg text-white/90 max-w-md">{HomePageConfig.hero.subtitle}</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 shadow-lg text-white"
            >
              {HomePageConfig.hero.ctaIcon}
              {/* <span className="font-semibold">{HomePageConfig.hero.cta}</span> */}
              <Link to="/chat" className="font-semibold">
                {HomePageConfig.hero.cta}
              </Link>
            </motion.button>
          </motion.div>

          {/* Robot Placeholder */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex justify-center md:justify-end">
            <motion.div whileHover={{ scale: 1.03 }} className="relative w-56 h-56 md:w-72 md:h-72 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-sm text-gray-700">[Robot Placeholder]</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Features */}
        <Features features={HomePageConfig.features} />

        {/* Chat Preview */}
        <section id="chat" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array(2).fill(0).map((_, idx) => (
            <motion.div
              key={idx}
              className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="space-y-4">
                {HomePageConfig.chatPreview.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: m.from === "bot" ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className={`flex items-center gap-2 max-w-[80%] ${
                      m.from === "bot" ? "ml-auto justify-end" : "mr-auto justify-start"
                    }`}
                  >
                    {m.from === "user" && <PersonIcon fontSize="small" className="text-gray-700" />}
                    <div
                      className={`${
                        m.from === "bot"
                          ? "inline-block bg-blue-500 text-white"
                          : "inline-block bg-white/60 text-gray-800"
                      } px-4 py-2 rounded-xl shadow-sm`}
                    >
                      {m.text}
                    </div>
                    {m.from === "bot" && <SmartToyIcon fontSize="small" className="text-gray-700" />}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white w-full mt-auto rounded-t-xl shadow-inner">
        <div className="max-w-6xl mx-auto border-t border-gray-200 pt-6 pb-8 flex items-center justify-between px-6">
          <div className="text-sm text-gray-700">© 2025 HealthBot</div>
          <div className="flex gap-6 text-sm text-gray-700">
            {HomePageConfig.footer.map((link) => (
              <a key={link.label} href={link.href} className="flex items-center gap-1 hover:underline">
                {link.icon} {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
