import Image from "next/image";

function CSCBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-12 px-6 flex flex-col items-center text-white text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
        💼 विजय सरल सेवा केंद्र  
      </h2>
      <p className="text-lg md:text-xl mb-6 max-w-3xl font-semibold">
        तुमच्या सर्व डिजिटल सेवा आणि सरकारी सेवा एकाच ठिकाणी, जलद आणि विश्वासार्ह सेवा!  
      </p>
      <div className="w-full max-w-6xl rounded-xl overflow-hidden shadow-2xl border border-gray-300 bg-white">
        <Image
          src="/cscPoster.webp" // Ensure the image is in the public folder
          alt="CSC Services Poster"
          width={1200} // Increased width
          height={600} // Adjusted height
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold text-yellow-300">
          📍 ताजपुरी गावातील विश्वासार्ह डिजिटल सेवा केंद्र!
        </h3>
        <p className="mt-2 text-lg max-w-4xl">
          ✅ पॅन कार्ड, आधार प्रिंट, फोटो कॉपी, ऑनलाईन फॉर्म  
          ✅ वीज बिल भरणा, रेल्वे/बस तिकीट बुकिंग  
          ✅ सरकारी प्रमाणपत्रे, शेतकरी नोंदणी  
          ✅ विमा संरक्षण, आर्थिक व्यवहार, पेन्शन योजना  
          ✅ मोबाईल/डिटिएच रिचार्ज, टेलीमेडिसिन सेवा  
        </p>
      </div>
    </div>
  );
}

export default CSCBanner;
