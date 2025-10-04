'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Microsoft Uttar Pradesh Power BI Club",
    subtitle: "Transform Data into Insights",
    description: "Join UP's largest Power BI community and become an expert in data visualization",
    image: "/images/slide1.jpg",
    gradient: "from-blue-900/80 via-purple-900/70 to-transparent"
  },
  {
    title: "Learn & Grow Together",
    subtitle: "Develop Your Skills with Us",
    description: "Take your Power BI skills to the next level with workshops, webinars, and hands-on sessions",
    image: "/images/slide2.jpg",
    gradient: "from-cyan-900/80 via-blue-900/70 to-transparent"
  },
  {
    title: "Join Our Community",
    subtitle: "Part of 500+ Data Enthusiasts",
    description: "Network with industry experts and fellow learners while working on real-world projects",
    image: "/images/slide3.jpg",
    gradient: "from-purple-900/80 via-pink-900/70 to-transparent"
  },
  {
    title: "Transform Your Career",
    subtitle: "Build Your Data Analytics Career",
    description: "Accelerate your career with Power BI certifications and practical experience",
    image: "/images/slide4.jpg",
    gradient: "from-emerald-900/80 via-teal-900/70 to-transparent"
  }
];

export default function PowerBIHeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleJoinClick = () => {
    window.location.href = '/connect';
  };

  const current = slides[currentSlide];

  return (
    <div className="relative w-full h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-[calc(100vh-4rem)] overflow-hidden bg-gray-900">
      {/* Image Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      ))}

      {/* Content Container */}
      <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="w-full sm:max-w-2xl lg:max-w-3xl">
          {/* Main Content */}
          <div className="text-white space-y-1.5 sm:space-y-4 md:space-y-6 animate-fade-in">
            {/* Title */}
            <h1 className="text-lg leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold drop-shadow-2xl">
              {current.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-xl md:text-2xl lg:text-3xl font-medium text-white/90 drop-shadow-lg">
              {current.subtitle}
            </p>

            {/* Description - Hidden on mobile */}
            <p className="hidden sm:block text-sm md:text-base lg:text-lg max-w-2xl text-white/80 leading-relaxed drop-shadow-md">
              {current.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-2 sm:gap-4 pt-2 sm:pt-6">
              <button 
                onClick={handleJoinClick}
                className="px-3 py-1.5 sm:px-8 sm:py-4 bg-white text-gray-900 rounded font-bold text-xs sm:text-lg hover:bg-gray-200 transition-colors duration-300"
              >
                Join Us
              </button>
              <button className="px-3 py-1.5 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-sm text-white rounded font-bold text-xs sm:text-lg hover:bg-white/30 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-md transition-all duration-300 text-white group z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-md transition-all duration-300 text-white group z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
      </button>

      {/* Dot Indicators with 40px height */}
      <div className="absolute bottom-0 left-0 right-0 h-10 flex items-center justify-center gap-3 bg-gradient-to-t from-black/50 to-transparent">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Styles for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}