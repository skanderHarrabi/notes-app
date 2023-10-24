import dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 5010;
const MONGO_URL_LOCAL = `${process.env.MONGO_DB_URL}`;
const config = {
    mongo: {
        url: MONGO_URL_LOCAL,
    },
    server: {
        port: SERVER_PORT,
    },
};

export default config;
