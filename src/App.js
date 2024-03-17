import React, { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import RegisterChildForm from './RegisterChildForm'; // Make sure to have this component
import SplashScreen from './SplashScreen'; // Make sure to have this component
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [currentView, setCurrentView] = useState('register'); 
  const [registeredChild, setRegisteredChild] = useState(null);
  const [currentChild, setCurrentChild] = useState('');
  const sigPad = useRef(null);

  const handleRegisterChild = (childData) => {
    setRegisteredChild(childData);
    setCurrentView('splash');
    toast.success(`${childData.name} has been registered successfully!`);
  };
  

  const goToSignIn = () => {
    setCurrentView('main');
  };

  const handleSign = (action) => {
    if (!currentChild.trim() || sigPad.current.isEmpty()) {
      toast.error("Please enter the child's name and provide a signature.");
      return;
    }
    toast.success(`${currentChild} ${action === 'in' ? 'signed in' : 'signed out'} successfully!`);
    setCurrentChild('');
    sigPad.current.clear();
  };

  return (
    <div className="App">
      <ToastContainer />
      {currentView === 'register' && <RegisterChildForm onRegister={handleRegisterChild} />}
      {currentView === 'splash' && registeredChild && (
        <SplashScreen child={registeredChild} onContinue={goToSignIn} />
      )}
      {currentView === 'main' && (
        <>
          <h1 className="mb-10 text-3xl font-extrabold tracking-tight text-slate-900">Preschool Sign-In/Out</h1>
          <input
            type="text"
            placeholder="Child's Name"
            value={currentChild}
            onChange={(e) => setCurrentChild(e.target.value)}
            required
          />
          <SignatureCanvas penColor='black' ref={sigPad} canvasProps={{ className: 'signatureCanvas' }} />
          <button onClick={() => handleSign('in')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 w-full">Sign In</button>
          <button onClick={() => handleSign('out')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 w-full">Sign Out</button>
        </>
      )}
    </div>
  );
};

export default App;