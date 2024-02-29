"use client";

import React, { useState, useEffect } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/outline";
import Head from "next/head";
import { useRouter } from "next/router";
import { Hub } from "aws-amplify/utils";
import { signInWithRedirect, getCurrentUser } from "aws-amplify/auth";
import { Amplify } from "aws-amplify";
import { signIn, signUp } from 'aws-amplify/auth';
import awsconfig from "../src/aws-exports";
import doctorSVG from "../public/doctor.svg";
import syncSVG from "../public/sync.svg";
import bookSVG from "../public/book.svg";

Amplify.configure(awsconfig);

// Icon mapping for clarity
const iconMap = {
  "One Source for Your Health": bookSVG,
  "Always Up-to-Date": syncSVG,
  "Informed Care, Anywhere": doctorSVG,
};

export default function Home() {
  const [isEmailVerificationRequired, setIsEmailVerificationRequired] = useState(false);
  
  
  Hub.listen("auth", async ({ payload }) => {
    switch (payload.event) {
      case "signInWithRedirect":
        try {
          const user = await getCurrentUser();
          console.log(user.username);
          // Perform additional logic after successful sign-in if needed
        } catch (error) {
          console.error(
            "Error retrieving current user after sign-in redirect",
            error,
          );
        }
        break;
      case "signInWithRedirect_failure":
        console.error("Sign in redirection failed", payload.data);
        // Handle sign-in failure here
        break;
      case "customOAuthState":
        const customState = payload.data;
        console.log(customState);
        // Handle custom state logic here
        break;
      // Add other cases as needed
    }
  });

  function handleSignInWithGoogle() {
    signInWithRedirect({ provider: "Google" });
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            <a href="#" className="hover:text-gray-300">
              Overview
            </a>

            <a href="#" className="hover:text-gray-300">
              Solution
            </a>

            <a href="#" className="hover:text-gray-300">
              Plans
            </a>

            <a href="#" className="hover:text-gray-300">
              Referrals
            </a>

            <SearchIcon className="h-5 w-5" />
          </div>
        </div>
      </nav>

      <header className="bg-blue-800 text-white text-center py-24">
        <h1 className="text-5xl font-bold mb-6">
          Centralized Medical Information Access
        </h1>

        <p className="text-xl mb-6">
          A single source of truth for all your medical history and
          consultations.
        </p>

        <button
          className="bg-green-600 hover:bg-green-00 text-white px-6 py-2 ml-4 rounded"
          onClick={handleSignInWithGoogle}
        >
          Sign Up with Google
        </button>
      </header>

      {/* Feature cards section */}

      <section className="container mx-auto my-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Trusted by Health Enthusiasts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Repeat this block for each feature or creative content */}

          <FeatureCard
            title="Personalized Health Tracking"
            description="Track your health parameters over time."
          />

          <FeatureCard
            title="Consultation Scheduling"
            description="Book appointments with healthcare professionals easily."
          />

          <FeatureCard
            title="Medical History Overview"
            description="View your entire medical history in one place."
          />

          <FeatureCard
            title="Instant Reports Access"
            description="Access your medical reports and results instantly."
          />

          <FeatureCard
            title="Secure Data Management"
            description="Your health data is encrypted and secure with us."
          />
        </div>
      </section>

      {/* How we can help section */}

      <section className="how-we-help container mx-auto ">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Take Control of Your Health Data
          </h2>

          <p className="text-xl mb-8">
            Our platform centralizes your medical records, giving you a complete
            and seamless view of your health history.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 feature-grid-container">
          <FeatureBlock
            title="One Source for Your Health"
            description="All your reports, tests, and consultations organized in one place."
            icon="folder-open"
          />

          <FeatureBlock
            title="Always Up-to-Date"
            description="New health information automatically integrated into your profile."
            icon="sync"
          />

          <FeatureBlock
            title="Informed Care, Anywhere"
            description="Easily share your complete medical history with any healthcare provider."
            icon="user-group"
          />
        </div>
      </section>

      {isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto">
    <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
    <div className="relative bg-white p-8 rounded-lg shadow-xl max-w-lg mx-auto"> {/* Increased max-width for larger form */}
      <button
        onClick={handleCloseModal}
        className="absolute top-2 right-2 px-2 py-1 text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:outline-none"
      >
        <XIcon className="h-6 w-6" />
      </button>
      <h3 className="text-2xl font-bold mb-4">Registration</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="phone_number" className="block text-gray-700 font-semibold mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone_number"
            required
            // pattern="[+][0-9]{11,14}" // E.164 format
            placeholder="+12345678900" // Example placeholder in E.164 format
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </form>
    </div>
  </div>
)}

{isEmailVerificationRequired && (
  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto">
    <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
    <div className="relative bg-white p-8 rounded-lg shadow-xl max-w-lg mx-auto">
      <h3 className="text-2xl font-bold mb-4">Verify Your Email</h3>
      <p>Please check your email for the verification code.</p>
      <form onSubmit={handleEmailVerificationSubmit} className="space-y-4">
        <div>
          <label htmlFor="verificationCode" className="block text-gray-700 font-semibold mb-1">
            Verification Code
          </label>
          <input
            type="text"
            id="verificationCode"
            name="verificationCode"
            required
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Verify Email
        </button>
      </form>
    </div>
  </div>
)} 	  


<footer className="bg-[#081D25] text-white py-6 mt-10">
    <div className="container mx-auto flex justify-between items-center">
      <p>© {new Date().getFullYear()} THOROUGHLY. All rights reserved.</p>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-[#99A0B5]">Privacy Policy</a>
        <a href="#" className="hover:text-[#99A0B5]">Terms of Service</a>
        <a href="#" className="hover:text-[#99A0B5]">Contact Us</a>
      </div>
    </div>
  </footer>



    </div>
  );
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

  if (iconToUse === doctorSVG) {
    srcString = "./doctor.svg";
  } else if (iconToUse === syncSVG) {
    srcString = "./sync.svg";
  } else if (iconToUse === bookSVG) {
    srcString = "./book.svg";
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