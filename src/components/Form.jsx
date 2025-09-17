import { useState, useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Form() {
  const { addUser } = useContext(UserContext);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: { name: "" } });

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(form);
    setForm({ name: "", email: "", phone: "", company: { name: "" } });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-lg mb-6 text-white animate-fade-in"
    >
      <h2 className="text-2xl font-bold mb-4 text-center"> Create New User </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="border-none p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-400 outline-none transition-all duration-300"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border-none p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-400 outline-none transition-all duration-300"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="border-none p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-400 outline-none transition-all duration-300"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          className="border-none p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-400 outline-none transition-all duration-300"
          placeholder="Company"
          value={form.company.name}
          onChange={(e) => setForm({ ...form, company: { name: e.target.value } })}
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-yellow-400 text-gray-900 font-semibold px-4 py-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      >
         Add User
      </button>
    </form>
  );
}
