import { useState } from "react";
import Appshell from "../components/navbar";
import MeetingForm from "../components/meetingform";

const ContactPage = () => {
  const [showMeetingForm, setShowMeetingForm] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      <Appshell />
      <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white px-6 py-16 flex items-center justify-center">
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold">Get In Touch</h2>
            <p className="text-gray-300 text-lg">
              Let's connect and build something great together.
            </p>
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setShowMeetingForm(true);
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white"
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
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded text-white font-medium"
            >
              Set a Meeting
            </button>
          </form>
        </div>
      </section>

      {/* Conditionally show Meeting Form */}
      {showMeetingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-slate-900 p-8 rounded-lg relative w-full max-w-2xl mx-4">
            <button
              onClick={() => setShowMeetingForm(false)}
              className="absolute top-4 right-4 text-white hover:text-red-500"
            >
              ✕
            </button>
            <MeetingForm
              email={email}
              onSuccess={() => setShowMeetingForm(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPage;
