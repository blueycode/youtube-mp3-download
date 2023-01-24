import { useEffect, useState } from 'react';
import './App.css';
import Logo from "./assets/logo.png";
import { fetch } from './services/ApiRequest';

function App() {
  const [link, setLink] = useState('');
  const [id, setId] = useState(null);
  const [response, setResponse] = useState(null);
  const [disabled, setDisabled] = useState(false);
  
  useEffect(() => {
    if (id) {
      const fetchData = () => {
        let interval = setInterval(async function() {
          setDisabled(true);
          const res = await fetch(id);
          
          if (res.status === 200 && res.data.status === "ok") {
            setDisabled(false);
            setResponse(res.data);
            clearInterval(interval);
          } else if (res.status === 200 && res.data.status === "fail") {
            alert("Invalid video ID");
            setDisabled(false);
            clearInterval(interval);
          }

        }, 1000);
      }

      fetchData();
    }
  }, [id]);

  useEffect(() => {
    if (response) {
      window.location.href = response.link;
    }
  }, [response]);

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
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
        <span>It might take a moment to convert your video</span>
      </div>

      <button
        onClick={() => {
          const text = link.split("=")[1];
          if (text) {
            setId(text);
          }
        }}
        disabled={disabled}
        className={disabled ? "btn-disabled" : ""}
      >Download</button>
    </div>
  )
}

export default App
