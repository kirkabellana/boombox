"use client";
import React, { useState } from "react";

export default function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      onLogin();
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          display: "flex",
          overflow: "hidden",
          width: "100%",
          maxWidth: "900px",
          minHeight: "500px",
          animation: "fadeInUp 0.6s ease",
        }}
      >
        {/* LEFT COLUMN */}
        <div
          style={{
            flex: 1,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px" , textAlign: "center"}}>
            Boombox Marketing
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "300px", textAlign: "center", lineHeight: "1.6" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla facilisi. Join us and amplify your business growth.
          </p>
        </div>

        {/* RIGHT COLUMN (LOGIN) */}
        <div
          style={{
            flex: 1,
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#333",
              textAlign: "center",
            }}
          >
            LOGIN PAGE
          </h2>
          <p style={{ marginBottom: "30px", color: "#666", textAlign: "center" }}>
            Please login to continue
          </p>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                outline: "none",
                fontSize: "1rem",
                transition: "0.3s",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid #764ba2")}
              onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                outline: "none",
                fontSize: "1rem",
                transition: "0.3s",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid #764ba2")}
              onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
            />
            <button
              type="submit"
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s",
                boxShadow: "0 5px 15px rgba(118,75,162,0.3)",
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Login
            </button>
          </form>

          <p
            style={{
              marginTop: "20px",
              fontSize: "0.9rem",
              color: "#666",
              textAlign: "center",
            }}
          >
            Don’t have an account?{" "}
            <a href="#" style={{ color: "#764ba2", fontWeight: "bold" }}>
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* ✅ Keyframe animation */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
