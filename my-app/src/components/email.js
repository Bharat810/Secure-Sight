import React, { useState } from 'react';

const URLCheckComponent = () => {
  const [url, setUrl] = useState('');
  const [maliciousStatus, setMaliciousStatus] = useState(null);
  const BASE_URL = 'http://localhost:3000/api'; // Replace with your backend API base URL

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleCheck = async () => {
    try {
      const response = await fetch(${BASE_URL}/checkurl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      setMaliciousStatus(data.isMalicious ? 'URL is malicious' : 'URL is safe');
    } catch (error) {
      console.error("Error is " + error);
      setMaliciousStatus('Check failed!');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'rgb(0,255,128)', fontSize: '3.5em' }}>URL Scanning</h1>
      <input type="text" placeholder="Enter URL" value={url} onChange={handleInputChange} />
      <button style={{ backgroundColor: 'rgb(0,255,128)', padding: '10px', border: 'none', margin: '10px' }} onClick={handleCheck}>Check</button>
      {maliciousStatus && <p>{maliciousStatus}</p>}
      <p style={{ fontSize: '2em', color : 'rgb(0,255,128)' }}>URL Scanning: It works by scanning the URL for various indicators of potential security issues, such as malicious code, phishing attempts, malware, or suspicious behavior.</p>
    </div>
  );
};

export default URLCheckComponent;
