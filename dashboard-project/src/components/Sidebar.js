// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full p-4">
      <ul>
        <li className="mb-2"><a href="/" className="hover:underline text-black">Users</a></li>
        <li><a href="/features" className="hover:underline text-black">Features</a></li>
        <li><a href="/pricing" className="hover:underline text-black">Pricing</a></li>
        <li><a href="/integration" className="hover:underline text-black">Integration</a></li>
        <li><a href="/setting" className="hover:underline text-black">Setting</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;