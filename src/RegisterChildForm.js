import React, { useState } from 'react';

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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className='font-bold font-sans text-5xl mb-10 text-orange-500'>Log My Kid</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <input
          type="text"
          placeholder="Child's Name"
          className="w-full mb-4 border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-full shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 bg-slate-50"
          value={childName}
          onChange={(e) => setChildName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Child's Age"
          className="w-full mb-4 border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-full shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600  bg-slate-50"
          value={childAge}
          onChange={(e) => setChildAge(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          className="w-full mb-4 border-0 bg-transparent py-1.5 pl-5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-full shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 bg-slate-50"
          onChange={handlePhotoChange}
          required
        />
        <button type="submit" className="w-full bg-purple text-white font-bold py-4 px-4 rounded-full">Register Child</button>
      </form>
    </div>
  );
};

export default RegisterChildForm;