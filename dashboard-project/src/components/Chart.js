import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

const ChartComponent = () => {
  const lineData = {
    labels: ['Jan1', 'Jan8', 'Jan16', 'Jan24', 'Jan31', 'Feb8', 'Feb16', 'Feb24'],
    datasets: [
      {
        label: 'Completed tasks over time',
        data: [50, 100, 150, 200, 180, 220, 210, 230],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'JavaScript',
        data: [40, 45, 50, 55, 40, 35, 30, 70, 60, 50, 55, 60],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'CSS',
        data: [20, 25, 30, 35, 25, 20, 15, 40, 35, 30, 35, 40],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'HTML',
        data: [10, 15, 20, 25, 15, 10, 5, 30, 25, 20, 25, 30],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ['JavaScript', 'HTML', 'CSS'],
    datasets: [
      {
        data: [45, 30, 45],
        backgroundColor: ['rgba(153, 102, 255, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)'],
        borderColor: ['rgba(153, 102, 255, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const chartStyle = {
    width: '45%',
    height: '300px',
    margin: '20px',
  };

  const tableStyle = {
    width: '45%',
    margin: '20px', // 
    borderCollapse: 'collapse',
  };

  const cellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  };

  const headerStyle = {
    marginBottom: '20px', 
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      <div className="chart-container" style={chartStyle}>
        <h3 style={headerStyle}>Website Visitors</h3>
        <Pie data={pieData} options={chartOptions} />
      </div>
      <div className="chart-container" style={chartStyle}>
        <h3 style={headerStyle}>Revenue by Customer Type</h3>
        <Bar data={barData} options={chartOptions} />
      </div>
      <div className="chart-container" style={tableStyle}>
        <h3 style={headerStyle}>Product Sales</h3>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th style={cellStyle}>Product</th>
              <th style={cellStyle}>No of Viewer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellStyle}>JavaScript</td>
              <td style={cellStyle}>45</td>
            </tr>
            <tr>
              <td style={cellStyle}>HTML</td>
              <td style={cellStyle}>30</td>
            </tr>
            <tr>
              <td style={cellStyle}>CSS</td>
              <td style={cellStyle}>25</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="chart-container" style={chartStyle}>
        <h3 style={headerStyle}>Completed Tasks Over Time</h3>
        <Line data={lineData} options={chartOptions} />
      </div>
    </div>
  );
};

export default ChartComponent;
