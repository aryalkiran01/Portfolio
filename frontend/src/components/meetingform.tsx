// components/MeetingForm.tsx
import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/api";

const MeetingForm = ({ email, onSuccess }: { email: string; onSuccess: () => void }) => {
  const [form, setForm] = useState({
    topic: "",
    agenda: "",
    presenter: "877717138",
    date: "",
    duration: "",
    timezone: "Asia/Kathmandu",
    participants: email, // default to passed email
  });
  type FormFields =
  | "topic"
  | "agenda"
  | "presenter"
  | "date"
  | "duration"
  | "timezone"
  | "participants";


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createMeeting = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const meetingData = {
        ...form,
        presenter: parseInt(form.presenter, 10),
        duration: parseInt(form.duration, 10),
        participants: form.participants
          .split(",")
          .map((email) => ({ email: email.trim() })),
      };
      await axios.post(`${API_URL}/meetings/create`, meetingData);
      alert("Meeting Created");
      onSuccess();
    } catch {
      alert("Error creating meeting");
    }
  };

  return (
    <form onSubmit={createMeeting} className="bg-slate-800 p-6 rounded mt-6">
      <h3 className="text-white text-lg mb-4 font-semibold">Schedule a Meeting</h3>
      <div className="grid grid-cols-1 gap-4">
        {[
          { name: "topic", type: "text", placeholder: "Topic" },
          { name: "agenda", type: "text", placeholder: "Agenda" },
          { name: "presenter", type: "number", placeholder: "Presenter ID" },
          { name: "date", type: "datetime-local", placeholder: "Date & Time" },
          { name: "duration", type: "number", placeholder: "Duration (minutes)" },
          { name: "timezone", type: "text", placeholder: "Timezone" },
        ].map(({ name, type, placeholder }) => (
          <input
            key={name}
            name={name}
            type={type}
            placeholder={placeholder}
           value={form[name as FormFields]}
            onChange={handleChange}
            required
            className="p-2 rounded bg-gray-900 border border-gray-700 text-white"
          />
        ))}
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Create Meeting
      </button>
    </form>
  );
};

export default MeetingForm;
