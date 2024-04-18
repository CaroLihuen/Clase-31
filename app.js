import express from 'express';
import usersRouter from './src/routes/user.routes.js';


const app = express();

app.use('/api/users',usersRouter);


app.listen(8080,()=>console.log("Listening"));