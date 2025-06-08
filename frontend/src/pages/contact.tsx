// ContactPage.tsx

import Appshell from "../components/navbar"
const ContactPage = () => {
  return (
    <>
<Appshell/>
    <section className="min-h-screen bg-gradient-to-r from-slate-900 to-black shadow-lg text-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold">Get In Touch</h2>
          <p className="text-gray-300 text-lg">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Let’s connect and build
            something great together.
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm uppercase text-gray-400">Email</h4>
              <a href="mailto:aryalkiran21@gmail.com" className="text-lg hover:underline">
                aryalkiran21@gmail.com
              </a>
            </div>
            <div>
              <h4 className="text-sm uppercase text-gray-400">Phone</h4>
              <p className="text-lg">+977 982 7514 282</p>
            </div>
            <div>
              <h4 className="text-sm uppercase text-gray-400">Location</h4>
              <p className="text-lg">Butwal, Nepal</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded text-white font-medium transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    </>
  );
};

export default ContactPage;
