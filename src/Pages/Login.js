import React from "react";
import "./login.css";
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login">
      <div className="container login-info">
        <div className="title-box">
          <h2 className="login-title">Login</h2>
        </div>
        <form className="login-form">
          <label htmlFor="email">
            <input
              type="text"
              required
              className="input-field"
              placeholder="Email or phone *"
            />
          </label>
          <label htmlFor="email">
            <input
              type="password"
              required
              className="input-field"
              placeholder="Email or phone *"
            />
          </label>
          <label htmlFor="check" className="check-info">
            Remember Me
            <input type="checkbox" id="check" />
          </label>
          <input type="submit" value="Login" className="submit-btn"></input>
        </form>
        
        <div className="form-footer">
          <Link to="/" className="recovery">
            Recovery Password
          </Link>
          <p style={{ margin: '5px 0', fontSize: '11px', color: '#f3f3f3f' }}> OR </p>
          <Link to="/" className="account">Create new account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
