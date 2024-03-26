import React, { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css';

const LogInChild = () => {
  const [childName, setChildName] = useState('');
  const [parentName, setParentName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
  const sigPad = useRef({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming you have validation or API call here
    console.log('Child Name:', childName);
    console.log('Parent Name:', parentName);
    toast.success('Login Successful!'); // Display success message
    setIsLoggedIn(true); // Update login status
    // Clear the form and signature pad
    setChildName('');
    setParentName('');
    sigPad.current.clear();
  };

  return (
    <div className="container mx-auto p-4">
  <div className="grid grid-cols-2 gap-4">
    <div className="max-w-lg my-10 bg-white p-8">
      <ToastContainer />
      <h2 className="text-2xl font-bold text-center mb-6">Log In Child</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="childName" className="text-sm font-medium">Child's Name:</label>
          <input
            type="text"
            id="childName"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300"
            required
          />
        </div>
        <div>
          <label htmlFor="parentName" className="text-sm font-medium">Parent's Name:</label>
          <input
            type="text"
            id="parentName"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium">Signature:</label>
          <SignatureCanvas
            penColor="black"
            canvasProps={{className: 'sigCanvas mt-1 w-full border border-gray-300', height: 100}}
            ref={sigPad}
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2  transition duration-300 ${isLoggedIn ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
          disabled={isLoggedIn} // Disable button when logged in
        >
          {isLoggedIn ? 'Logged In' : 'Log In'} {/* Change button text based on login status */}
        </button>
      </form>
    </div>
    <div className="max-w-lg my-10 bg-white p-8">
      <img src="https://images.unsplash.com/photo-1613950190144-4f2a84c75e8c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="kids playing" className="h-48 w-full object-cover md:h-full" />
    </div>
    </div>
    </div>
  );
};

export default LogInChild;
