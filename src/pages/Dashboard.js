import React, { useState, useEffect } from "react";
import Charts from "../components/Charts";
import "../styles/styles.css";

const Dashboard = () => {
  console.log("✅ Dashboard component loaded successfully!");

  // 📊 State Management
  const [timeRange, setTimeRange] = useState("24h");
  const [filteredData, setFilteredData] = useState([]);
  const [stats, setStats] = useState({
    healthyNodes: 12,
    issuesDetected: 3,
    pendingFixes: 5,
  });

  // 🎯 Simulated Data Fetching (Auto-updating Stats)
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) => ({
        healthyNodes: Math.max(prevStats.healthyNodes - Math.floor(Math.random() * 2), 8),
        issuesDetected: prevStats.issuesDetected + Math.floor(Math.random() * 2),
        pendingFixes: prevStats.pendingFixes + Math.floor(Math.random() * 1),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 📊 Dynamic Chart Data Based on Time Range
  useEffect(() => {
    const generateFilteredData = () => {
      const data = {
        "24h": [
          { time: "10:00", issues: 2 },
          { time: "12:00", issues: 4 },
          { time: "14:00", issues: 6 },
          { time: "16:00", issues: 5 },
          { time: "18:00", issues: 8 },
        ],
        "7d": [
          { time: "Mon", issues: 10 },
          { time: "Tue", issues: 14 },
          { time: "Wed", issues: 8 },
          { time: "Thu", issues: 12 },
          { time: "Fri", issues: 7 },
          { time: "Sat", issues: 9 },
          { time: "Sun", issues: 11 },
        ],
        "30d": [
          { time: "Week 1", issues: 40 },
          { time: "Week 2", issues: 35 },
          { time: "Week 3", issues: 50 },
          { time: "Week 4", issues: 45 },
        ],
      };
      setFilteredData(data[timeRange]);
    };

    generateFilteredData();
  }, [timeRange]);

  return (
    <div className="container">
      <h1>🚀 Kubernetes Issue Predictor</h1>
      <p>📊 Monitor & predict issues before they escalate.</p>

      {/* ⏳ Time Range Selector */}
      <label className="filter-label">📅 Select Time Range:</label>
      <select className="filter-dropdown" value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
        <option value="24h">🕒 Last 24 Hours</option>
        <option value="7d">📆 Last 7 Days</option>
        <option value="30d">📅 Last 30 Days</option>
      </select>

      {/* 🎯 Key Metrics Cards */}
      <div className="card-container">
        <div className="card healthy">
          <h3>🟢 Healthy Nodes</h3>
          <p>{stats.healthyNodes}</p>
        </div>
        <div className="card issues">
          <h3>⚠️ Issues Detected</h3>
          <p>{stats.issuesDetected}</p>
        </div>
        <div className="card pending">
          <h3>🔄 Pending Fixes</h3>
          <p>{stats.pendingFixes}</p>
        </div>
      </div>

      {/* 📊 Chart Display */}
      <Charts chartData={filteredData} />
    </div>
  );
};

export default Dashboard;
