// src/pages/Home.jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/about">About</Link> | 
        <Link to="/profile">Profile</Link> | 
        <Link to="/post/1">Post 1</Link>
      </nav>
    </div>
  );
}

export default Home;
