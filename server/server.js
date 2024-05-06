const express = require('express');
const multer = require('multer');
const VirusTotal = require('api')('@virustotal/v3.0'); // Assuming you have the SDK installed

const fetch = require('node-fetch');
const bodyParser = require('body-parser');

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

//IPAddress
app.use(bodyParser.json());
app.post('/check-ip', async (req, res) => {
  const { ipAddress } = req.body;
  try {
      const response = await fetch(https://www.virustotal.com/api/v3/ip_addresses/${ipAddress}, {
          headers: {
              'x-apikey': 'YOUR_VIRUSTOTAL_API_KEY',
          },
      });
      const data = await response.json();

      res.json({ isMalicious: data.data.attributes.reputation !== 'none' });
  } catch (error) {
      console.error('Error checking IP:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(5000, () => console.log('Server listening on port 5000'));
