import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Ajay Shirsath",
    position: "Founder & CEO",
    image: "/ajayPhoto.jpeg",
    bio: "Founder and CEO of Atal Seva Setu Kendra, a citizen service initiative dedicated to bridging the gap between government services and the public. A Bachelor of Arts graduate with strong administrative and grassroots experience, he leads with a people-centric and transparent approach to service delivery.",
    company: "Atal Seva Setu Kendra",
    location: "Shirpur, India",
  },
  {
    name: "Vijay Shirsath",
    position: "CTO • Web & Mobile Developer • CSC Operator",
    image: "/panPhoto.jpg",
    bio: "Technology specialist with expertise in web & mobile development, CSC operations, and cybersecurity. Skilled in MERN stack, React Native, and security tools such as Nmap, Nessus, Wireshark, Metasploit, OWASP & Burp Suite.",
    company: "Atal Seva Setu Kendra",
    location: "Shirpur, India",
  },
];

export default function OurTeam() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % teamMembers.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const prevMember = () =>
    setIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));

  const nextMember = () =>
    setIndex((prev) => (prev + 1) % teamMembers.length);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Meet Our Team
        </h2>
        <p className="text-gray-600 mb-10">
          The people driving innovation, service excellence, and digital empowerment
        </p>

        <div className="relative bg-white rounded-2xl shadow-xl border p-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={teamMembers[index].image}
                alt={teamMembers[index].name}
                className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-indigo-100 shadow-lg object-cover"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />

              <h3 className="text-2xl font-bold text-gray-800">
                {teamMembers[index].name}
              </h3>

              <p className="text-indigo-600 font-medium mt-1">
                {teamMembers[index].position}
              </p>

              <p className="text-sm text-gray-500 mb-4">
                {teamMembers[index].company} • {teamMembers[index].location}
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                {teamMembers[index].bio}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevMember}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={nextMember}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
