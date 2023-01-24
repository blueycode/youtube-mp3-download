import { useState } from 'react';
import './App.css';
import Logo from "./assets/logo.png";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div id="logo">
        <img src={Logo} />
        <h2>MP3 DOWNLOADER</h2>
      </div>

      <div id="body">
        <input
          type="text"
          placeholder="YouTube link here"
        />
        <span>It might take a moment to convert your video</span>
      </div>

      <button>Download</button>
    </div>
  )
}

export default App
