"use client"
import CSCBanner from "@/src/components/CscBanner";
import Overview from "@/src/components/Overview";
import Services from "@/src/components/Services";
import Testimonials from "@/src/components/Testemonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* first section */}
      <div className="bg-blue-200 flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-16">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-gray-800 text-4xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-yellow-500">CodeConnect</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-md mx-auto md:mx-0">
            Empowering businesses with innovative solutions to thrive in the
            digital age..
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <img
            src="intro-img.svg" // Replace with your image path
            alt="Illustration"
            className="w-3/4 md:w-full h-auto object-contain"
          />
        </div>
      </div>
      {/* second section */}
      <Overview/>
       {/* Third Section */} 
       <CSCBanner/>
       {/* fourth section */}
       <Services/>
       {/* fifth section */}
       <Testimonials/>
    </div>
  );
}
