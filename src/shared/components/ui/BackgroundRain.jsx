import React from 'react';
import './BackgroundRain.css';

export default function BackgroundRain() {
  const drops = Array.from({ length: 40 });

  return (
    <div className="rain-container">
      <div className="glow-orb"></div>
      {drops.map((_, i) => {
        const style = {
          left: `${Math.random() * 100}%`,
          animationDuration: `${1 + Math.random() * 2}s`,
          animationDelay: `${Math.random() * 2}s`,
          height: `${20 + Math.random() * 80}px`,
          opacity: 0.1 + Math.random() * 0.4
        };
        return <div key={i} className="light-drop" style={style}></div>;
      })}
    </div>
  );
}
