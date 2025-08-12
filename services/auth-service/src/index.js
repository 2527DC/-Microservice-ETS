import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello from User Service!' });
  });

app.listen(3001, () => {
  console.log('Auth service is running on port 3000');
}   );  