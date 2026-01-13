export default function ServicesPage() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-24">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          Our Services
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Atal Seva Setu Kendra provides trusted government, digital, and citizen
          services under one roof for your convenience.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Identity & Government Services */}
        <ServiceCard
          title="Government & Identity Services"
          items={[
            "Aadhaar Registration & Update",
            "PAN Card (New / Correction)",
            "Passport Services",
            "Voter ID Card",
            "Farmer ID Card",
            "E-Shram Card",
            "Ayushman Bharat Card",
            "ABHA Health Card",
            "Aadhaar PVC / Print",
          ]}
        />

        {/* Certificates & Documents */}
        <ServiceCard
          title="Certificates & Legal Services"
          items={[
            "Caste Certificate",
            "Income Certificate",
            "Residence Certificate",
            "Land 7/12 & 8A Extract",
            "Affidavit Services",
            "Government Job Application Assistance",
          ]}
        />

        {/* Banking & Financial Services */}
        <ServiceCard
          title="Banking & Financial Services"
          items={[
            "Money Transfer",
            "Cash Withdrawal",
            "Cash Deposit",
            "Bill Payments",
            "LIC & Insurance Premium Payments",
            "All Vehicle Insurance",
            "Pradhan Mantri Fasal Bima Yojana",
          ]}
        />

        {/* Travel & Utility Services */}
        <ServiceCard
          title="Travel & Utility Services"
          items={[
            "Railway Ticket Booking",
            "Bus Ticket Booking",
            "Flight Ticket Booking",
            "Electricity Bill Payment",
            "Mobile Recharge",
          ]}
        />

        {/* Telecom Services */}
        <ServiceCard
          title="Telecom Services"
          items={[
            "SIM Card Registration",
            "SIM Card Porting (MNP)",
          ]}
        />

        {/* IT & Digital Services */}
        <ServiceCard
          title="IT & Digital Services"
          items={[
            "Website Development",
            "Mobile Application Development",
            "OS Installation",
            "Computer & Software Troubleshooting",
            "CET / JEE / NEET / GATE Form Filling",
            "Learner License Assistance",
          ]}
        />

      </div>
    </section>
  );
}

/* Reusable Service Card */
function ServiceCard({ title, items }) {
  return (
    <div className="rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-blue-700 mb-4">
        {title}
      </h3>
      <ul className="space-y-2 text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-green-600 font-bold">✔</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
