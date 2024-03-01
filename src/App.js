import React, { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [signatures, setSignatures] = useState({});
  const [currentChild, setCurrentChild] = useState('');
  const [childPhoto, setChildPhoto] = useState('');
  const sigPad = useRef(null);

  const handleSign = (action) => {
    if (!currentChild.trim() || sigPad.current.isEmpty()) {
      toast.error("Please enter the child's name and provide a signature.");
      return;
    }

    const timestamp = new Date().toISOString();
    const signatureData = signatures[currentChild] || [];
    signatureData.push({
      action,
      timestamp,
      signature: sigPad.current.toDataURL()
    });
    setSignatures({ ...signatures, [currentChild]: signatureData });

    // Set the child photo URL
    setChildPhoto(`/images/${currentChild.toLowerCase()}.jpg`);

    // Show success toast
    toast.success(`${currentChild} ${action === 'in' ? 'signed in' : 'signed out'} successfully!`);

    // Optionally clear the form and signature pad after a delay
    setTimeout(() => {
      setCurrentChild('');
      setChildPhoto('');
      sigPad.current.clear();
    }, 5000); // Clear after 5 seconds
  };

  return (
    <div className="App">
      <ToastContainer />
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
      {childPhoto && <img src={childPhoto} alt="Child" style={{ marginTop: '20px', maxWidth: '200px', borderRadius: '10px' }} />}
    </div>
  );
};

export default App;