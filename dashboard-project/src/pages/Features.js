// src/pages/Features.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';

const Features = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Features</h1>
        <p>Here are some features of our application.</p>
      </main>
    </div>
  );
};

export default Features;
