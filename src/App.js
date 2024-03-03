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
      <div className='mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8'>
      <ToastContainer />
      {showRegistrationForm && <RegisterChildForm onRegister={handleRegisterChild} />}
      {!showRegistrationForm && (
        <>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Preschool Sign-In/Out</h1>
          </div>
          <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'></div>
          <label for='childsName' className='block text-sm font-medium leading-6 text-gray-900'>Childs Name</label>
          <div className='mt-2'>
          <input
            id="childsName"
            name="childsName"
            type="text"
            value={currentChild}
            onChange={(e) => setCurrentChild(e.target.value)}
            required
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
          </div>
          <div className='mt-2'>
          <SignatureCanvas penColor='black' ref={sigPad} canvasProps={{ className: 'signatureCanvas' }} />
          </div>
          <div className='grid grid-cols-3 gap-4 content-start w-full text-center h-36'>
          <div className='flex gap-3'>
          <button onClick={() => handleSign('in')} className='mt-6 flex w-half items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>Sign In</button>
          </div>
          <div className='flex gap-3'>
          <button onClick={() => handleSign('out')} className='mt-6 flex w-half items-center justify-center rounded-md border px-8 py-3 text-base font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 adu alm arf arv avz awf axu bbm bbs bbw bce big'>Sign Out</button>
          </div>
          </div>
          {currentChildPhoto && <img src={currentChildPhoto} alt="Child" style={{ marginTop: '20px', maxWidth: '70px', borderRadius: '5px' }} />}
          Not Registered? <a href="#" className='text-blue-700' onClick={() => setShowRegistrationForm(!showRegistrationForm)}>
          {showRegistrationForm ? 'Cancel Registration' : 'Register Child'}
          </a>
        </>
      )}
    </div>
    </div>
  );
};

export default App;
