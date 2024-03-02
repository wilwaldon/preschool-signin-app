import React, { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import RegisterChildForm from './RegisterChildForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [currentChild, setCurrentChild] = useState('');
  const [currentChildPhoto, setCurrentChildPhoto] = useState('');
  const sigPad = useRef(null);

  const handleRegisterChild = (childData) => {
    const existingChildren = JSON.parse(localStorage.getItem('registeredChildren')) || [];
    localStorage.setItem('registeredChildren', JSON.stringify([...existingChildren, childData]));
    toast.success(`${childData.name} has been registered successfully!`);
    setShowRegistrationForm(false);
  };

  const handleSign = (action) => {
    if (!currentChild.trim() || sigPad.current.isEmpty()) {
      toast.error("Please enter the child's name and provide a signature.");
      return;
    }

    const registeredChildren = JSON.parse(localStorage.getItem('registeredChildren')) || [];
    const childData = registeredChildren.find(child => child.name.toLowerCase() === currentChild.toLowerCase());

    if (!childData) {
      toast.error("Child not found. Please register before signing.");
      return;
    }

    setCurrentChildPhoto(childData.photo); // Set the photo to be displayed

    toast.success(`${currentChild} ${action === 'in' ? 'signed in' : 'signed out'} successfully!`);

    // Optionally clear the form and hide the photo after a delay
    setTimeout(() => {
      setCurrentChild('');
      setCurrentChildPhoto('');
      sigPad.current.clear();
    }, 5000); // Adjust the time as needed
  };

  return (
    <div className="App">
      <ToastContainer />
      <button onClick={() => setShowRegistrationForm(!showRegistrationForm)}>
        {showRegistrationForm ? 'Cancel Registration' : 'Register Child'}
      </button>
      {showRegistrationForm && <RegisterChildForm onRegister={handleRegisterChild} />}
      {!showRegistrationForm && (
        <>
          <h1>Preschool Sign-In/Out</h1>
          <input
            type="text"
            placeholder="Child's Name"
            value={currentChild}
            onChange={(e) => setCurrentChild(e.target.value)}
            required
          />
          <SignatureCanvas penColor='black' ref={sigPad} canvasProps={{ className: 'signatureCanvas' }} />
          <button onClick={() => handleSign('in')}>Sign In</button>
          <button onClick={() => handleSign('out')}>Sign Out</button>
          {currentChildPhoto && <img src={currentChildPhoto} alt="Child" style={{ marginTop: '20px', maxWidth: '200px', borderRadius: '10px' }} />}
        </>
      )}
    </div>
  );
};

export default App;
