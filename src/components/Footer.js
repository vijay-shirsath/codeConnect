import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-500 via-indigo-600 to-purple-700 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Tagline Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <img
              src="/Atal Seva Setu Kendra logo.png" // Replace with your logo path
              alt="CodeConnect Logo"
              className="w-16 h-16 mb-3"
            />
            <h3 className="text-xl font-extrabold mb-2 text-center md:text-left">
              AtalSeva<span className="text-yellow-400">SetuKendra</span>
            </h3>
            <p className="text-sm text-center md:text-left">
              Empowering businesses with innovative solutions.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-yellow-300 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-yellow-300 transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-300 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-300 transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="text-sm mb-3">Email: <span className="text-yellow-300">vijay.shirsath37@yahoo.com</span></p>
            <p className="text-sm mb-3">Phone: <span className="text-yellow-300">+91 9689526236</span></p>
            <p className="text-sm">Address: <span className="text-yellow-300">210 Tajpuri, Shirpur, Maharashtra</span></p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-white mt-6 pt-4 text-center">
          <p className="text-sm text-gray-200">
            &copy; {new Date().getFullYear()} Atal Seva Setu Kendra | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
