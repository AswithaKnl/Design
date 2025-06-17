import React, { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress || 0);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 z-10 h-2 w-full">
      <div
        className="h-full w-full origin-left bg-[#ef603d] will-change-transform transition-transform"
        style={{ transform: `scaleX(${scrollProgress})` }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
