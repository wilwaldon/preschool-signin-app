// src/RegisterChildForm.js

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Child's Name"
        value={childName}
        onChange={(e) => setChildName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Child's Age"
        value={childAge}
        onChange={(e) => setChildAge(e.target.value)}
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        required
      />
      <button type="submit">Register Child</button>
    </form>
  );
};

export default RegisterChildForm;
