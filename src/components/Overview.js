import Image from 'next/image';
import React from 'react';

export default function Overview() {
  return (
    <div className="bg-gray-50 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-gray-800 text-4xl md:text-6xl font-extrabold tracking-tight">
          Overview
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          Discover who we are and what we strive to achieve at CodeConnect Technologies.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 gap-12">
        {/* Text Section */}
        <div className="w-full space-y-12">
         <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
  At CodeConnect, we provide IT and customer-focused services, including efficient CSC operations, job application assistance, and innovative web and mobile development solutions. Our commitment is to deliver reliable, accessible services that empower businesses and communities.
</p>


          {/* Inspiration, Mission, Vision Sections */}
          <div className="space-y-10">
            {/* OUR Inspiration */}
            <div className="flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg p-6 gap-6">
              <img
                src="/inspiration.svg"
                alt="Inspiration"
                className="w-24 h-24"
              />
              <div>
                <h2 className="text-gray-800 text-2xl font-bold mb-3">OUR Inspiration</h2>
                <p className="text-gray-600 text-lg">
                  At CodeConnect Technologies, our inspiration stems from the trust and encouragement of our customers, who rely on us for efficient, innovative, and reliable services. We are motivated by our dedicated team, whose relentless efforts begin with understanding client requirements and extend to delivering solutions on time, surpassing expectations.
                </p>
              </div>
            </div>

            {/* OUR Mission */}
            <div className="flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg p-6 gap-6">
              <img
                src="/mission.svg"
                alt="Mission"
                className="w-24 h-24"
              />
              <div>
                <h2 className="text-gray-800 text-2xl font-bold mb-3">OUR Mission</h2>
                <p className="text-gray-600 text-lg">
                  Our mission is to empower individuals and businesses with seamless digital and administrative solutions. As a registered CSC operator, we simplify government and private form-fill services, job applications, and essential tasks with precision and dedication. Our commitment to web and mobile application development ensures we deliver tailored, high-quality solutions.
                </p>
              </div>
            </div>

            {/* OUR Vision */}
            <div className="flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg p-6 gap-6">
              <img
                src="/vision.svg"
                alt="Vision"
                className="w-24 h-24"
              />
              <div>
                <h2 className="text-gray-800 text-2xl font-bold mb-3">OUR Vision</h2>
                <p className="text-gray-600 text-lg">
                  Our vision is to become a trusted partner for our clients by providing top-notch services within agreed timelines. We aspire to grow by leveraging innovation, dedication, and quality, redefining accessibility, and creating a positive impact for a lasting legacy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center">
          <Image
            src="/about-img.svg"
            width={600}
            height={400}
            alt="Overview"
            className="object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
