import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Home} from './components/Home';
import {Header} from './components/Header';
import {Slider} from './components/Slider';
import {Footer} from './components/Footer';
import  MaliciousIpChecker  from './components/IP';
import URLCheckComponent from './components/email';
const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const BASE_URL = 'http://localhost:3000/api';
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  }; 

  const handleUpload = async () => {
    setUploadStatus('Uploading...');
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch(${BASE_URL}/upload, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setUploadStatus(data.message);
    } catch (error) {
      console.error("Error is " + error);
      setUploadStatus('Upload failed!');
    }
  };
    
  const divStyleOuter = {
    // backgroundColor: 'rgb(0,102,204)',
    backgroundColor: 'rgb(0,0,0)',
    padding: 40
  };
  
  const divStyleSlider = {
    padding:30
  };
  return (
    <>
      <div style={divStyleOuter}>
        <Header/>
        <div style={divStyleSlider}><Slider/></div>
        <div>
          <center>
            <div style={{ color: 'rgb(0,255,128)', fontSize: '4rem',fontWeight: 'bold',textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}><center>File Scanning</center></div>
            <br/>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} on style={{ backgroundColor: 'rgb(0,255,128)', padding: 10 }}>Upload</button>
            {uploadStatus && <p>{uploadStatus}</p>}
          </center>
          <Home/>
        </div>
        <MaliciousIpChecker/>
        <URLCheckComponent/>
      </div>
      <Footer/>
    </>
  );
  
};

export default FileUpload;
