const express = require('express');
const multer = require('multer');
const VirusTotal = require('api')('@virustotal/v3.0'); // Assuming you have the SDK installed


const app = express();
const upload = multer({ dest: 'uploads/' });


app.post('/api/upload', upload.single('file'), (req, res) => {
    // Handle uploaded file (e.g., process it or send a success response)
    res.json({ message: 'File uploaded successfully!' });
  });


// app.post('/upload', upload.single('file'), async (req, res) => {
//   try {
//     const file = req.file; // Get uploaded file information
//     const vt = new VirusTotal({ apiKey: 'aaa1b3f416db52414df5776438042e0d12e97830c3b43a41b42dfa65a5d220b2' }); // Replace with your actual key

//     const scanData = await vt.fileScan(file.path); // Use uploaded file path

//     res.json({ message: 'File uploaded and scanned!', scanData }); // Send response with scan data
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error uploading or scanning file!' }); // Informative error message
//   }
// });

app.listen(5000, () => console.log('Server listening on port 5000'));
