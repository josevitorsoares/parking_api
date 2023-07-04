import { Client } from "pg";

import * as dotenv from "dotenv";
dotenv.config();

const client = new Client({
    user: `${process.env.PGUSER}`,
    host: `${process.env.PGHOST}`,
    database: `${process.env.PGDATABASE}`,
    password: `${process.env.PGPASSWORD}`,
    port: 5432,
});

client
    .connect()
    .then(() => {
        console.log('Data Source has been inicialized');
    })
    .catch((err)=>{
        console.error('Error on Data Source initialization: ', err);
    });

export { client };