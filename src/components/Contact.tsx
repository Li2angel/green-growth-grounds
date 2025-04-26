
import { Instagram, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-[#E7F3E8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2F5233] mb-12">Contact Us</h2>
        <div className="flex justify-center space-x-8 mb-8">
          <a href="#" className="hover:scale-110 transition-transform duration-300">
            <Instagram className="h-8 w-8 text-[#2F5233]" />
          </a>
          <a href="#" className="hover:scale-110 transition-transform duration-300">
            <Linkedin className="h-8 w-8 text-[#2F5233]" />
          </a>
          <a href="mailto:contact@ecobrew.com" className="hover:scale-110 transition-transform duration-300">
            <Mail className="h-8 w-8 text-[#2F5233]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
