
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1920&q=80",
      title: "From Cup to Crop: Giving Coffee Waste a New Life",
      description: "Every brew can be the beginning of green growth."
    },
    {
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1920&q=80",
      title: "Brewing a Sustainable Future",
      description: "Transforming coffee waste into thriving farms across Morocco."
    },
    {
      image: "https://images.unsplash.com/photo-1511537190424-bbbab1bb7c9d?auto=format&fit=crop&w=1920&q=80",
      title: "Your Morning Coffee Can Change the Climate",
      description: "Join us in turning waste into growth, one cup at a time."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Changed to 7 seconds for better readability

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background Images with Overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1500 ease-in-out bg-cover bg-center bg-no-repeat ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("${slide.image}")`,
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>
      ))}

      {/* Content */}
      <div className="container relative mx-auto px-4 text-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-all duration-1000 absolute inset-x-0 ${
              currentSlide === index
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {slide.description}
            </p>
          </div>
        ))}
        
        <div className="relative mt-64">
          <Button 
            className="bg-white hover:bg-white/90 text-[#2F5233] px-8 py-6 rounded-lg text-lg transition-all duration-300"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white w-4" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

