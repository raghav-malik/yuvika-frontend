import React, { useState } from 'react';
import Login from './Login';
import GrievanceForm from './GrievanceForm';
import Confirmation from './Confirmation';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  return (
    <div className="app-root">
      {error && <div className="error-msg">{error}</div>}
      {!loggedIn ? (
        <Login onLogin={() => setLoggedIn(true)} setError={setError} />
      ) : !submitted ? (
        <GrievanceForm onSubmit={() => setSubmitted(true)} setError={setError} />
      ) : (
        <Confirmation onAnother={() => { setSubmitted(false); setError(''); }} />
      )}
    </div>
  );
}

export default App;
