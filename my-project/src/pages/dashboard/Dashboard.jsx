import { Card } from 'flowbite-react';
import { IoAlertCircle, IoStatsChart, IoLocationSharp, IoShieldCheckmark } from 'react-icons/io5';
import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

// List of all Indian states with short names
const states = [
  'AP', 'AR', 'AS', 'BR', 'CT',
  'GA', 'GJ', 'HR', 'HP', 'JH', 'KA',
  'KL', 'MP', 'MH', 'MN', 'ML', 'MZ',
  'NL', 'OD', 'PB', 'RJ', 'SK', 'TN', 
  'TG', 'TR', 'UP', 'UK', 'WB'
];

// Generate random values for each state
const values = Array.from({ length: states.length }, () => Math.floor(Math.random() * 1000));

export default function Dashboard() {
  return (
    <div className='mt-16 mx-4 mb-20'>
      {/* Cards */}
      <div className='flex flex-wrap justify-between gap-4'>
        {/* Ongoing Alerts Card */}
        <Card className="w-80 h-64 shadow-lg flex flex-col items-center text-center p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <IoAlertCircle className="text-red-500 text-6xl mb-2 mx-auto" />
          <h1 className="text-lg font-semibold mb-2 animate-heading">Ongoing Alerts</h1>
          <p className="text-xl">Number of Alerts: <span className="font-bold">12</span></p>
        </Card>

        {/* Total Alerts Card */}
        <Card className="w-80 h-64 shadow-lg flex flex-col items-center text-center p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <IoStatsChart className="text-blue-500 text-6xl mb-2 mx-auto" />
          <h1 className="text-lg font-semibold mb-2 animate-heading">Total Alerts</h1>
          <p className="text-xl">Total Alerts: <span className="font-bold">45</span></p>
        </Card>

        {/* Red Zone Card */}
        <Card className="w-80 h-64 shadow-lg flex flex-col items-center text-center p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <IoAlertCircle className="text-red-500 text-6xl mb-2 mx-auto" /> {/* Increased size to 9xl */}
          <h1 className="text-lg font-semibold mb-2 animate-heading">Red Zone : Assam</h1>
          <p className="text-xl">Number: <span className="font-bold">40</span></p>
        </Card>

        {/* Safe Haven Zone Card */}
        <Card className="w-80 h-64 shadow-lg flex flex-col items-center text-center p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <IoShieldCheckmark className="text-green-500 text-9xl mb-2 mx-auto" /> {/* Increased size to 9xl */}
          <h1 className="text-lg font-semibold mb-2 animate-heading">Safe Zone : Uttar Pradesh</h1>
          <p className="text-xl">Number: <span className="font-bold">5</span></p>
        </Card>
      </div>

      {/* Chart Container */}
      <div className="mt-16 px-4 sm:px-6 lg:px-8 flex justify-center">
        <Card className="w-full max-w-7xl shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-4 text-center animate-heading">State-wise Number of Alerts</h1>
          <div className="w-full">
            <BarChart
              width={1000}
              height={500}
              series={[
                { data: values, label: 'Number of Alerts', id: 'valueId' }
              ]}
              xAxis={[
                { 
                  data: states, 
                  scaleType: 'band',
                  bandPadding: 2, // Adjust this value to increase space between bars
                  tickLabelProps: () => ({ 
                    angle: -45,
                    textAnchor: 'end',
                    dx: -5,
                    dy: 5
                  })
                }
              ]}
              margin={{ left: 50, right: 50, top: 20, bottom: 100 }}
            />
          </div>
        </Card>
      </div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-heading {
          animation: fadeIn 1s ease-in-out, slideIn 0.5s ease-in-out, pulse 1.5s infinite;
        }

        .transition-transform {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .hover:scale-105:hover {
          transform: scale(1.05);
        }

        .hover:shadow-2xl:hover {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
