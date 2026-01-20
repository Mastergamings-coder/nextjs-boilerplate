"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [profilePic, setProfilePic] = useState<string>("/profile-placeholder.png");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-12 py-24 px-16 bg-white dark:bg-black sm:items-start">

        {/* Profile Header */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <div className="flex flex-col items-center gap-3">
            <Image
              src={profilePic}
              alt="Profile Picture"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <label className="cursor-pointer text-sm text-blue-600 dark:text-blue-400">
              Change Photo
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
              Philip V. Sotto
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Bachelor of Science in Computer Science
            </p>
          </div>
        </div>

        {/* Education Section */}
        <section className="w-full">
          <h2 className="mb-2 text-xl font-semibold text-black dark:text-zinc-50">
            Educational Background
          </h2>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
            <li>
              <strong>Father Saturnino Urios University</strong><br />
              BS Computer Science (2022 – 2027)
            </li>
            {/* Add more education items here */}
          </ul>
        </section>

        {/* Skills Section */}
        <section className="w-full">
          <h2 className="mb-2 text-xl font-semibold text-black dark:text-zinc-50">
            Skills
          </h2>
          <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400">
            <li>Coding</li>
            <li>Research</li>
            <li>Creativity</li>
            <li>Marketing</li>
            {/* Add more skills here */}
          </ul>
        </section>

        {/* Contact Info */}
        <section className="w-full border-t pt-6 border-black/[.08] dark:border-white/[.15]">
          <h2 className="mb-2 text-xl font-semibold text-black dark:text-zinc-50">
            Contact Information
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            📧 philipsotto@gmail.com <br />
            📍 Butuan City, Philippines
          </p>
        </section>

      </main>
    </div>
  );
}
