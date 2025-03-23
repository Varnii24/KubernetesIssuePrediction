import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import bgImage from "../assets/auth-bg.jpg";

const AuthCard = ({ setIsLoggedIn }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // Handle Signup
  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(signupData));
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    alert("Signup Successful! 🎉 Redirecting...");
    navigate("/home");
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === loginData.email && storedUser.password === loginData.password) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      alert("Login Successful! 🚀 Redirecting...");
      navigate("/home");
    } else {
      alert("Invalid email or password. Try again!");
    }
  };

  return (
    <div
      className="auth-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* ✅ Background Overlay */}
      <div className="auth-bg-overlay"></div>

      {/* Flip Container */}
      <div className={`flip-container ${isFlipped ? "flipped" : ""}`}>
        <div className="auth-card">
          {/* Signup Form */}
          {!isFlipped ? (
            <div className="auth-side">
              <h2>📝 Signup</h2>
              <form onSubmit={handleSignup}>
                <input
                  type="email"
                  placeholder="📧 Email"
                  value={signupData.email}
                  onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                  required
                />
                <input
                  type="password"
                  placeholder="🔑 Password"
                  value={signupData.password}
                  onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                  required
                />
                <button type="submit" className="btn btn-primary btn-highlight">Signup</button>
              </form>
              <p>
                Already have an account?{" "}
                <span className="switch-btn" onClick={() => setIsFlipped(true)}>Login</span>
              </p>
            </div>
          ) : (
            /* Login Form */
            <div className="auth-side">
              <h2>🔐 Login</h2>
              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="📧 Email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                />
                <input
                  type="password"
                  placeholder="🔑 Password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                />
                <button type="submit" className="btn btn-primary btn-highlight">Login</button>
              </form>
              <p>
                Don't have an account?{" "}
                <span className="switch-btn" onClick={() => setIsFlipped(false)}>Signup</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AuthCard;
