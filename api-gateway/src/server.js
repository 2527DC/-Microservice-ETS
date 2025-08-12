import express from 'express';
import axios from 'axios';

const app = express();

// Gateway route → forwards to User Service
app.get('/user/hello', async (req, res) => {
  try {
    // Call the User Service
    const response = await axios.get('http://localhost:3001/hello');
    // Send back the same response to the client
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Service not available' });
  }
});

app.listen(3000, () => console.log('API Gateway running on port 5000'));
