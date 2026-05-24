"use client";
import { useState } from "react";

// 🖼️ सर्व १४ विवाह बायोडाटा आणि रेझ्युमे डिझाईन सॅम्पल्सचा डेटा
const sampleTemplates = [
  // 🕉️ विवाह बायोडाटा फॉरमॅट्स (एकूण ८)
  {
    id: "bio-1",
    title: "पारंपारिक विवाह बायोडाटा (Design A)",
    category: "biodata",
    image: "/images/templates/biodataA.png",
    description: "साधा, सुटसुटीत आणि पारंपरिक लग्न परिचय पत्र फॉरमॅट."
  },
  {
    id: "bio-2",
    title: "प्रीमियम विवाह बायोडाटा (Design B)",
    category: "biodata",
    image: "/images/templates/biodataB.png",
    description: "आकर्षक कलर्स, प्रिमियम बॉर्डर आणि डिजिटल लुकसह डिझाईन."
  },
  {
    id: "bio-3",
    title: "रॉयल विवाह बायोडाटा (Design C)",
    category: "biodata",
    image: "/images/templates/biodataC.png",
    description: "गणेश आणि कलश चिन्हासह राजेशाही लुक मधील डिझाईन."
  },
  {
    id: "bio-4",
    title: "मॉडर्न विवाह बायोडाटा (Design D)",
    category: "biodata",
    image: "/images/templates/biodataD.png",
    description: "आजच्या पिढीला आवडेल असा आधुनिक आणि सोबर कलर पॅटर्न."
  },
  {
    id: "bio-5",
    title: "क्लासिक विवाह बायोडाटा (Design E)",
    category: "biodata",
    image: "/images/templates/biodataE.png",
    description: "सर्व माहिती एकाच पानात अचूक बसवणारा स्टँडर्ड फॉरमॅट."
  },
  {
    id: "bio-6",
    title: "फ्लोरल विवाह बायोडाटा (Design F)",
    category: "biodata",
    image: "/images/templates/biodataF.png",
    description: "आकर्षक फुलांच्या बॉर्डरसह डिझाईन केलेले सुंदर परिचय पत्र."
  },
  {
    id: "bio-7",
    title: "एलीट विवाह बायोडाटा (Design G)",
    category: "biodata",
    image: "/images/templates/biodataG.png",
    description: "उच्चशिक्षित व सुशिक्षित वधू-वरांसाठी विशेष लेआउट."
  },
  // 💼 नोकरी रेझ्युमे फॉरमॅट्स (एकूण ६)
  {
    id: "res-1",
    title: "प्रोफेशनल रेझ्युमे (Design 1)",
    category: "resume",
    image: "/images/templates/resume1.jpg",
    description: "नोकरीच्या अर्जासाठी आवश्यक असणारा कॉर्पोरेट फॉरमॅट."
  },
  {
    id: "res-2",
    title: "फ्रेशर्स स्पेशल रेझ्युमे (Design 2)",
    category: "resume",
    image: "/images/templates/resume2.jpg",
    description: "कॉलेज पासआउट विद्यार्थ्यांसाठी प्रोजेक्ट्स हायलाईट करणारे डिझाईन."
  },
  {
    id: "res-3",
    title: "एक्झिक्युटिव्ह रेझ्युमे (Design 3)",
    category: "resume",
    image: "/images/templates/resume3.jpg",
    description: "अनुभवी उमेदवारांसाठी कामाचा अनुभव प्रभावीपणे मांडणारे लेआउट."
  },
  {
    id: "res-4",
    title: "मॉडर्न इन्फोग्राफिक CV (Design 4)",
    category: "resume",
    image: "/images/templates/resume4.jpg",
    description: "स्किल्स आणि ग्राफिक्ससह आकर्षक दिसणारा आजचा मॉडर्न रेझ्युमे."
  },
  {
    id: "res-5",
    title: "शासकीय नोकरी स्पेशल रेझ्युमे (Design 5)",
    category: "resume",
    image: "/images/templates/resume5.jpg",
    description: "शासकीय किंवा निमशासकीय अर्जांसाठी अत्यंत साधा व सरळ फॉरमॅट."
  },
  {
    id: "res-6",
    title: "मिनिमलिस्टिक रेझ्युमे (Design 6)",
    category: "resume",
    image: "/images/templates/resume6.jpg",
    description: "स्वच्छ, सुटसुटीत आणि डोळ्यांना सुखावणारे ऑफिशिअल डिझाईन."
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("biodata");

  const filteredSamples = sampleTemplates.filter(item => item.category === activeTab);

  return (
    <section className="px-4 py-8 md:px-12 lg:px-24 bg-gradient-to-b from-amber-50/40 via-white to-orange-50/25 min-h-screen font-sans">
      
      {/* 📝 प्रीमियम पेज हेडिंग */}
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <span className="text-[#b85c38] text-[10px] md:text-xs font-bold tracking-widest uppercase bg-orange-100/60 px-3 py-1.5 rounded-full inline-block mb-3 border border-orange-200/40">
          Atal Seva Setu Kendra
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
          आमच्या <span className="text-[#b85c38]">डिजिटल सेवा</span>
        </h1>
        <p className="mt-3 text-gray-600 text-xs md:text-base leading-relaxed max-w-xl mx-auto">
          आपल्या सोयीसाठी सर्व शासकीय, निमशासकीय, बँकिंग आणि करिअर विषयक सेवा एकाच अत्याधुनिक डिजिटल छताखाली उपलब्ध आहेत.
        </p>
      </div>

      {/* 🗂️ मुख्य सेवांचा रिस्पॉन्सिव्ह ग्रीड */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-16 md:mb-28">
        
        {/* 🌟 विशेष हायलाईट कार्ड: विवाह बायोडाटा आणि रेझ्युमे */}
        <div className="rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50/60 to-amber-50/30 p-5 md:p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
          <div className="absolute top-0 right-0 w-20 h-20 bg-orange-200/20 rounded-bl-full pointer-events-none transition-all group-hover:bg-orange-200/40" />
          <div>
            <div className="w-10 h-10 bg-[#b85c38] rounded-xl flex items-center justify-center text-white text-lg shadow-md mb-4 md:mb-5">
              💝
            </div>
            <h3 className="text-lg md:text-xl font-extrabold text-[#b85c38] mb-3 md:mb-4">
              विवाह बायोडाटा व रेझ्युमे
            </h3>
            <ul className="space-y-2.5 text-gray-700 text-xs md:text-sm">
              {[
                "प्रीमियम विवाह बायोडाटा निर्मिती",
                "पारंपारिक व आधुनिक लग्न परिचय पत्र",
                "नोकरीसाठी प्रोफेशनल रेझ्युमे (Resume)",
                "अनुभवी व फ्रेशर्स उमेदवारांसाठी खास डिझाईन्स",
                "उच्च दर्जाची डिजिटल कलर प्रिंटिंग",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-orange-100 text-[#b85c38] flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                  <span className="font-bold text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 pt-3 border-t border-orange-200/50 text-[10px] font-bold text-orange-700/80 tracking-wide">
            ⭐ एक्सप्रेस काउंटर सर्व्हिस (तात्काळ डिलिव्हरी)
          </div>
        </div>

        {/* शासकीय आणि ओळखपत्र सेवा */}
        <ServiceCard
          icon="🆔"
          title="शासकीय व ओळखपत्र सेवा"
          items={[
            "नवीन आधार कार्ड नोंदणी व अपडेट",
            "नवीन पॅन कार्ड (PAN Card) व दुरुस्ती",
            "नवीन पासपोर्ट अर्ज (Passport)",
            "मतदार ओळखपत्र अर्ज व दुरुस्ती",
            "शेतकरी ओळखपत्र (Farmer ID)",
            "ई-श्रम कार्ड नोंदणी (E-Shram)",
            "आयुष्मान भारत कार्ड (५ लाख मोफत उपचार)",
            "आधार पीव्हीसी (PVC Plastic) कार्ड प्रिंट",
          ]}
        />

        {/* दाखले आणि कायदेशीर कागदपत्रे */}
        <ServiceCard
          icon="📄"
          title="दाखले आणि कायदेशीर सेवा"
          items={[
            "जातीचा दाखला (Caste Certificate)",
            "उत्पन्नाचा दाखला (Income Certificate)",
            "रहिवासी दाखला (Domicile Certificate)",
            "जमीन ७/१२ आणि ८अ उतारा",
            "प्रतिज्ञापत्र सेवा (Affidavit Services)",
            "शासकीय नोकरी ऑनलाईन फॉर्म असिस्टन्स",
          ]}
        />

        {/* बँकिंग आणि आर्थिक सेवा */}
        <ServiceCard
          icon="🏦"
          title="बँकिंग आणि आर्थिक सेवा"
          items={[
            "मनी ट्रान्सफर (सर्व बँकांमध्ये त्वरित जमा)",
            "आधार कार्डद्वारे पैसे काढणे (AEPS)",
            "बँक खात्यात रोख पैसे भरणे (Deposit)",
            "LIC आणि विमा प्रीमियम पेमेंट",
            "सर्व गाड्यांचा विमा (Vehicle Insurance)",
            "पंतप्रधान फसल विमा योजना (पीक विमा)",
          ]}
        />

        {/* प्रवास आणि इतर सेवा */}
        <ServiceCard
          icon="✈️"
          title="प्रवास आणि युटिलिटी सेवा"
          items={[
            "रेल्वे तिकीट बुकिंग (Confirm Ticket)",
            "एसटी आणि खाजगी ट्रॅव्हल्स bus बुकिंग",
            "विमान तिकीट बुकिंग (Flight Ticket)",
            "महावितरण वीज बिल व सर्व कर भरणे",
            "मोबाईल, डीटीएच (DTH) रिचार्ज",
          ]}
        />

        {/* आयटी आणि डिजिटल सेवा */}
        <ServiceCard
          icon="💻"
          title="आयटी आणि डिजिटल सेवा"
          items={[
            "व्यावसायिक वेबसाईट डेव्हलपमेंट",
            "ऑपरेटिंग सिस्टीम (Windows/Linux) सेटअप",
            "संगणक व सॉफ्टवेअर ट्रबलशूटिंग",
            "CET / JEE / NEET / GATE फॉर्म भरणे",
            "ड्रायव्हिंग लर्निंग लायसन्स अर्ज",
          ]}
        />
      </div>

      {/* ================= 🖼️ लाइव्ह डिझाईन कॅटलॉग गॅलरी ================= */}
      <div className="max-w-7xl mx-auto pt-10 md:pt-16 border-t border-gray-200/70">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-100/60 px-3 py-1 rounded-full inline-block border border-orange-200/30">
            Live Catalogue
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-2">
            लाइव्ह डिझाईन कॅटलॉग
          </h2>
          <p className="text-gray-500 text-xs md:text-sm mt-2 max-w-sm mx-auto">
            खालीलपैकी तुमचे आवडते फॉरमॅट निवडा आणि काउंटरवर आम्हाला त्याचे नाव सांगा.
          </p>
        </div>

        {/* 🔄 मोबाईल फ्रेंडली रिस्पॉन्सिव्ह स्क्रोल टॅब्स */}
        <div className="flex justify-start sm:justify-center gap-2 mb-10 overflow-x-auto pb-3 px-2 scrollbar-none whitespace-nowrap">
          <button
            onClick={() => setActiveTab("biodata")}
            className={`px-5 py-2.5 rounded-full font-extrabold text-xs tracking-wide transition-all duration-300 inline-block shrink-0 ${
              activeTab === "biodata"
                ? "bg-[#b85c38] text-white shadow-lg shadow-orange-700/20"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            🕉️ विवाह बायोडाटा सॅम्पल्स ({sampleTemplates.filter(i => i.category === "biodata").length})
          </button>
          <button
            onClick={() => setActiveTab("resume")}
            className={`px-5 py-2.5 rounded-full font-extrabold text-xs tracking-wide transition-all duration-300 inline-block shrink-0 ${
              activeTab === "resume"
                ? "bg-[#b85c38] text-white shadow-lg shadow-orange-700/20"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            💼 नोकरी रेझ्युमे सॅम्पल्स ({sampleTemplates.filter(i => i.category === "resume").length})
          </button>
        </div>

        {/* 🖼️ प्रिमियम रिस्पॉन्सिव्ह कॅटलॉग ग्रिड लेआउट */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-center max-w-6xl mx-auto">
          {filteredSamples.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl border border-gray-200/70 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* प्रिव्ह्यू इमेज फ्रेम */}
              <div className="bg-gray-50 aspect-[3/4] relative overflow-hidden border-b border-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
              </div>

              {/* माहिती विभाग */}
              <div className="p-5 md:p-6 text-center flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-sm md:text-base font-extrabold text-gray-800 tracking-tight">{item.title}</h3>
                  <p className="text-gray-500 text-[11px] md:text-xs mt-1.5 leading-relaxed">{item.description}</p>
                </div>
                
                {/* काउंटर टोकन */}
                <div className="mt-4 bg-gradient-to-r from-orange-50 to-amber-50 text-[#b85c38] text-[10px] md:text-[11px] font-black py-2.5 px-3 rounded-xl border border-orange-100/60 shadow-sm">
                  🎯 काउंटरवर सांगा: {item.title.split(" (")[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

/* 🧱 री-यूझेबल रिस्पॉन्सिव्ह प्रिमियम सर्व्हिस कार्ड कॉम्पोनेंट */
function ServiceCard({ icon, title, items }) {
  return (
    <div className="rounded-2xl border border-gray-200/80 bg-white shadow-sm p-5 md:p-6 hover:shadow-xl hover:border-orange-200/70 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="text-xl mb-3 md:mb-4 bg-gray-50 w-9 h-9 rounded-lg flex items-center justify-center border border-gray-100">
          {icon}
        </div>
        <h3 className="text-base md:text-lg font-black text-gray-800 mb-3 tracking-tight">
          {title}
        </h3>
        <ul className="space-y-2 text-gray-600 text-xs md:text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-orange-500 font-bold shrink-0 text-xs mt-0.5">✔</span>
              <span className="text-gray-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}