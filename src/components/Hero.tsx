
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-[#2F5233]/40 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Turning Coffee Waste into Green Growth
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          We transform Morocco's coffee waste into 100% natural fertilizer, helping farmers and fighting climate change.
        </p>
        <Button 
          className="bg-white hover:bg-white/90 text-[#2F5233] px-8 py-6 rounded-lg text-lg transition-all duration-300"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default Hero;
