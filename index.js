import express from "express";
import router from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/', router);


async function start() {
    try {     
        app.listen(PORT, () => console.log("Server runnig at port " + PORT));
    } catch (error) {
        console.log(error);
    }
}

start();
