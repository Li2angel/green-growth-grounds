
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1920&q=80",
      title: "Turning Coffee Waste into Green Growth",
      description: "We transform Morocco's coffee waste into 100% natural fertilizer, helping farmers and fighting climate change."
    },
    {
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1920&q=80",
      title: "Sustainable Agriculture Solutions",
      description: "Join us in revolutionizing farming practices with eco-friendly coffee-based fertilizers."
    },
    {
      image: "https://images.unsplash.com/photo-1511537190424-bbbab1bb7c9d?auto=format&fit=crop&w=1920&q=80",
      title: "From Coffee Shops to Crop Fields",
      description: "Creating a circular economy that benefits both urban businesses and rural farmers."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background Images with Overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center bg-no-repeat ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("${slide.image}")`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
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
                : "opacity-0 transform translate-y-4"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
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
