import React, { useState } from 'react';
import Head from 'next/head';
import FullCalendar from '@fullcalendar/react'; // Import the FullCalendar component
import dayGridPlugin from '@fullcalendar/daygrid'; // Import the daygrid plugin

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState(new Date()); // Initialize the date state here

// Dummy data for recent activities
const medicalEvents = [
	{ title: 'Doctor Appointment - Dr. Smith', date: '2024-02-10', color: '#00a2e8' },
	{ title: 'Dental Check-up - Dr. White', date: '2024-02-15', color: '#52d726' },
	{ title: 'Vaccination - Clinic', date: '2024-02-20', color: '#ffec00' },
	{ title: 'Physiotherapy Session', date: '2024-02-22', color: '#ff7300' },
	{ title: 'Nutritionist Appointment - Dr. Green', date: '2024-02-25', color: '#e41b17' },
	{ title: 'Eye Examination - Dr. Brown', date: '2024-02-28', color: '#a200ff' },
	{ title: 'Medication Reminder - Prescription Refill', date: '2024-02-05', color: '#ffa8bb' },
	{ title: 'Blood Test - Lab', date: '2024-02-12', color: '#fa78fa' },
	// Add more events as needed
      ];
const recentActivities = [
	'You connected your electronic medical records from Dr. Patel on February 15, 2024',
	'You shared access to your medical history with Dr. Johnson on February 20, 2024', 
	'You received a notification about potential drug interactions on February 25, 2024',
	'Your annual physical with Dr. Lee is coming up on March 1, 2024',
	'You refilled your prescription for medication X on March 5, 2024',
	'You updated your health profile with your latest vitals on March 10, 2024',
	'You received test results from your cardiologist Dr. Singh on March 15, 2024', 
	'You completed your annual wellness screening on March 20, 2024',
	'You have an appointment with your dentist Dr. Yang on April 1, 2024',
	'You connected your fitness tracker data on April 5, 2024'
      ];
      
      // Dummy appointments data
      const appointments = [
	{ date: 'March 1, 2024', doctor: 'Dr. Lee', reason: 'Annual Physical'},
	{ date: 'March 15, 2024', doctor: 'Dr. Johnson', reason: 'Dental Cleaning'},
	{ date: 'April 5, 2024', doctor: 'Dr. Patel', reason: 'Follow-up Appointment'},
	{ date: 'April 20, 2024', doctor: 'Dr. Singh', reason: 'Cardiology Check-Up'},
	{ date: 'May 5, 2024', doctor: 'Dr. Chen', reason: 'Dermatology Appointment'},
	{ date: 'May 15, 2024', doctor: 'Dr. Lee', reason: 'Annual Physical'},
	{ date: 'June 1, 2024', doctor: 'Dr. Patel', reason: 'Follow-up Appointment'},
	{ date: 'June 15, 2024', doctor: 'Dr. Yang', reason: 'Dental Cleaning'},
	{ date: 'July 5, 2024', doctor: 'Dr. Singh', reason: 'Cardiology Check-Up'},
	{ date: 'July 20, 2024', doctor: 'Dr. Chen', reason: 'Dermatology Appointment'},
      ];
      
      // Dummy health tips
      const healthTips = [
	'Drink at least 8 glasses of water per day',
	'Get 30 minutes of exercise daily',
	'Eat more vegetables and fruits',
	'Aim for 7-9 hours of sleep per night',
	'Reduce stress through yoga, meditation',
	'Take vitamins and supplements daily',
	'Stop smoking and limit alcohol intake',
	'Protect yourself from the sun',
	'Brush and floss your teeth twice a day',
	'Listen to your body and get preventative check-ups'
      ];
      
      // Dummy health history data 
      const healthHistory = [
	{
	  date: 'January 5, 2024',
	  doctor: 'Dr. Patel', 
	  type: 'Primary Care',
	  report: 'Routine physical completed. Cholesterol levels remain high.'
	},
	{
	  date: 'February 1, 2024',
	  doctor: 'Dr. Chen',
	  type: 'Dermatology',
	  report: 'Skin cancer screening completed. No concerns detected.'
	},
	{
	  date: 'February 15, 2024', 
	  doctor: 'Dr. Lee',
	  type: 'Ophthalmology',
	  report: 'Eye exam completed. Updated eyeglasses prescription.'
	},
	{
	  date: 'March 5, 2024',
	  doctor: 'Dr. Singh',
	  type: 'Cardiology', 
	  report: 'EKG normal. Blood pressure slightly elevated.'
	},
	{
	  date: 'March 20, 2024', 
	  doctor: 'Dr. Johnson',
	  type: 'Dentistry',
	  report: 'Dental cleaning completed. No new cavities.'
	},
	{
	  date: 'April 10, 2024',
	  doctor: 'Dr. Patel',
	  type: 'Primary Care',
	  report: 'Annual physical completed. In good health.'
	},
	{
	  date: 'May 1, 2024',
	  doctor: 'Dr. Chen',
	  type: 'Dermatology',
	  report: 'Skin cancer screening done. Mole removal recommended.'
	},
	{
	  date: 'June 5, 2024',
	  doctor: 'Dr. Lee',
	  type: 'Ophthalmology', 
	  report: 'Cataract check completed. Vision unchanged.'
	},
	{  
	  date: 'July 15, 2024',
	  doctor: 'Dr. Singh',
	  type: 'Cardiology',
	  report: 'Stress test normal. No heart issues detected.'
	},
	{
	  date: 'August 1, 2024',
	  doctor: 'Dr. Johnson', 
	  type: 'Dentistry', 
	  report: 'Cavity filled in molar tooth.'
	}
      ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [isSchedulingOpen, setIsSchedulingOpen] = useState(false);

  const toggleSchedulingModal = () => {
    setIsSchedulingOpen(!isSchedulingOpen);
  };
  const onChange = (newDate) => {
	setDate(newDate);
      };

  return (
	<div>
	  <Head>
	    <title>Dashboard | Health Portal</title>
	  </Head>
	  <div className="min-h-screen bg-gray-100">
	    {/* Header */}
	    <div className="bg-indigo-900 text-white text-center py-8">
	      <h1 className="text-5xl font-bold">Your Health Dashboard</h1>
	      <p className="mt-3 text-lg">Manage your health records and appointments</p>
	    </div>
    
	    <div className="container mx-auto my-8 p-4">
	      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
		{/* Recent Activities & Upcoming Appointments */}
		<div className="col-span-2">
		  <div className="flex flex-wrap -mx-4">
		    {/* Recent Activities */}
		    <div className="w-full lg:w-1/2 px-4 my-4">
		      <div className="bg-white p-6 rounded-lg shadow">
			<h2 className="text-2xl font-semibold mb-3">Recent Activities</h2>
			<ul className="list-disc space-y-2 pl-5 text-gray-700">
			  {recentActivities.map((activity, index) => (
			    <li key={index}>{activity}</li>
			  ))}
			</ul>
		      </div>
		    </div>
    
		    {/* Upcoming Appointments */}
		    <div className="w-full lg:w-1/2 px-4 my-4">
		      <div className="bg-white p-6 rounded-lg shadow">
			<h2 className="text-2xl font-semibold mb-3">Upcoming Appointments</h2>
			<div className="divide-y divide-gray-200">
			  {appointments.map((appointment, index) => (
			    <div key={index} className="py-2">
			      <p className="text-lg text-indigo-600">{appointment.date}</p>
			      <p>{appointment.doctor} - {appointment.reason}</p>
			    </div>
			  ))}
			</div>
		      </div>
		    </div>
		  </div>
		</div>
    
		{/* Health Tips & Health Records */}
		<div className="col-span-1">
		  {/* Health Tips */}
		  <div className="bg-white p-6 rounded-lg shadow mb-4">
		    <h2 className="text-2xl font-semibold mb-3">Health Tips</h2>
		    <ul className="mt-3 space-y-2">
		      {healthTips.map((tip, index) => (
			<li key={index}>{tip}</li>
		      ))}
		    </ul>
		  </div>
    
		  {/* Health Records Card */}
		  <div className="bg-white p-6 rounded-lg shadow-md">
		    <h2 className="text-2xl font-bold mb-2">Health Records</h2>
		    <p className="text-gray-600">Access your medical history and records here.</p>
		    <button
		      onClick={toggleModal}
		      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
		    >
		      View Records
		    </button>
		  </div>
		</div>
    
		{/* Appointment Scheduling Card */}
		<div className="col-span-1">
		  <div className="bg-white p-6 rounded-lg shadow-md">
		    <h2 className="text-2xl font-bold mb-2">Schedule an Appointment</h2>
		    <p className="text-gray-600">Schedule new doctor consults.</p>
		    <button
		      onClick={toggleSchedulingModal}
		      className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300"
		    >
		      Schedule Now
		    </button>
		  </div>
		</div>
	      </div>
	    </div>
    
	    {/* Health History Modal */}
	    {isModalOpen && (
	      <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex">
		<div
		  className="relative p-8 bg-white w-full max-w-2xl m-auto flex-col flex rounded-lg"
		  onClick={(e) => e.stopPropagation()}
		>
		  <span
		    className="absolute top-0 right-0 p-4"
		    onClick={toggleModal}
		  >
		    <button className="text-2xl font-semibold text-gray-800">&times;</button>
		  </span>
		  <h2 className="text-2xl font-semibold mb-4">Health History</h2>
		  <div className="overflow-y-scroll h-96">
		    <ul className="list-disc space-y-4 pl-5 text-gray-700">
		      {healthHistory.map((item, index) => (
			<li key={index} className="text-lg">
			  <p className="text-blue-600">{item.date}</p>
			  <p>{item.doctor} - {item.type}</p>
			  <p>{item.report}</p>
			</li>
		      ))}
		    </ul>
		  </div>
		</div>
	      </div>
	    )}
    
	    {/* Appointment Scheduling Modal */}
	    {isSchedulingOpen &&  (
          <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div
              className="relative p-8 bg-white w-full max-w-lg m-auto flex-col flex rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className="absolute top-0 right-0 p-4 cursor-pointer"
                onClick={toggleSchedulingModal}
              >
                <button className="text-2xl font-semibold text-gray-800">&times;</button>
              </span>
              <h2 className="text-2xl font-semibold mb-4">Schedule an Appointment</h2>

              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                weekends={true}
                events={medicalEvents}
              />
            </div>
          </div>
        )}
	  </div>
	</div>
      );
    };
    
    export default Dashboard;