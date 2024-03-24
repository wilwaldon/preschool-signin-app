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
    <div className="max-w-md mx-auto my-10 bg-white p-8 rounded-lg shadow-md">
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium">Signature:</label>
          <SignatureCanvas
            penColor="black"
            canvasProps={{className: 'sigCanvas mt-1 w-full border border-gray-300 rounded-md', height: 100}}
            ref={sigPad}
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 rounded-md transition duration-300 ${isLoggedIn ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
          disabled={isLoggedIn} // Disable button when logged in
        >
          {isLoggedIn ? 'Logged In' : 'Log In'} {/* Change button text based on login status */}
        </button>
      </form>
    </div>
  );
};

export default LogInChild;
