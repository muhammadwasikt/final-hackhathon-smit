import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dbConnection/dbConnection.js';
import menagmentRoutes from './routes/menagmentRoutes.js';
import beneficiaryRoutes from './routes/beneficiaryRoutes.js';
import cors from 'cors';






const app = express();
dotenv.config()
app.use(express.json())
app.use(cors())




app.get('/', (req, res) => {
    res.send('Welcome to the Saylani server');
})
app.use('/managment', menagmentRoutes)
app.use('/beneficiary', beneficiaryRoutes)





const PORT = process.env.PORT || 3000;
connectDB()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})