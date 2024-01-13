import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [msg, setMsg] = useState("message");
  useEffect(() => {    
    fetch("cors-test")
    .then(res => res.text())
    .then(data => setMsg(data));
  })
  return (
    <div className="App">
      hello {msg}      
    </div>
  );
}

export default App;