
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#E7F3E8] py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#2F5233] mb-6 animate-fade-in">
          Turning Coffee Waste into Green Growth
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          We transform Morocco's coffee waste into 100% natural fertilizer, helping farmers and fighting climate change.
        </p>
        <Button 
          className="bg-[#2F5233] hover:bg-[#1F3522] text-white px-8 py-6 rounded-lg text-lg transition-all duration-300"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default Hero;
