import React, { useState } from "react";
import { XIcon, SearchIcon, ShieldCheckIcon, UserGroupIcon, ClipboardListIcon, DocumentDownloadIcon, ChatIcon } from "@heroicons/react/outline";
import Head from "next/head";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import collaborationSVG from "../public/collaboration.svg";
import securitySVG from "../public/security.svg";
import efficiencySVG from "../public/efficiency.svg";

// Icon mapping for clarity
const iconMap = {
  "Seamless Collaboration": collaborationSVG,
  "Data Security & Compliance": securitySVG,
  "Operational Efficiency": efficiencySVG,
};

const stats = [
	{ label: 'Providers Joined', value: '1,000+' },
	{ label: 'Patient Records Available', value: '5M+' }, 
	{ label: 'Average Time Saved', value: '2 hours/week' },
	{ label: 'Appointments Scheduled', value: '250K+' },
	{ label: 'Insurers Integrated', value: '50+' }
      ];
      
      const testimonials = [
	{
	  name: 'Dr. Sarah Johnson', 
	  text: 'This platform has been a game-changer for accessing comprehensive patient medical histories.',
	  position: 'Primary Care Physician'
	},
	{
	 name: 'Dr. David Kim',
	 text: 'Being able to instantly view full patient records has greatly improved our ability to provide quality care.',
	 position: 'Cardiologist'
	},
	{
	  name: 'Amy Lewis',
	  text: 'Our claims processing efficiency has increased by over 40% after integrating with the platform.',
	  position: 'Vice President, SunLife Insurance'
	}
      ];
      
      const faqs = [
	{
	  question: 'How does the platform integrate with our existing EHR system?',
	  answer: 'Our flexible API allows easy integration with all major EHR systems.'
	},
	{
	  question: 'Can we customize access permissions for staff?',
	  answer: 'Yes, role-based access controls allow you to customize access.' 
	},
	{
	  question: 'What security measures are in place?',
	  answer: 'Encryption, access controls, audits, vulnerability testing, and HIPAA compliance.'
	}
      ];

export default function ProviderHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
	email: '',
	phone: '',
	message: '',
      });
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  // Handle form input changes
  const handleInputChange = (e) => {
	const { name, value } = e.target;
	setFormData(prevFormData => ({
	  ...prevFormData,
	  [name]: value,
	}));
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
	e.preventDefault();
	setIsModalOpen(true); // Open the modal
      };
    
      // Close the modal
      const closeModal = () => {
	setIsModalOpen(false);
      };
    
    

  return (
	<div className="font-sans">
	  <Head>
	    <title>Centralized Medical Information Platform</title>
	  </Head>
	  
	  {/* Navigation */}
	  <nav className="bg-[#081D25] text-white py-4 px-10">
	    <div className="container mx-auto flex justify-between items-center">
	      <div className="font-bold">THOROUGHLY</div>
    
	      <div className="flex space-x-8">
		<a href="#" className="hover:text-[#99A0B5]">
		  Features
		</a>
    
		<a href="#" className="hover:text-[#99A0B5]">
		  Pricing
		</a>
    
		<a href="#" className="hover:text-[#99A0B5]">
		  About Us
		</a>
    
		<a href="#" className="hover:text-[#99A0B5]">
		  Contact
		</a>
		<button 
		  onClick={handleOpenModal}
		  className="bg-[#124F7F] text-white px-4 py-2 rounded hover:bg-[#065B7F] transition duration-300"
		>
		  Sign Up
		</button>
    
		<SearchIcon className="h-5 w-5" />
	      </div>
	    </div>
	  </nav>
    
	{/* Stats Section */}
	<header className="bg-[#265468] w-full">
	<div className="text-3xl font-bold text-white mb-6 text-center py-12">
	<h2>Our Impact by the Numbers</h2>
	</div>
	<div className="flex justify-around items-center">
	{stats.map((stat, index) => (
	<div key={index} className="text-center p-4">
		<h3 className="text-2xl font-bold">{stat.value}</h3>
		<p className="text-[#99A0B5]">{stat.label}</p>
	</div>
	))}
	</div>
	</header>

    
	  {/* Testimonials Section */}
	  <section className="bg-[#99A0B5] py-12">
	    <div className="container mx-auto">
	      <h2 className="text-3xl font-bold text-[#081D25] mb-6 text-center">
		What Our Partners Are Saying
	      </h2>
	      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{testimonials.map((testimonial, index) => (
		  <div key={index} className="p-4 bg-white rounded-lg shadow-xl m-4">
		    <blockquote className="italic text-[#081D25]">{testimonial.text}</blockquote>
		    <p className="font-bold mt-2 text-[#081D25]">{testimonial.name}</p>
		    <p className="text-sm text-[#081D25]">{testimonial.position}</p>
		  </div>
		              ))}
			      </div>
			    </div>
			  </section>
		    
			  {/* FAQ Section */}
			  <section className="container mx-auto my-12">
			    <h2 className="text-3xl font-bold text-[#081D25] mb-6 text-center">
			      Frequently Asked Questions
			    </h2>
			    <div className="space-y-4">
			      {faqs.map((faq, index) => (
				<div key={index} className="p-4 bg-white rounded-lg shadow-xl m-4">
				  <h3 className="font-bold text-[#081D25]">{faq.question}</h3>
				  <p className="text-[#081D25]">{faq.answer}</p>
				</div>
			      ))}
			    </div>
			  </section>
		    
			<section className="container mx-auto my-12">
			<div className="text-center">
				<h2 className="text-3xl font-bold text-[#081D25] mb-6">
				Get In Touch
				</h2>
				<form onSubmit={handleSubmit} className="space-y-6">
				<div>
				<label htmlFor="email" className="block text-sm font-medium text-gray-700">
				Email Address
				</label>
				<input
				type="email"
				name="email"
				id="email"
				autoComplete="email"
				placeholder="Your Email"
				required
				className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#124F7F] focus:border-[#124F7F]"
				onChange={handleInputChange}
				/>
				</div>
				<div>
				<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
				Phone Number
				</label>
				<input
				type="tel"
				name="phone"
				id="phone"
				autoComplete="tel"
				placeholder="Your Phone Number"
				required
				className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#124F7F] focus:border-[#124F7F]"
				onChange={handleInputChange}
				/>
				</div>
				<div>
				<label htmlFor="message" className="block text-sm font-medium text-gray-700">
				Message
				</label>
				<textarea
				id="message"
				name="message"
				rows={4}
				required
				className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#124F7F] focus:border-[#124F7F]"
				placeholder="Your message..."
				onChange={handleInputChange}
				/>
				</div>
				<div>
				<button
				type="submit"
				className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#124F7F] hover:bg-[#065B7F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#124F7F]"
				>
				Send Message
				</button>
				</div>
				</form>
			</div>
				      {/* Modal for the form submission */}
				      <Transition appear show={isModalOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
				<Transition.Child
				as={Fragment}
				enter="ease-out duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
				>
				<div className="fixed inset-0 bg-[#081D25] bg-opacity-50" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
				<div className="flex min-h-full items-center justify-center p-4 text-center">
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
					<Dialog.Title
					as="h3"
					className="text-lg font-medium leading-6 text-[#081D25]"
					>
					Message Received
					</Dialog.Title>
					<div className="mt-2">
					<p className="text-sm text-[#081D25]">
					Email: {formData.email}
					</p>
					<p className="text-sm text-[#081D25]">
					Phone: {formData.phone}
					</p>
					<p className="text-sm text-[#081D25]">
					Message: {formData.message}
					</p>
					</div>

					<div className="mt-4">
					<button
					type="button"
					className="inline-flex justify-center px-4 py-2 text-sm font-medium rounded-md text-white bg-[#124F7F] border border-transparent hover:bg-[#065B7F] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#065B7F]"
					onClick={closeModal}
					>
					Close
					</button>
					</div>
					</Dialog.Panel>
				</Transition.Child>
				</div>
				</div>
				</Dialog>
			</Transition>
			</section>
			  {/* Footer */}
			  <footer className="bg-[#081D25] text-white py-6">
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
		    