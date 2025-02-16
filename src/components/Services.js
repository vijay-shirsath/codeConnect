import React from "react";
import { FaLaptopCode, FaShieldAlt, FaMobileAlt, FaDatabase, FaTools, FaChartLine } from "react-icons/fa";

const services = [
  { icon: <FaLaptopCode size={40} className="text-blue-600" />, title: "Web Development", description: "Modern and responsive websites with the latest technologies." },
  { icon: <FaMobileAlt size={40} className="text-blue-600" />, title: "Mobile App Development", description: "Cross-platform mobile apps for iOS and Android." },
  { icon: <FaShieldAlt size={40} className="text-blue-600" />, title: "Cyber Security", description: "Protect your business with top-tier cybersecurity solutions." },
  { icon: <FaDatabase size={40} className="text-blue-600" />, title: "Database Management", description: "Efficient and scalable database solutions." },
  { icon: <FaTools size={40} className="text-blue-600" />, title: "IT Support & Maintenance", description: "24/7 support to keep your systems running smoothly." },
  { icon: <FaChartLine size={40} className="text-blue-600" />, title: "Digital Marketing", description: "Boost your online presence with SEO and marketing strategies." }
];

function Services() {
  return (
    <div className="bg-blue-50 py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <h1 className="text-gray-800 text-4xl md:text-6xl font-extrabold tracking-tight">
          Our Services
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          We offer a range of technology solutions to help you grow and secure your business.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300">
            {service.icon}
            <h3 className="text-xl font-semibold mt-4 text-gray-800">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;