'use client'; // Add this line

import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/outline'; // Make sure this import is correct

import Head from 'next/head';
import { useRouter } from 'next/router';

import { SearchIcon } from '@heroicons/react/outline'; // Make sure to install heroicons package

import doctorSVG from '../public/doctor.svg';

import syncSVG from '../public/sync.svg';

import bookSVG from '../public/book.svg';



const iconMap = {

  "One Source for Your Health": bookSVG,

  "Always Up-to-Date": syncSVG,

  "Informed Care, Anywhere": doctorSVG

};





export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();




  const handleOpenModal = () => {

    setIsModalOpen(true);

  };



  const handleCloseModal = () => {

    setIsModalOpen(false);

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(false);
    router.push('/form'); // Use the route path, not the file path

  };

  return (

    <div className="font-sans">

      <Head>

        <title>Centralized Medical Information Platform</title>

      </Head>



      <nav className="bg-blue-900 text-white py-4 px-10">

        <div className="container mx-auto flex justify-between items-center">

          <div className="font-bold">THOROUGHLY</div>

          <div className="flex space-x-8">

            <a href="#" className="hover:text-gray-300">Overview</a>

            <a href="#" className="hover:text-gray-300">Solution</a>

            <a href="#" className="hover:text-gray-300">Plans</a>

            <a href="#" className="hover:text-gray-300">Referrals</a>

            <SearchIcon className="h-5 w-5" />

          </div>

        </div>

      </nav>



      <header className="bg-blue-800 text-white text-center py-24">

        <h1 className="text-5xl font-bold mb-6">Centralized Medical Information Access</h1>

        <p className="text-xl mb-6">A single source of truth for all your medical history and consultations.</p>

        <button 

    className="px-6 py-2 rounded" 

    onClick={handleOpenModal}

    style={{ backgroundColor: '#0E1831', color: 'white', borderColor: '#0E1831', hover: { backgroundColor: '#000B21' }}}

>

    Activate Your Account

</button>



        <button className="bg-white hover:bg-gray-100 text-gray-700 px-6 py-2 ml-4 rounded">Sign Up with Google</button>

      </header>



      {/* Feature cards section */}

      <section className="container mx-auto my-12 text-center">

      <h2 className="text-3xl font-bold text-gray-800 mb-6">Trusted by Health Enthusiasts</h2> 

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

          {/* Repeat this block for each feature or creative content */}

          <FeatureCard title="Personalized Health Tracking" description="Track your health parameters over time." />

          <FeatureCard title="Consultation Scheduling" description="Book appointments with healthcare professionals easily." />

          <FeatureCard title="Medical History Overview" description="View your entire medical history in one place." />

          <FeatureCard title="Instant Reports Access" description="Access your medical reports and results instantly." />

          <FeatureCard title="Secure Data Management" description="Your health data is encrypted and secure with us." />

        </div>

      </section>



      {/* How we can help section */}

      <section className="how-we-help container mx-auto">

    <div className="text-center"> 

        <h2 className="text-3xl font-bold mb-6">Take Control of Your Health Data</h2>

        <p className="text-xl mb-8">Our platform centralizes your medical records, giving you a complete and seamless view of your health history.</p>

    </div>



    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 feature-grid-container"> 

    <FeatureBlock title="One Source for Your Health" description="All your reports, tests, and consultations organized in one place." icon="folder-open" /> 

    <FeatureBlock title="Always Up-to-Date" description="New health information automatically integrated into your profile." icon="sync" /> 

    <FeatureBlock title="Informed Care, Anywhere" description="Easily share your complete medical history with any healthcare provider." icon="user-group" /> 

  </div>



      </section>







      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto">
          <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
          <div className="relative bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto">
            <button onClick={handleCloseModal} className="absolute top-2 right-2 px-2 py-1 text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:outline-none">
              <XIcon className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4">Registration</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Full Name</label>
                <input type="text" id="name" className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
                <input type="email" id="email" className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">Password</label>
                <input type="password" id="password" className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
              </div>
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Register
              </button>
            </form>
          </div>
        </div>
      )}


    </div>

  )

}





function FeatureCard({ title, description }) {

  return (

    <div className="p-4 bg-blue-200 rounded-lg shadow-xl feature-card"> 

      <h3 className="font-bold mb-2">{title}</h3>

      <p>{description}</p>

    </div>

  );

}



// In your FeatureBlock.js

function FeatureBlock({ icon, title, description }) {

  const iconToUse = iconMap[title]; // Fetch SVG based on title



  // Construct URLs from the imported SVGS dynamically

  let srcString;

  if(iconToUse === doctorSVG) {

      srcString = './doctor.svg';

  } else if(iconToUse === syncSVG) {

      srcString = './sync.svg';

  } else if(iconToUse === bookSVG) {

      srcString = './book.svg';

  } 



  return (

    <div className="FeatureBlock">

      <div className="h-12 w-12 mx-auto mb-4"> 

        {/* Render the SVG by passing the constructed URL */}

        <img src={srcString} alt={title} /> 

      </div> 

      <div> 

          <h3 className="font-semibold text-lg mb-2">{title}</h3>

          <p>{description}</p>

       </div>

    </div>

  );

}