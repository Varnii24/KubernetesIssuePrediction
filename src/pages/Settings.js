import React, { useState, useEffect } from "react";
import "../styles/styles.css"; // Import styles

const Settings = () => {
  // Dark Mode State
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  // Apply dark mode on load
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode ? "enabled" : "disabled");
  };

  return (
    <div className="settings-container">
      <h2>⚙️ Settings</h2>

      <div className="setting-option">
        <label htmlFor="darkModeToggle">🌙 Dark Mode</label>
        <button
          id="darkModeToggle"
          onClick={toggleDarkMode}
          className="dark-mode-btn"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div className="setting-option">
        <h3>🔐 Account Settings</h3>
        <button className="btn">Change Password</button>
        <button className="btn">Manage Account</button>
      </div>

      <div className="setting-option">
        <h3>📢 Notifications</h3>
        <label>
          <input type="checkbox" /> Enable Email Notifications
        </label>
        <label>
          <input type="checkbox" /> Enable Push Notifications
        </label>
      </div>
    </div>
  );
};

export default Settings;
