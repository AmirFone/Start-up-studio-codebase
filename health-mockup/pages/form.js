// src/pages/form.js
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'; // Import useRouter hook from Next.js
export default function Form() {
  const router = useRouter(); // Initialize the router

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Here you would typically send the form data to your server
    // For demonstration, we'll just log to the console
    console.log('Form submitted!');

    // Redirect to the dashboard page after form submission
    router.push('/dashboard');
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
        <Head>
          <title>Medical Form</title>
        </Head>

        <h1 className="text-4xl font-bold text-center mb-10">Medical Information Form</h1>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information Section */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            </div>
            <InputField label="Full Name" id="full-name" type="text" placeholder="John Doe" />
            <InputField label="Date of Birth" id="dob" type="date" />
            <InputField label="Gender" id="gender" type="text" placeholder="Your gender" />
            <InputField label="Address" id="address" type="text" placeholder="123 Main St" />
            <InputField label="Phone Number" id="phone" type="tel" placeholder="(555) 555-5555" />
            <InputField label="Email Address" id="email" type="email" placeholder="john.doe@example.com" />

            {/* Medical History Section */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Medical History</h2>
            </div>
            <TextareaField label="Known Allergies" id="allergies" placeholder="List any known allergies" />
            <TextareaField label="Current Medications" id="medications" placeholder="List any current medications" />
            <TextareaField label="Past Surgeries" id="surgeries" placeholder="Describe any past surgeries" />
            <TextareaField label="Family Medical History" id="family-history" placeholder="Describe family medical history" />

            {/* Emergency Contact Section */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Emergency Contact Details</h2>
            </div>
            <InputField label="Contact Name" id="emergency-contact" type="text" placeholder="Jane Doe" />
            <InputField label="Relationship" id="relationship" type="text" placeholder="Relationship to you" />
            <InputField label="Contact Phone Number" id="emergency-phone" type="tel" placeholder="(555) 555-5555" />

            {/* Submission Button */}
            <div className="md:col-span-2 flex justify-end mt-8">
              <button type="submit" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-chetwode-blue hover:bg-chetwode-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-chetwode-blue">
                Submit Form
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function InputField({ label, id, type, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
      <input type={type} id={id} name={id} required className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-chetwode-blue focus:border-chetwode-blue" placeholder={placeholder} />
    </div>
  );
}

function TextareaField({ label, id, placeholder }) {
  return (
    <div className="md:col-span-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
      <textarea id={id} name={id} rows={4} required className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-chetwode-blue focus:border-chetwode-blue" placeholder={placeholder}></textarea>
    </div>
  );
}
