import { useState, useEffect } from 'react';
import HeroImageDesktop from './../assets/image-hero-desktop.webp';
import HeroImageTablet from './../assets/image-hero-tablet.webp';
import HeroImageMobile from './../assets/image-hero-mobile.webp';

function Hero() {
  const [currentImage, setCurrentImage] = useState(HeroImageDesktop);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to prevent memory leaks
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 768 && windowWidth > 639) {
      // Adjust breakpoint as needed
      setCurrentImage(HeroImageTablet);
    } else if (windowWidth < 639) {
      setCurrentImage(HeroImageMobile);
    } else {
      setCurrentImage(HeroImageDesktop);
    }
  }, [windowWidth]);

  return (
    <div className="height-70vh sm:height-30vh flex items-center sm:flex-col sm:justify-between">
      <div className="hero-con w-fulls ml-40 flex flex-col justify-center gap-5 sm:w-80  md:ml-10 md:w-96">
        <h1 className="sm:text-dark-blue md:text-4xl">
          Maximize skill, minimize budget
        </h1>
        <p className="text-lg sm:text-base md:text-base">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <button className="text-w mr-40 w-40 rounded-full bg-gradient-to-t from-gradient-pink to-gradient-orange p-3 text-lg font-semibold text-white hover:opacity-50">
          Get Started
        </button>
      </div>
      <div className="pos-hero absolute sm:static">
        <img src={currentImage} alt="Hero Image" />
      </div>
    </div>
  );
}

export default Hero;
