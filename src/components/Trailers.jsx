import React, { useState, useRef, useEffect } from "react";
import { trailersData } from "./trailerdata";
import {
  Play,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Clock,
  Calendar,
  X,
} from "lucide-react";
import { trailersStyles, trailersCSS } from "../assets/dummyStyles";

const Trailers = () => {
  const [featuredTrailer, setFeaturedTrailer] = useState(trailersData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted] = useState(false);

  const carouselRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 250, behavior: "smooth" });
  };

  const selectTrailer = (trailer) => {
    setFeaturedTrailer(trailer);
    setIsPlaying(false);
  };

  const getEmbedUrl = (url) => {
    try {
      const u = new URL(url);
      if (u.hostname.includes("youtube.com"))
        return `https://www.youtube.com/embed/${u.searchParams.get("v")}`;
      if (u.hostname === "youtu.be")
        return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
      return url;
    } catch {
      return url;
    }
  };

  return (
    <div className={trailersStyles.container}>
      <main className={trailersStyles.main}>
        <div className={trailersStyles.layout}>
          {/* LEFT SIDE */}
          <div className={trailersStyles.leftSide}>
            <div className={trailersStyles.leftCard}>
              <h2 className={trailersStyles.leftTitle}>
                <Clapperboard className={trailersStyles.titleIcon} />
                Latest Trailers
              </h2>

              <div className={trailersStyles.carouselControls}>
                <div className={trailersStyles.controlButtons}>
                  <button onClick={scrollLeft} className={trailersStyles.controlButton}>
                    <ChevronLeft size={18} />
                  </button>
                  <button onClick={scrollRight} className={trailersStyles.controlButton}>
                    <ChevronRight size={18} />
                  </button>
                </div>
                <span className={trailersStyles.trailerCount}>
                  {trailersData.length} trailers
                </span>
              </div>

              <div ref={carouselRef} className={trailersStyles.carousel}>
                {trailersData.map((trailer) => (
                  <div
                    key={trailer.id}
                    data-id={trailer.id}
                    onClick={() => selectTrailer(trailer)}
                    className={`${trailersStyles.carouselItem.base} ${
                      featuredTrailer.id === trailer.id
                        ? trailersStyles.carouselItem.active
                        : trailersStyles.carouselItem.inactive
                    }`}
                  >
                    <img
                      src={trailer.thumbnail}
                      alt={trailer.title}
                      className={trailersStyles.carouselImage}
                    />
                    <div className={trailersStyles.carouselOverlay}>
                      <h3 className={trailersStyles.carouselTitle}>{trailer.title}</h3>
                      <p className={trailersStyles.carouselGenre}>{trailer.genre}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* TRENDING */}
              <div className={trailersStyles.trendingSection}>
                <h3 className={trailersStyles.trendingTitle}>Trending</h3>

                {trailersData.slice(0, 3).map((trailer) => (
                  <div
                    key={trailer.id}
                    className={trailersStyles.trendingItem}
                    onClick={() => selectTrailer(trailer)}
                  >
                    <div className={trailersStyles.trendingImage}>
                      <img
                        src={trailer.thumbnail}
                        alt={trailer.title}
                        className={trailersStyles.trendingImageSrc}
                      />
                    </div>

                    <div className={trailersStyles.trendingContent}>
                      <h4 className={trailersStyles.trendingItemTitle}>
                        {trailer.title}
                      </h4>
                      <p className={trailersStyles.trendingItemGenre}>
                        {trailer.genre}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={trailersStyles.rightSide}>
            <div className={trailersStyles.rightCard}>
              <div className={trailersStyles.videoContainer}>
                {isPlaying ? (
                  <div className={trailersStyles.videoWrapper}>
                    <iframe
                      className={trailersStyles.videoIframe}
                      src={`${getEmbedUrl(featuredTrailer.videoUrl)}?autoplay=1&mute=${isMuted ? 1 : 0}`}
                      title={featuredTrailer.title}
                      allowFullScreen
                    />
                    <div className={trailersStyles.closeButton}>
                      <button
                        onClick={() => setIsPlaying(false)}
                        className={trailersStyles.closeButtonInner}
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={trailersStyles.thumbnailContainer}>
                    <img
                      src={featuredTrailer.thumbnail}
                      alt={featuredTrailer.title}
                      className={trailersStyles.thumbnailImage}
                    />
                    <div className={trailersStyles.playButtonContainer}>
                      <button
                        onClick={() => setIsPlaying(true)}
                        className={trailersStyles.playButton}
                      >
                        <Play size={32} fill="white" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className={trailersStyles.trailerInfo}>
                <div className={trailersStyles.infoHeader}>
                  <h2 className={trailersStyles.trailerTitle}>
                    {featuredTrailer.title}
                  </h2>

                  <div className={trailersStyles.trailerMeta}>
                    <span className={trailersStyles.metaItem}>
                      <Clock size={16} className={trailersStyles.metaIcon} />
                      {featuredTrailer.duration}
                    </span>
                    <span className={trailersStyles.metaItem}>
                      <Calendar size={16} className={trailersStyles.metaIcon} />
                      {featuredTrailer.year}
                    </span>
                  </div>
                </div>

                <p className={trailersStyles.description}>
                  {featuredTrailer.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{trailersCSS}</style>
    </div>
  );
};

export default Trailers;
