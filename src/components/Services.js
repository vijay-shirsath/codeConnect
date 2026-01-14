import React from "react";
import {
  FaIdCard,
  FaUniversity,
  FaFileAlt,
  FaMobileAlt,
  FaMoneyCheckAlt,
  FaHandsHelping,
  FaLaptopCode,
  FaShieldAlt,
  FaDesktop
} from "react-icons/fa";

const services = [
  {
    icon: <FaIdCard size={40} className="text-blue-600" />,
    title: "Aadhaar & PAN Services",
    description: "Aadhaar updates, PAN card applications, corrections, and related assistance."
  },
  {
    icon: <FaUniversity size={40} className="text-blue-600" />,
    title: "Government Schemes",
    description: "Support for central and state government welfare scheme applications."
  },
  {
    icon: <FaFileAlt size={40} className="text-blue-600" />,
    title: "Online Form Filling",
    description: "Exam, job, admission, and government portal form filling services."
  },
  {
    icon: <FaMobileAlt size={40} className="text-blue-600" />,
    title: "Digital & Mobile Services",
    description: "Mobile recharge, bill payments, SIM services, and digital assistance."
  },
  {
    icon: <FaMoneyCheckAlt size={40} className="text-blue-600" />,
    title: "Banking & AEPS Services",
    description: "AEPS cash withdrawal, balance enquiry, mini statement, and banking support."
  },
  {
    icon: <FaLaptopCode size={40} className="text-blue-600" />,
    title: "Website Development",
    description: "Design and development of modern, responsive websites for businesses and individuals."
  },
  {
    icon: <FaDesktop size={40} className="text-blue-600" />,
    title: "OS Installation & Troubleshooting",
    description: "Windows and Linux installation, system setup, upgrades, and troubleshooting."
  },
  {
    icon: <FaShieldAlt size={40} className="text-blue-600" />,
    title: "Cyber Security Services",
    description: "Basic cyber security support, system hardening, malware removal, and security guidance."
  },
  {
    icon: <FaHandsHelping size={40} className="text-blue-600" />,
    title: "Citizen Support Services",
    description: "Complete guidance for all government, digital, and technical service needs."
  }
];

function Services() {
  return (
    <div className="bg-blue-50 py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <h1 className="text-gray-800 text-4xl md:text-6xl font-extrabold tracking-tight">
          Our Services
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mt-4 max-w-4xl mx-auto">
          Atal Seva Setu Kendra provides government, digital, IT, and cyber security services under one roof to make citizens’ and businesses’ work easy and secure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mt-4 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
