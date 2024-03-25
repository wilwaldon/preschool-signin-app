import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterChildForm = () => {
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [childPhoto, setChildPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState('/placeholder-image.png'); // Placeholder image
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [medicalIssues, setMedicalIssues] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [allergies, setAllergies] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/splash-screen'); // Redirect after form submission
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setChildPhoto(e.target.result);
        setPhotoPreview(e.target.result); // Update preview with uploaded image
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a JPG or PNG image.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 pb-20">
      <h2 className="text-3xl font-bold mb-8">Register Child</h2>
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="childName" className="block text-sm font-medium text-gray-700">Child's Name</label>
            <input type="text" id="childName" value={childName} onChange={(e) => setChildName(e.target.value)} required className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label htmlFor="childAge" className="block text-sm font-medium text-gray-700">Child's Age</label>
            <input type="number" id="childAge" value={childAge} onChange={(e) => setChildAge(e.target.value)} required className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="col-span-1 md:col-span-2 flex items-center">
            <div>
              <label htmlFor="childPhoto" className="block text-sm font-medium text-gray-700">Child's Photo</label>
              <input type="file" id="childPhoto" accept="image/jpeg, image/png" onChange={handlePhotoChange} required className="border border-gray-300 rounded-md p-2 file:mr-4" />
            </div>
            <div className="w-20 h-20 rounded-full bg-cover bg-center ml-4" style={{ backgroundImage: `url(${photoPreview})` }}></div>
          </div>
          {/* Address section */}
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">Street Address</label>
            <input type="text" id="streetAddress" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} required className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} required className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
            <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} required className="w-full border border-gray-300 rounded-md p-2" />
          </div>
<div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
            <input type="text" id="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required className="w-full border border-gray-300 rounded-md p-2" />
          </div>
        </div>
        <div>
          <label htmlFor="medicalIssues" className="block text-sm font-medium text-gray-700">Medical Issues (if any)</label>
          <input type="text" id="medicalIssues" value={medicalIssues} onChange={(e) => setMedicalIssues(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div>
          <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700">Emergency Contact</label>
          <input type="text" id="emergencyContact" value={emergencyContact} onChange={(e) => setEmergencyContact(e.target.value)} required className="w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div>
          <label htmlFor="allergies" className="block text-sm font-medium text-gray-700">Allergies (if any)</label>
          <input type="text" id="allergies" value={allergies} onChange={(e) => setAllergies(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" />
        </div>
        <button type="submit" className="mt-4 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200">Register Child</button>
      </form>
    </div>
  );
};

export default RegisterChildForm;

