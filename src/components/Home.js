import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const { data } = await axios.get("/api/history");
      setHistory(data.history);
    };
    fetchHistory();
  }, []);

  return (
    <div>
      <h2>Home - Chatbot</h2>
      <iframe
        title="Chatbot"
        src="<NGROK_LINK>"
        style={{ width: "100%", height: "500px", border: "none" }}
      ></iframe>
      <h3>History</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item.message}</li>
        ))}
      </ul>
    </div>
  );
}
