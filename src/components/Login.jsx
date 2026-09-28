import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Allow any Chandigarh University email
    if (username.endsWith("@cumail.in") && password === "1234") {
      
      // User information
      const user = {
        userId: 101,
        role: "Student",
        email: username,
      };

      // Create simulated JWT token
      const token = btoa(JSON.stringify(user));

      // Store token in localStorage
      localStorage.setItem("token", token);

      // Send user information to App.jsx
      onLogin(user);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <h1>JWT Authentication</h1>

      <input
        type="email"
        placeholder="Enter @cumail.in email"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          setError("");
        }}
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError("");
        }}
      />

      <button onClick={handleLogin}>Login</button>

      {error && <p className="error">{error}</p>}

      <p className="demo">
        Demo Password: <b>1234</b>
      </p>
    </div>
  );
}

export default Login;