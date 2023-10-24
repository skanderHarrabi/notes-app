import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import config from './config/config';
import Logging from './library/Logging';
import { router as v1 } from './routes/v1/index';

const router = express();

//CONNECTION TO MONGOOSE DATABASE
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        Logging.info('Connected to mongoDB.');
        StartServer();
    })
    .catch((error) => {
        Logging.error('Unable to connect.');
        Logging.error(error);
    });

//ONLY START THE SERVER IF MONGOOSE IS CONNECTS
const StartServer = async () => {
    router.use((req, res, next) => {
        Logging.info(
            `Incomming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`
        );
        res.on('finish', () => {
            Logging.info(
                `Incomming -> Method: [${req.method}] - Url: [${req.url}] IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
            );
        });
        next();
    });

    router.use(express.urlencoded({ extended: true }));
    router.use(express.json());

    //RULES OF OUR APIS
    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin,X-Requested-with,Content-Type,Accept,Authorization'
        );

        if (req.method == 'OPTIONS') {
            res.header(
                'Access-Control-Allow-Methods',
                'PUT,POST,PATCH,DELETE,GET'
            );
            return res.status(200).json({});
        }
        next();
    });

    //API ROUTES WITH VERSION
    router.use('/api', v1);

    //YOUR SERVER LISTEN
    http.createServer(router).listen(config.server.port, () =>
        Logging.info(`Server is running on port ${config.server.port}.`)
    );
};
