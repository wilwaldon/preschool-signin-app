// src/RegisterChildForm.js
import React, { useState } from 'react';
import main from './SplashScreen'; // Make sure to have this component


const RegisterChildForm = ({ onRegister }) => {
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [childPhoto, setChildPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!childName || !childAge || !childPhoto) {
      alert("Please fill in all fields and select a photo.");
      return;
    }
    onRegister({ name: childName, age: childAge, photo: childPhoto });
    setChildName('');
    setChildAge('');
    setChildPhoto(null);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setChildPhoto(e.target.result); // Sets photo as base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-8">
    <form onSubmit={handleSubmit}>
        <div className="mt-2">
        <input
        type="text"
        placeholder="Child's Name"
        className="border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
        value={childName}
        onChange={(e) => setChildName(e.target.value)}
        required
      />
      </div>
      <div className="mt-2">
      <input
        type="number"
        placeholder="Child's Age"
        value={childAge}
        onChange={(e) => setChildAge(e.target.value)}
        required
        className="border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
      />

      </div>
      <div className="mt-2">
      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        required
        className="border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
      />
      </div>
      <div className="mt-2">
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-initial w-64">Register Child</button>
      </div>
    </form>
    </div>
  );
};

export default RegisterChildForm;
