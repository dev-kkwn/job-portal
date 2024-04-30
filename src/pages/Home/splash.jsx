import React, { useState, useEffect } from 'react';
import Title from './title';
import Carousel from './carosel';

const SplashPage = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showSplash ? (
        <div className="splash-content">
          <Title />
        </div>
      ) : (
       <Carousel />
      )}
    </div>
  );
};

export default SplashPage;
