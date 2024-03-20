import React, { useState } from 'react';

const RegisterChildForm = ({ onRegister }) => {
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [childPhoto, setChildPhoto] = useState(null);
  const [childAddress, setChildAddress] = useState('');
  const [medicalIssues, setMedicalIssues] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [allergies, setAllergies] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!childName || !childAge || !childPhoto || !childAddress || !emergencyContact) {
      alert("Please fill in all required fields and select a photo.");
      return;
    }
    onRegister({
      name: childName,
      age: childAge,
      photo: childPhoto,
      address: childAddress,
      medicalIssues: medicalIssues,
      emergencyContact: emergencyContact,
      allergies: allergies
    });
    // Reset all fields
    setChildName('');
    setChildAge('');
    setChildPhoto(null);
    setChildAddress('');
    setMedicalIssues('');
    setEmergencyContact('');
    setAllergies('');
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setChildPhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const inputStyle = "w-full mb-4 border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-full shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 bg-slate-50";

  return (
    <div className="flex flex-col items-center justify-center mt-20 pb-20">
        <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <input type="text" placeholder="Child's Name" value={childName} onChange={(e) => setChildName(e.target.value)} required className={inputStyle} />
        <input type="number" placeholder="Child's Age" value={childAge} onChange={(e) => setChildAge(e.target.value)} required className={inputStyle} />
        <input type="file" accept="image/*" onChange={handlePhotoChange} required className={inputStyle} />
        <input type="text" placeholder="Child's Address" value={childAddress} onChange={(e) => setChildAddress(e.target.value)} required className={inputStyle} />
        <input type="text" placeholder="Medical Issues (if any)" value={medicalIssues} onChange={(e) => setMedicalIssues(e.target.value)} className={inputStyle} />
        <input type="text" placeholder="Emergency Contact" value={emergencyContact} onChange={(e) => setEmergencyContact(e.target.value)} required className={inputStyle} />
        <input type="text" placeholder="Allergies (if any)" value={allergies} onChange={(e) => setAllergies(e.target.value)} className={inputStyle} />
        <button type="submit" className="w-full bg-purple text-white font-bold py-4 px-4 rounded-full">Register Child</button>
      </form>
    </div>
  );
};

export default RegisterChildForm;