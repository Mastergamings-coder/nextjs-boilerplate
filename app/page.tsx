"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

export default function Home() {
  const [profilePic, setProfilePic] = useState<string>("/profile-placeholder.png");

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);

      return () => URL.revokeObjectURL(imageUrl);
    },
    []
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 dark:bg-zinc-950 px-4">
      <main className="w-full max-w-3xl rounded-2xl bg-white dark:bg-zinc-900 p-10 shadow-sm space-y-12">

        {/* Profile Header */}
        <header className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <div className="flex flex-col items-center gap-3">
            <Image
              src={profilePic}
              alt="Profile photo of Philip V. Sotto"
              width={120}
              height={120}
              className="rounded-full border border-zinc-200 dark:border-zinc-700 object-cover"
              priority
            />

            <label
              htmlFor="profile-upload"
              className="cursor-pointer text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              Change photo
            </label>

            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
              Philip V. Sotto
            </h1>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              Bachelor of Science in Computer Science
            </p>
          </div>
        </header>

        {/* Education */}
        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            Educational Background
          </h2>

          <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p className="font-medium text-zinc-800 dark:text-zinc-200">
              Father Saturnino Urios University
            </p>
            <p>BS Computer Science · 2022 – 2027</p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            Skills
          </h2>

          <ul className="grid grid-cols-2 gap-2 text-zinc-600 dark:text-zinc-400 list-disc list-inside">
            <li>Coding</li>
            <li>Research</li>
            <li>Creativity</li>
            <li>Marketing</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="border-t border-zinc-200 dark:border-zinc-700 pt-6">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
            Contact Information
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 space-y-1">
            <span className="block">📧 philipsotto@gmail.com</span>
            <span className="block">📍 Butuan City, Philippines</span>
          </p>
        </section>

      </main>
    </div>
  );
}
