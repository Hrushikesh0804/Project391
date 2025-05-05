import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./web.css";

function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    if (question.trim() === "") return;
    try {
      const response = await fetch("YOUR_BACKEND_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question })
      });
      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error("Error fetching answer:", error);
      setAnswer("Sorry, something went wrong. Please try again later.");
    }
  };

  return (
    <div className="layout">
      {/* Hover Sidebar */}
      <aside className="sidebar hover-slide">
        <h2 className="sidebar-logo">RAG</h2>
        <nav className="sidebar-nav">
          <a href="#">Home</a>
          <a href="#">History</a>
          <a href="#">Settings</a>
          <a href="#">Logout</a>
        </nav>
      </aside>

      {/* Main Area */}
      <div className="main-area" >
        <header className="top-header">
          <nav className="top-nav">
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </nav>
        </header>

        <main>
          <h2 className="main-title">
            Dive into the world of law and expand your understanding.
          </h2>

          <div className="input-container">
            <input
              type="text"
              placeholder="Ask your legal question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button className="submit-btn" onClick={handleAsk}>&#8594;</button>
          </div>

          <div className="output-container">
            <textarea readOnly placeholder="Show Text..." value={answer} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
