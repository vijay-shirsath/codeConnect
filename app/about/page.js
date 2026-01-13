export default function AboutPage() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-24">
      
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          About Us
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Atal Seva Setu Kendra is a trusted citizen service center committed to
          delivering government and digital services in a simple, transparent,
          and reliable manner.
        </p>
      </div>

      {/* About Content */}
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        
        {/* Text Section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Atal Seva Setu Kendra was established with the objective of bridging
            the gap between citizens and essential government services. We serve
            as a single-window service center where people can easily access
            various public, digital, and financial services without unnecessary
            delays.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Our center assists citizens with Aadhaar, PAN, voter ID, certificates,
            insurance, banking services, travel bookings, telecom services, and
            digital solutions—all under one roof.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With a strong focus on trust, accuracy, and timely service delivery,
            we aim to make government services more accessible and citizen-friendly
            for everyone.
          </p>
        </div>

        {/* Founder Section */}
        <div className="bg-gray-50 border rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-green-700 mb-3">
            Founder & Center Head
          </h3>
          <p className="text-gray-800 font-medium">
            Ajay Shirsath
          </p>
          <p className="text-gray-600 mb-3">
            Founder & CEO, Atal Seva Setu Kendra
          </p>
          <p className="text-gray-700 leading-relaxed">
            A Bachelor of Arts graduate, Ajay Shirsath founded Atal Seva Setu Kendra
            with the vision of providing reliable, transparent, and efficient
            services to citizens. His goal is to ensure that every individual
            receives timely access to government and digital services with dignity
            and ease.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        
        <div className="border rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">
            Our Vision
          </h3>
          <p className="text-gray-700 leading-relaxed">
            To become a trusted and inclusive service hub that empowers citizens
            by providing easy access to government and digital services at the
            grassroots level.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">
            Our Mission
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Provide accurate and timely services</li>
            <li>✔ Promote digital awareness and accessibility</li>
            <li>✔ Ensure transparency and reliability</li>
            <li>✔ Serve citizens with dedication and integrity</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
