import pg from "pg";
import dbConf from "./dbConf.js";

const pool = new pg.Pool(dbConf);

async function query(text, params) {
    return await pool.query(text, params);
}

function getClient(callback) {
    pool.connect((err, client, done) => {
        callback(err, client, done);
    })
}

const db = {
    query,
    getClient
}

export default db;