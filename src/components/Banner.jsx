import React from "react";
import { Tickets, Info, Star } from "lucide-react";
import heroImage from "../assets/netflix.jpg"; // ✅ import the image

const Banner = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background IMAGE */}
      <div
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      ...


      {/* Dark Overlay - Dark Blue + Cyan theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-20">
        <div className="max-w-2xl text-white">

          <h1 className="text-4xl md:text-6xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent font-bold drop-shadow-2xl">
            Ocean's Legacy
          </h1>

          <p className="text-gray-200 text-base md:text-lg mb-6">
            An epic adventure beneath the waves. Discover mysteries of the deep
            ocean in this breathtaking cinematic experience.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={18} fill="#06b6d4" stroke="#06b6d4" className="text-cyan-400 drop-shadow-sm" />
            ))}
            <span className="text-sm text-gray-200">4.8 / 5</span>
          </div>

          {/* Genre */}
          <p className="text-sm text-gray-300 mb-8">
            Adventure • Fantasy • Drama
          </p>

          {/* Buttons - Dark Blue + Cyan theme */}
          <div className="flex gap-4">
            <a
              href="/movies"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <Tickets size={18} />
              Book Movies
            </a>

            <a
              href="/contact"
              className="flex items-center gap-2 border border-cyan-400/50 hover:border-cyan-400 bg-black/20 backdrop-blur-sm hover:bg-cyan-500/10 text-cyan-200 hover:text-cyan-100 px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              <Info size={18} />
              More Info
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;