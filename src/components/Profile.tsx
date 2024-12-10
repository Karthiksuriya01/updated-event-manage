import React, { useState } from 'react';

export function Profile() {
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [bgPic, setBgPic] = useState<string | null>(null);

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      setProfilePic(file);
    }
  };

  const handleBgPicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      setBgPic(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 lg:px-8">
      <div className="relative">
        {bgPic && (
          <div
            className="absolute inset-0 bg-cover bg-center h-48"
            style={{ backgroundImage: `url(${bgPic})` }}
          />
        )}
        <div className="relative z-10 bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col items-center">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white shadow-md"
              />
            ) : (
              <div className="w-24 h-24 rounded-full border-4 border-white shadow-md bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="mt-2"
            />
            <h1 className="text-xl font-bold mt-4 md:text-2xl">Shiryoku</h1>
            <p className="text-gray-600 text-sm md:text-base">Product Designer / Digital Creator</p>
            <p className="mt-4 text-center text-sm md:text-base">
              Hi, I'm Shiryoku, an independent visual designer from London, UK. This is my tiny space on the Internet where I share my work archives simple websites / interfaces / design assets.
            </p>
            <h2 className="text-lg font-semibold mt-6 md:text-xl">Work Experience</h2>
            <p className="mt-2 text-sm md:text-base">
              <strong>2024 — Now</strong> <br />
              Lead Product Designer at ACME <br />
              Remote <br />
              Spearheading the design of innovative solutions that enhance user experiences and align with business goals.
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={handleBgPicChange}
              className="mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 