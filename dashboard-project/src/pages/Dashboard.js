// src/pages/Dashboard.jsx
import React from 'react';
import Chart from '../components/Chart';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Analytic</h1>
        <Chart />
      </main>
    </div>
  );
};

export default Dashboard;
