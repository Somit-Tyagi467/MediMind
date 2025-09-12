import React from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import HomePageConfig from "../../Config/HomePageConfig.jsx";

export default function Navbar() {
  return (
    <header className="w-full backdrop-blur-sm bg-white/70 sticky top-0 z-30 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
            <SmartToyIcon className="text-white" />
          </div>
          <span className="font-bold text-lg">HealthBot</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6 text-sm">
          {HomePageConfig.nav.map((item) => (
            <a
              key={item.label}
              href={item.link} // ✅ use the link property directly
              className="flex items-center gap-1 hover:underline"
            >
              {item.icon} {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
