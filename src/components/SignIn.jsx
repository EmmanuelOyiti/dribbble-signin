import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="container">
        <div className="sidebar">
    <div className="content">
      <div className="wix-logo"><span>WIX</span> STUDIO</div>
      <h2>The new Figma to Wix Studio plugin</h2>
      <a href="#"><span>Learn more</span> →</a>
    </div>
    <img src="src\assets\bottom_pic.png" alt="Wix Studio Plugin" className="bottom-image" />
  </div>
      <div className="card">
        <h2>Sign in to Dribbble</h2>
        <button className="google-btn">
          <img
            src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
            alt="Google Logo"
          />
          Sign in with Google
        </button>
        <div class="divider">
          <hr /> or sign in with email <hr />
        </div>
        <form className="form">
          <label>Username or Email</label>
          <input type="email" placeholder="" />
          <div className="input-container">
            <label>Password</label>
            <div className="options">
              <a href="#">Forgot?</a>
            </div>
          </div>
          <input className="password_input" type="password" placeholder="" />
          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
