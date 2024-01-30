const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');
const siteRouter = require('./routes/siteRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/user',userRouter);
app.use('/api/site',siteRouter);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URI).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
})


