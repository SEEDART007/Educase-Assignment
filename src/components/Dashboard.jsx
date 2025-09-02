import React from "react";

export default function Dashboard() {
  return (
    <div className="w-full max-w-lg p-6 bg-white shadow rounded-2xl">
      <h2 className="text-xl font-bold mb-6">Account Settings</h2>

      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-6">
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="w-20 h-20 rounded-full mb-4 sm:mb-0"
        />
        <div>
          <h3 className="font-bold">Marry Doe</h3>
          <p className="text-gray-500">Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="text-gray-500 text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam.
      </p>
    </div>
  );
}
