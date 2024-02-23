"use client";
import React, { useState, useEffect } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/outline";
import Head from "next/head";
import { useRouter } from "next/router";
import { Hub } from "aws-amplify/utils";
import { signInWithRedirect, getCurrentUser } from "aws-amplify/auth";
import { Amplify } from "aws-amplify";
import { signIn, signUp } from "aws-amplify/auth";
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
  const { user, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailVerificationRequired, setIsEmailVerificationRequired] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleEmailVerificationSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const code = data.get("verificationCode"); // Assuming 'verificationCode' is the name attribute in your form
    await handleEmailConfirmation({ username: "fnkqewfjwe", code });
  };

  async function handleEmailConfirmation({ username, code }) {
    try {
      await confirmSignUp(username, code);
      console.log("Email verified successfully");
      // You can now sign in the user or redirect them to the sign-in page
    } catch (error) {
      console.error("Error confirming sign up", error);
    }
  }

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

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await getCurrentUser();
        console.log("Current User:", user);
        // Handle the signed in user information
      } catch (error) {
        console.error("Error fetching current user", error);
      }
    };

    checkUser();
  }, []);

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const user = await signIn(email, password);
      setUser(user); // Update the global user state
      router.push('/dashboard'); // Redirect to a dashboard or another page
    } catch (error) {
      console.error("Error signing in", error);
      // Handle error, show error message to user
    }
  };

  const handleSignOut = () => {
    signOut();
  };

  function handleSignInWithGoogle() {
    signInWithRedirect({ provider: "Google" });
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    const username = email; // If you are using the email as the username
    const phone_number = data.get('phone_number');

    try {
      const { userSub } = await signUp({
        username,
        password,
        attributes: {
          email,
          phone_number, // optional - ensure it's in E.164 format
        },
      });
      console.log("Sign up successful, userSub:", userSub);
      // Redirect to form page after successful sign up
      router.push('/form'); // Replace '/form' with your form page route
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const name = data.get("name");
    const phone_number = data.get("phone_number");

    // Make sure the phone number is in E.164 format
    const formattedPhoneNumber = phone_number.startsWith('+') ? phone_number : `+1${phone_number}`;

    try {
      // Sign up the new user using the signUp API from Amplify
      const { isSignUpComplete, userId, nextStep }= await signUp({
        username: email, // Username will be the email
        password,
        options: {
          userAttributes: {
            email, // Email is required
            'custom:name': name, // Optional: Full name, assuming you have configured a custom attribute
            phone_number: formattedPhoneNumber, // Optional: Phone number in E.164 format
          },
          autoSignIn: {
            enabled: true, // If you want to enable auto sign-in for the user after successful signup
          }
        }
      });
      console.log("Sign up successful, userId:", userId);

      // Redirect to the form page after successful sign up
      router.push('/form'); // Replace '/form' with the actual path to your form page
    } catch (error) {
      console.error("Error during sign up:", error);
      // Handle sign up errors and provide feedback to the user
    }
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
          className="px-6 py-2 rounded"
          onClick={handleOpenModal}
          style={{
            backgroundColor: "#0E1831",
            color: "white",
            borderColor: "#0E1831",
            hover: { backgroundColor: "#000B21" },
          }}
        >
          Activate Your Account
        </button>

        <button
          className="bg-white hover:bg-gray-100 text-gray-700 px-6 py-2 ml-4 rounded"
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

      <section className="how-we-help container mx-auto">
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
          <div className="relative bg-white p-8 rounded-lg shadow-xl max-w-lg mx-auto">
            {" "}
            {/* Increased max-width for larger form */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 px-2 py-1 text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:outline-none"
            >
              <XIcon className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4">Registration</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-1"
                >
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
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-1"
                >
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
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-semibold mb-1"
                >
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
                <label
                  htmlFor="phone_number"
                  className="block text-gray-700 font-semibold mb-1"
                >
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
            <form
              onSubmit={handleEmailVerificationSubmit}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="verificationCode"
                  className="block text-gray-700 font-semibold mb-1"
                >
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
