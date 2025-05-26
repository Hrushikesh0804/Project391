// import React from "react";
// import { Link } from "react-router-dom";
// import "./First.css";

// function First() {
//   return (
//     <div className="first-container">
//       {/* Navbar */}
//       <header className="first-header">
//         <div className="logo">ARTICLE-ASSIST</div>
//         <nav className="nav-links">
//           <Link to="/login" className="nav-btn">Login</Link>
//           <Link to="/signup" className="nav-btn">Sign Up</Link>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main className="first-main">
//         <section className="intro-section">
//           <h1>Empowering You With Constitutional Knowledge</h1>
//           <p>
//             Explore the Articles of the Indian Constitution. Our LegalBot helps you understand your rights, laws, and more with clarity and ease.
//           </p>
//           <Link to="/login" className="start-btn">Start Chatting →</Link>
//         </section>

//         <section className="articles-overview">
//           <h2>Key Highlights of the Constitution</h2>
//           <ul>
//             <li><strong>Part I –</strong> Union and its Territory</li>
//             <li><strong>Part III –</strong> Fundamental Rights</li>
//             <li><strong>Part IV –</strong> Directive Principles of State Policy</li>
//             <li><strong>Part IVA –</strong> Fundamental Duties</li>
//             <li><strong>Part V –</strong> Union Government</li>
//             <li><strong>Part VI –</strong> State Governments</li>
//             <li><strong>Part XI –</strong> Relations between Union and States</li>
//             <li><strong>Part XIV –</strong> Services Under the Union and the States</li>
//           </ul>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="first-footer">
//         <p>© 2025 ARTICLE-ASSIST. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default First;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./First.css";
import { FaMoon, FaSun } from "react-icons/fa";

function First() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div className={`first-container ${darkMode ? "dark" : "light"}`}>
      {/* Navbar */}
      <header className="first-header">
        <div className="logo">ARTICLE-ASSIST</div>
        <nav className="nav-links">
          <Link to="/login" className="nav-btn">Login</Link>
          <Link to="/signup" className="nav-btn">Sign Up</Link>
          <button className="toggle-mode" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="first-main">
  <section className="intro-section">
    <h1 className="fade-in">Empowering Law Students With Constitutional Knowledge</h1>
    <p>
      Welcome to <strong>Article-Assist</strong> — a chatbot exclusively designed for <strong>law students</strong> to explore and understand the <strong>Articles of the Indian Constitution</strong>. With a total of <strong>394 Articles</strong>, this tool simplifies your legal studies and research by offering direct, article-based legal insights.
    </p>
    <Link to="/login" className="start-btn">Start Chatting →</Link>
  </section>

  <section className="articles-overview">
    <h2 className="slide-in">Explore Core Parts of the Constitution</h2>
    <div className="articles-list-scrollbox">
      <ul>
        <li>🧱 <strong>Part I –</strong> The Union and its Territory (Articles 1–4): Defines India as a Union of States; formation of new states.</li>
        <li>🏛️ <strong>Part II –</strong> Citizenship (Articles 5–11): Citizenship rules at Constitution's commencement and powers of Parliament.</li>
        <li>⚖️ <strong>Part III –</strong> Fundamental Rights (Articles 12–35): Includes Right to Equality, Freedom, Religion, and Remedies.</li>
        <li>📜 <strong>Part IV –</strong> Directive Principles (Articles 36–51): Non-justiciable guidelines for a just society.</li>
        <li>🌱 <strong>Part IV-A –</strong> Fundamental Duties (Article 51A): 11 duties of citizens, added by 42nd Amendment.</li>
        <li>🏢 <strong>Part V –</strong> The Union (Articles 52–151): Central institutions like President, Parliament, and Supreme Court.</li>
        <li>🏛️ <strong>Part VI –</strong> The States (Articles 152–237): State governance including Governors, State Legislatures, and High Courts.</li>
        <li>🏗️ <strong>Part IX –</strong> Panchayats (Articles 243–243O): Introduced by 73rd Amendment; establishes Panchayati Raj.</li>
        <li>🏙️ <strong>Part IX-A –</strong> Municipalities (Articles 243P–243ZG): 74th Amendment; grants constitutional status to municipalities.</li>
        <li>💰 <strong>Part XII –</strong> Finance, Property & Suits (Articles 264–300A): Centre-state finance and right to property.</li>
        <li>🧑‍⚖️ <strong>Part XIV –</strong> Services (Articles 308–323): Public Service Commissions and civil services.</li>
        <li>🛡️ <strong>Part XVIII –</strong> Emergency Provisions (Articles 352–360): National, State, and Financial Emergencies.</li>
      </ul>
    </div>
  </section>
</main>


      {/* Footer */}
      <footer className="first-footer">
        <p>© 2025 ARTICLE-ASSIST. For Law Students. Focused on the Articles of the Indian Constitution.</p>
      </footer>
    </div>
  );
}

export default First;
