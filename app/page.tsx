"use client";

import { useState } from "react";

export default function Portfolio() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (section: string) => {
    setOpen(open === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-[#00171F] text-white font-sans">
      {/* HEADER */}
      <header className="flex items-center justify-between p-6 bg-[#003459] shadow-lg">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-16 h-16 rounded-full border-2 border-[#00A8E8]"
        />
        <nav className="space-x-6">
          <a href="#skills" className="hover:text-[#00A8E8]">Skills</a>
          <a href="#education" className="hover:text-[#00A8E8]">Education</a>
          <a href="#experience" className="hover:text-[#00A8E8]">Experience</a>
          <a href="#projects" className="hover:text-[#00A8E8]">Projects</a>
          <a href="#contact" className="hover:text-[#00A8E8]">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-8 p-10">
        <div>
          <h1 className="text-4xl font-bold text-[#00A8E8]">Philip V. Sotto</h1>
          <p className="mt-2 text-lg">Bachelor of Science in Computer Science</p>
          <p className="mt-4 text-sm text-gray-300">
            📧 philipsotto@gmail.com <br />
            📍 Butuan City, Philippines
          </p>
        </div>
        <div className="bg-[#003459] p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold text-[#00A8E8]">About Me</h2>
          <p className="mt-4 text-sm">
            This is your personal space to talk about yourself, your goals, and your journey as a developer.
          </p>
        </div>
      </section>

      {/* EXPANDABLE SECTIONS */}
      <section className="p-10 space-y-6">
        {[{ id: "skills", title: "Skills", content: "Coding, Research, Creativity, Marketing" },
          { id: "education", title: "Education", content: "BS Computer Science – Father Saturnino Urios University (Summa Cum Laude)" },
          { id: "experience", title: "Experience", content: "Academic systems, research projects, portfolio works" }]
          .map((item) => (
            <div
              key={item.id}
              id={item.id}
              onClick={() => toggle(item.id)}
              className="bg-[#00A8E8] text-[#00171F] p-6 rounded-2xl cursor-pointer"
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>
              {open === item.id && <p className="mt-4 text-sm">{item.content}</p>}
            </div>
          ))}
      </section>

      {/* PROJECTS */}
      <section id="projects" className="p-10">
        <h2 className="text-3xl font-bold text-[#00A8E8] mb-6">Deployed Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((p) => (
            <div key={p} className="bg-[#003459] p-6 rounded-2xl">
              <h3 className="font-semibold">Project {p}</h3>
              <p className="text-sm mt-2">Project description and live link</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="p-10">
        <h2 className="text-3xl font-bold text-[#00A8E8] mb-6">Contact Me</h2>
        <form
          action="https://formsubmit.co/philipsotto@gmail.com"
          method="POST"
          className="max-w-xl space-y-4"
        >
          <input className="w-full p-3 rounded text-black" name="name" placeholder="Your Name" required />
          <input className="w-full p-3 rounded text-black" name="email" type="email" placeholder="Your Email" required />
          <textarea className="w-full p-3 rounded text-black" name="message" placeholder="Your Message" required />
          <button className="bg-[#00A8E8] text-black px-6 py-2 rounded">Send</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#003654] p-6 text-center">
        <p>🌐 Social links go here (GitHub, LinkedIn, Facebook)</p>
        
      </footer>
    </div>
  );
}
