export default function ContactPage() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-24">
      
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          Contact Us
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Get in touch with Atal Seva Setu Kendra for any government, digital,
          or citizen service assistance.
        </p>
      </div>

      {/* Contact Content */}
      <div className="grid gap-10 lg:grid-cols-2">
        
        {/* Contact Details */}
        <div className="space-y-6">
          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Office Address
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Atal Seva Setu Kendra <br />
              Tajpuri Post – Gartad <br />
              Taluka Shirpur, District Dhule <br />
              Maharashtra, India
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Contact Details
            </h3>
            <p className="text-gray-700">
              <strong>Contact Person:</strong> Ajay Shirsath
            </p>
            <p className="text-gray-700">
              <strong>Mobile:</strong>{" "}
              <a
                href="tel:9875196163"
                className="text-green-700 hover:underline"
              >
                9875196163
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Website:</strong>{" "}
              <a
                href="https://atalsevasetukendra.netlify.app"
                target="_blank"
                className="text-green-700 hover:underline"
              >
                atalsevasetukendra.netlify.app
              </a>
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="tel:9875196163"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919875196163"
              target="_blank"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Send Us a Message
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Submit
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-3">
            *This form is for inquiry purposes only.
          </p>
        </div>
      </div>
    </section>
  );
}
