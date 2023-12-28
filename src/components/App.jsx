import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  setInterval(updateTime, 1000);

  function updateTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <h2>Özge ❤️ Erkeskin</h2>
    </div>
  );
}

export default App;
