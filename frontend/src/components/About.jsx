import React from "react";
import { Link } from "react-router";

export function About() {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Welcome to Our Math Learning Platform!</h1>
      <p style={subtitleStyle}>
        We help students practice math dynamically, generating fresh questions every time.
      </p>

      <section style={sectionStyle}>
        <h2>📖 What We Offer</h2>
        <ul>
          <li>🎯 AI-Powered Question Generation</li>
          <li>📊 Interactive Learning & Progress Tracking</li>
          <li>🔢 Custom Practice by Age & Chapter</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2>🎉 Why We Built This</h2>
        <p>
          We believe learning should be engaging and adaptive. Our platform ensures 
          that no two questions are the same, making math practice effective and fun!
        </p>
      </section>

      <div style={ctaStyle}>
        <h3>Ready to practice?</h3>
        <Link to="/age" style={buttonStyle}>Start Practicing</Link>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  textAlign: "center",
  padding: "50px",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#F7F7F7"
};

const titleStyle = {
  color: "#1C2833",
  fontSize: "2.5rem"
};

const subtitleStyle = {
  fontSize: "1.2rem",
  color: "#555",
  maxWidth: "600px",
  margin: "10px auto"
};

const sectionStyle = {
  margin: "30px 0",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
  maxWidth: "600px",
  marginLeft: "auto",
  marginRight: "auto"
};

const ctaStyle = {
  marginTop: "40px",
  padding: "20px",
  backgroundColor: "#1C2833",
  color: "white",
  borderRadius: "10px"
};

const buttonStyle = {
  backgroundColor: "#FF5733",
  color: "white",
  padding: "10px 20px",
  fontSize: "18px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "10px",
  textDecorationLine:"none"
};


