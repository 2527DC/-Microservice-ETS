import express from 'express';
import { createUser } from './controllers/userController.js';

const app = express();
// ✅ Middleware to parse JSON
app.use(express.json());

  app.post('/message',createUser);


app.listen(3001, () => {
  console.log('Auth service is running on port 3001');
}   );  