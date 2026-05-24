export default function AboutPage() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-24 bg-gradient-to-b from-amber-50/40 via-white to-orange-50/25 min-h-screen font-sans">
      
      {/* 📝 प्रिमियम पेज हेडिंग */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[#b85c38] text-xs font-bold tracking-widest uppercase bg-orange-100/60 px-4 py-1.5 rounded-full inline-block mb-3 border border-orange-200/40">
          केंद्राबद्दल माहिती
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">
          आमच्याबद्दल <span className="text-[#b85c38]">थोडक्यात</span>
        </h1>
        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
          अटळ सेवा सेतू केंद्र हे नागरिकांना सर्व सरकारी, निमशासकीय आणि डिजिटल सेवा अत्यंत सोप्या, पारदर्शक आणि विश्वासार्ह पद्धतीने देण्यासाठी कटिबद्ध असलेले एक अधिकृत केंद्र आहे.
        </p>
      </div>

      {/* 🏛️ मुख्य मजकूर विभाग (About Content) */}
      <div className="grid gap-10 lg:grid-cols-2 items-stretch max-w-7xl mx-auto">
        
        {/* डावा भाग: आम्ही कोण आहोत (Text Section) */}
        <div className="flex flex-col justify-center bg-white rounded-2xl border border-gray-200/80 p-6 md:p-8 shadow-sm hover:shadow-md transition duration-300">
          <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
            आम्ही <span className="text-[#b85c38]">कोण आहोत?</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            नागरिक आणि आवश्यक शासकीय सेवा यांमधील अंतर कमी करण्याच्या उद्देशाने 'अटळ सेवा सेतू केंद्राची' स्थापना करण्यात आली आहे. आम्ही एक 'सिंगल-विंडो' सेवा केंद्र म्हणून काम करतो, जिथे लोकांना कोणत्याही अनावश्यक विलंबाशिवाय विविध सार्वजनिक, डिजिटल आणि आर्थिक सेवा सहज मिळू शकतात.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            आमच्या केंद्रावर नागरिकांना आधार कार्ड, पॅन कार्ड, मतदार ओळखपत्र, विविध शासकीय दाखले, विमा योजना, बँकिंग सेवा, ट्रॅव्हल्स बुकिंग, टेलिकॉम सेवा आणि अत्याधुनिक करिअर सोल्यूशन्स (बायोडाटा व रेझ्युमे) यांसारख्या सेवा एकाच छताखाली पुरवल्या जातात.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-semibold text-gray-800">
            विश्वास, अचूकता आणि वेळेवर सेवा देण्यावर आमचा मुख्य भर आहे. प्रत्येकासाठी सरकारी सेवा अधिक सुलभ आणि नागरिक-फ्रेंडली बनवणे हेच आमचे अंतिम ध्येय आहे.
          </p>
        </div>

        {/* उजवा भाग: संस्थापक परिचय (Founder Section) */}
        <div className="rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50/60 to-amber-50/30 p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200/20 rounded-bl-full pointer-events-none transition-all group-hover:bg-orange-200/40" />
          <div>
            <div className="w-12 h-12 bg-[#b85c38] rounded-xl flex items-center justify-center text-white text-xl shadow-md mb-5">
              👨‍💼
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-orange-700/80 mb-1">
              केंद्राचे मुख्य व मार्गदर्शक
            </h3>
            <p className="text-2xl font-black text-gray-900 mb-1">
              अजय देवराम शिरसाठ
            </p>
            <p className="text-sm font-bold text-[#b85c38] mb-4">
              संस्थापक व मुख्य संचालक, अटळ सेवा सेतू केंद्र
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              कला शाखेचे पदवीधर (Bachelor of Arts) असलेले विजय शिरसाठ यांनी नागरिकांना विश्वसनीय, पारदर्शक आणि कार्यक्षम सेवा देण्याच्या संकल्पनेतून 'अटळ सेवा सेतू केंद्राची' स्थापना केली. 
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              प्रत्येक व्यक्तीला शासकीय आणि डिजिटल सेवा कोणत्याही त्रासाशिवाय, पूर्ण आदराने आणि वेळेवर मिळाव्यात यासाठी ते डिजिटल तंत्रज्ञानाचा वापर करून ग्रामीण व स्थानिक स्तरावर अविरत कार्यरत आहेत.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-orange-200/50 text-[11px] font-bold text-orange-700/80 tracking-wide">
            ⭐ प्रमाणित बिझनेस करस्पॉन्डंट आणि डिजिटल कन्सल्टंट
          </div>
        </div>
      </div>

      {/* 🎯 उद्दिष्ट आणि ध्येय (Vision & Mission) */}
      <div className="mt-16 grid gap-6 md:grid-cols-2 max-w-7xl mx-auto">
        
        {/* आमचे ध्येय (Our Vision) */}
        <div className="rounded-2xl border border-gray-200/80 bg-white shadow-sm p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-xl border border-orange-100/50 mb-4">
              👁️
            </div>
            <h3 className="text-lg font-black text-gray-850 mb-3 tracking-tight">
              आमचे ध्येय (Our Vision)
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              तळागाळातील प्रत्येक नागरिकाला शासकीय आणि अत्याधुनिक डिजिटल सेवा सहज उपलब्ध करून देऊन, त्यांना डिजिटल युगात सक्षम आणि स्वावलंबी बनवणारे एक विश्वासू केंद्र बनणे.
            </p>
          </div>
        </div>

        {/* आमचे उद्दिष्ट (Our Mission) */}
        <div className="rounded-2xl border border-gray-200/80 bg-white shadow-sm p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-xl border border-orange-100/50 mb-4">
              🎯
            </div>
            <h3 className="text-lg font-black text-gray-850 mb-3 tracking-tight">
              आमचे उद्दिष्ट (Our Mission)
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm font-medium">
              {[
                "नागरिकांना नेहमी अचूक, पारदर्शक आणि वेळेवर सेवा प्रदान करणे.",
                "ग्रामीण भागात डिजिटल साक्षरता आणि सेवांची सुलभता वाढवणे.",
                "कोणत्याही लपविलेल्या शुल्काशिवाय १००% पारदर्शकता राखणे.",
                "पूर्ण समर्पण, प्रामाणिकपणा आणि उत्कृष्टतेने जनतेची सेवा करणे.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="text-orange-500 font-bold shrink-0 text-xs mt-0.5">✔</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}