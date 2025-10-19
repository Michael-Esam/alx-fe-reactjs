import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Form Handling Examples</h1>

      {/* Regular form with useState + manual validation */}
      <div style={{ marginBottom: '40px' }}>
        <h2>Manual Validation (useState)</h2>
        <RegistrationForm />
      </div>

      <hr />
    </div>
  );
}

export default App;
