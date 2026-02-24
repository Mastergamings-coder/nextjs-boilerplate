"use client";

import { useState } from "react";

/* =========================
   🔧 EDITABLE DATA SECTION
   ========================= */

const profile = {
  name: "Philip V. Sotto",
  title: "Computer Science Graduate",
  location: "Butuan City, Philippines",
  email: "philipsotto@gmail.com",
  bio: "Passionate about building clean web apps and solving real-world problems with technology.",
};

const skills = ["Coding", "Research", "Creativity", "Marketing"];

const projects = [
  { title: "Portfolio Website", desc: "Built with Next.js + Tailwind" },
  { title: "Network Simulation", desc: "Configured OSPF, VLAN, NAT" },
];

/* =========================
   🧠 COMPONENT
   ========================= */

export default function Portfolio() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendMessage = async (e: any) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });
    alert("Message sent!");
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* =========================
         🖼 COVER PHOTO
         Replace image below
         ========================= */}
      <div className="h-64 bg-blue-600 w-full"></div>

      {/* =========================
         👤 PROFILE CARD
         ========================= */}
      <div className="max-w-5xl mx-auto bg-white shadow rounded-xl -mt-20 p-6 relative">

        {/* Profile Picture */}
        <img
          src="/profile.jpg" // 🔧 replace image
          className="w-32 h-32 rounded-full border-4 border-white absolute -top-16"
        />

        <div className="ml-36">
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <p className="text-gray-600">{profile.title}</p>
          <p className="text-sm text-gray-500">{profile.location}</p>
        </div>

      </div>

      {/* =========================
         📚 MAIN CONTENT GRID
         ========================= */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mt-6 p-4">

        {/* ===== LEFT COLUMN ===== */}
        <div className="space-y-6">

          {/* ABOUT */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold mb-2">About</h2>
            <p className="text-sm text-gray-600">{profile.bio}</p>
          </div>

          {/* SKILLS */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold mb-2">Skills</h2>
            <ul className="text-sm text-gray-600 space-y-1">
              {skills.map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* ===== CENTER COLUMN ===== */}
        <div className="md:col-span-2 space-y-6">

          {/* PROJECTS */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold mb-4">Projects</h2>
            <div className="space-y-3">
              {projects.map((p) => (
                <div key={p.title} className="border p-3 rounded-lg">
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* =========================
             📩 CONTACT FORM (VISIBLE)
             ========================= */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold mb-4">Contact Me</h2>

            <form onSubmit={sendMessage} className="space-y-3">
              <input
                name="name"
                placeholder="Your Name"
                className="w-full border p-2 rounded"
                onChange={handleChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full border p-2 rounded"
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="w-full border p-2 rounded"
                onChange={handleChange}
                required
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}