import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from'dotenv';
import connect from './models/db.js'
import AuthRouter from './routes/AuthRouter.js'
import ProductRouter from './routes/ProductRouter.js'
import AdminRoutes from './routes/AdminRoutes.js';
dotenv.config({ path: './.env' });
// console.log("JWT_SECRET:", process.env.JWT_SECRET);
const app = express();
 

const PORT = process.env.PORT || 3500;

app.get('/ping',(req,res) =>{
    res.send("PONG");
})

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter )
app.use('/products',ProductRouter )
app.use('/admin',AdminRoutes)


app.listen(PORT,async function () {
try{
    await connect();
    console.log(`server is running on ${PORT}`);
} catch (error) {
    console.log(error);
}
});