// src/pages/Login.jsx
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <p>To access the profile, you must be logged in.</p>
      <Link to="/">Back Home</Link>
    </div>
  );
}

export default Login;
