import React, { useState } from "react";

import "./loginsignup.css";

function LoginSignup() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setLoginError("");
  };

  const handleSignup = () => {
    const existingUser = registeredUsers.find(user => user.email === signupEmail);
    if (existingUser) {
      alert("User already exists!");
    } else {
      const newUser = {
        name: signupName,
        email: signupEmail,
        password: signupPassword
      };
      setRegisteredUsers([...registeredUsers, newUser]);
      alert("Signup successful! Now login.");
      setIsFlipped(false); // flip to login
      setSignupName("");
      setSignupEmail("");
      setSignupPassword("");
    }
  };

  const handleLogin = () => {
    const user = registeredUsers.find(
      user => user.email === loginEmail && user.password === loginPassword
    );
    if (user) {
      setLoginSuccess(true);
      setLoginError("");
    } else {
      setLoginError("Invalid email or password");
      setLoginSuccess(false);
    }
  };

  return (
    <div className="container">
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="front">
          <h1>Syngrid</h1>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          {loginError && <p style={{ color: "red" }}>{loginError}</p>}
          {loginSuccess && <p style={{ color: "green" }}>Login Successful!</p>}
          <p>
            Don't have an account? <span onClick={handleFlip}>Signup</span>
          </p>
        </div>
        <div className="back">
          <h2>Signup</h2>
          <input
            type="text"
            placeholder="Name"
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          <button onClick={handleSignup}>Signup</button>
          <p>
            Already have an account? <span onClick={handleFlip}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
