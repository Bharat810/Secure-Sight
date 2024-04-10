const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
app.use(cors());
// const VirusTotal = require('api')('@virustotal/v3.0');
//trail
// const sdk = require('api')('@virustotal/v3.0#40nj53llc655dro');

// app.post('/upload', upload.single('file'), async (req, res) => {
//     try {
//       const file = req.file; // Get uploaded file information
//       const vt = new VirusTotal({ apiKey: 'aaa1b3f416db52414df5776438042e0d12e97830c3b43a41b42dfa65a5d220b2' }); // Replace with your actual key
  
//       const scanData = await vt.fileScan(file.path); // Use uploaded file path
  
//       res.json({ message: 'File uploaded and scanned!', scanData });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error uploading or scanning file!' });
//     }
//   });



trial

  const virusTotalApiUrl = 'https://www.virustotal.com/api/v3/analyses/id';
  const virusTotalApiKey = process.env.VIRUS_TOTAL_API_KEY;
  app.post('https://www.virustotal.com/api/v3/analyses/id', upload.single('file'), async (req, res) => {
    const file = req.file;
    try {
        console.log('Received POST request to /api/upload');
        const formData = new FormData();
        formData.append('file', file);
        const response = await axios.post(
            virusTotalApiUrl,
            formData,
            {
                headers: {
                    'Authorization': `Bearer ${virusTotalApiKey}`, // Use bearer token for authentication
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
        res.json({ message: response.data.message });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error scanning file' });
    }
});

app.listen(5000, () => console.log('Server listening on port 5000'));
