import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
 {
    name: "Ajay Shirsath",
    position: "Founder and CEO",
    image: "/ajayPhoto.jpeg",
    bio: "Founder and CEO of Atal Seva Setu Kendra, a citizen service initiative dedicated to bridging the gap between government services and the public. A Bachelor of Arts graduate, he combines strong administrative understanding with grassroots experience to deliver efficient, transparent, and people-centric services. Under his leadership, the Kendra empowers citizens through digital access, government scheme facilitation, and essential public services, contributing to inclusive development at the local level.",
    company: "Atal Seva Setu Kendra",
    location: "Shirpur, India"
  },
   {
    name: "Vijay Shirsath",
    position: "CTO, Web & Mobile Developer, CSC Operator",
    image: "/panPhoto.jpg",
    bio: "Expert in web and mobile development, CSC operations, and cybersecurity. Graduate from R.C. Patel Institute of Technology, Shirpur, with knowledge of MERN stack, React Native, and penetration testing tools like Nessus, Nmap, Wireshark, Metasploit, Owasp and Burp Suite.",
    company: "Atal Seva Setu Kendra",
    location: "Shirpur, India"
  },
];

export default function OurTeam() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const prevMember = () => {
    setIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const nextMember = () => {
    setIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6 w-full max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
      <div className="relative w-full p-8 shadow-xl bg-white rounded-xl text-center border overflow-hidden">
        <motion.img 
          key={index} 
          src={teamMembers[index].image} 
          alt={teamMembers[index].name} 
          className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-gray-300 shadow-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">{teamMembers[index].name}</h3>
          <p className="text-gray-500 text-md font-medium">{teamMembers[index].position} at {teamMembers[index].company}</p>
          <p className="text-gray-400 text-sm mb-3">{teamMembers[index].location}</p>
          <p className="text-gray-700 text-lg">{teamMembers[index].bio}</p>
        </div>
      </div>
      <div className="flex space-x-6">
        <button onClick={prevMember} className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition">
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button onClick={nextMember} className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition">
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
}
