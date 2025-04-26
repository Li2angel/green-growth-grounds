
import { Leaf, Recycling, Earth } from "lucide-react";

const Solution = () => {
  const solutions = [
    {
      icon: <Recycling className="h-12 w-12 text-[#2F5233]" />,
      title: "Recycling Waste",
      description: "Diverting coffee and vegetable waste from landfills"
    },
    {
      icon: <Leaf className="h-12 w-12 text-[#2F5233]" />,
      title: "Sustainable Fertilizer",
      description: "Boosting soil health without chemicals"
    },
    {
      icon: <Earth className="h-12 w-12 text-[#2F5233]" />,
      title: "Climate Action",
      description: "Reducing methane emissions and supporting local farmers"
    }
  ];

  return (
    <section className="py-20 bg-[#E7F3E8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2F5233] mb-12">Our Solution</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#2F5233]">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
