import React, { useState } from 'react';
import FormikForm from './FormikForm'; 

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [showFormikForm, setShowFormikForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrors('Username is required');
      return;
    }
    if (!email) {
      setErrors('Email is required');
      return;
    }
    if (!password) {
      setErrors('Password is required');
      return;
    }

    setErrors('');
    alert('Registration form submitted successfully 🎉');

    setUsername('');
    setEmail('');
    setPassword('');

    setShowFormikForm(true);
  };


  if (showFormikForm) {
    return <FormikForm />;
  }

  return (
    <form onSubmit={handleSubmit}>
      {errors && <p style={{ color: 'red' }}>{errors}</p>}

      <div>
        <label htmlFor="username">Username</label><br />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label><br />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
