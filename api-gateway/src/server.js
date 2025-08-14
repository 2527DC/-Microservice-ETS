import express from 'express';
import userRoute from './routes/userService.route.js';
const app = express();
app.use(express.json());


app.use('/user',userRoute)

app.listen(3000, () => console.log('API Gateway running on port 3000'));
