import express from "express";
import pg from 'pg';
import dbConf from './dbConf.js';

const app = express();
const PORT = 5000;
const pool = new pg.Pool(dbConf);

app.use(express.json());

app.get('/', (req, res) => {
    const q = req.query;
    res.status(200).send(pool.options);
});


async function start() {
    try {
        app.listen(PORT, () => console.log("Server runnig at port " + PORT));
    } catch (error) {
        console.log(erros);
    }
}

start();
