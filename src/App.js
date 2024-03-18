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
    <div className="App bg-slate-100">
      <div className="flex flex-col items-center justify-center min-h-screen">
      <ToastContainer />
      {currentView === 'register' && <RegisterChildForm onRegister={handleRegisterChild} />}
      {currentView === 'splash' && registeredChild && (
        <SplashScreen child={registeredChild} onContinue={goToSignIn} />
      )}
      {currentView === 'main' && (
        <><img src="/kidlogger.png" alt="KidLogger Logo" className="w-3/4 max-w-xs mb-10"
      /> 
          <h1 className="mb-10 text-3xl font-extrabold tracking-tight text-slate-900">Preschool Sign-In/Out</h1>
          <input
            type="text"
            placeholder="Child's Name"
            value={currentChild}
            onChange={(e) => setCurrentChild(e.target.value)}
            required
            className="w-full rounded-full bg-slate-50"
          />
          <SignatureCanvas penColor='black' className="rounded-full" ref={sigPad} canvasProps={{ className: 'signatureCanvas rounded-lg mt-5' }} />
          <button onClick={() => handleSign('in')} className="bg-purple text-white font-bold py-4 px-4 rounded-full mt-10 w-full">Sign In</button>
          <button onClick={() => handleSign('out')} className="bg-purple text-white font-bold py-4 px-4 rounded-full mt-5 w-full">Sign Out</button>
        </>
      )}
      </div>
    </div>
  );
};

export default App;