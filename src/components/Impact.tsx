
const Impact = () => {
  const stats = [
    {
      number: "23,500",
      unit: "tons",
      description: "of coffee waste annually in Morocco = huge untapped potential"
    },
    {
      number: "5,000",
      unit: "farmers",
      description: "supported by 2026"
    },
    {
      number: "10,000",
      unit: "tons",
      description: "of CO₂-equivalent emissions reduction goal"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2F5233] mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[#2F5233] mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-[#4A3B22] mb-2">
                {stat.unit}
              </div>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
