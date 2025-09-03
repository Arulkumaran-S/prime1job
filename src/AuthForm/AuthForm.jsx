import React, { useState } from "react";
import "./AuthForm.css";

function AuthForm() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className={`container ${isSignup ? "signup-mode" : ""}`}>
      <div className="form-container">
        <div className="signin-form">
          <h2>Login</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <p>Don't have an account? <span onClick={() => setIsSignup(true)}>Signup</span></p>
        </div>

        <div className="signup-form">
          <h2>Signup</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Signup</button>
          <p>Already have an account? <span onClick={() => setIsSignup(false)}>Login</span></p>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
