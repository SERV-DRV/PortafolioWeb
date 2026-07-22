import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './MediaCarousel.css';

export default function MediaCarousel({ media = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  if (!media || media.length === 0) return null;

  const currentMedia = media[currentIndex];
  const isVideo = currentMedia.type === 'video';

  return (
    <div className="media-carousel-container">
      <div className="carousel-view">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="carousel-slide"
          >
            {isVideo ? (
              <video 
                src={currentMedia.src} 
                controls
                preload="none"
                poster={currentMedia.poster}
                className="carousel-media"
              />
            ) : (
              <img 
                src={currentMedia.src} 
                alt={`Media ${currentIndex + 1}`} 
                className="carousel-media"
                loading="lazy"
                decoding="async"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {media.length > 1 && (
        <>
          <button className="carousel-nav-btn prev-btn" onClick={handlePrev} aria-label="Anterior">
            <FaChevronLeft />
          </button>
          <button className="carousel-nav-btn next-btn" onClick={handleNext} aria-label="Siguiente">
            <FaChevronRight />
          </button>
          
          <div className="carousel-dots" role="tablist">
            {media.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir a la diapositiva ${idx + 1}`}
                role="tab"
                aria-selected={idx === currentIndex}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}