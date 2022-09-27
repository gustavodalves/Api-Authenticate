import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';

import errorMiddleware from './app/middlewares/errorMiddleware';
import { port } from './env/config';
import { AppDataSource } from './database/data_source';
import router from './router';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorMiddleware);

AppDataSource.initialize().then(() => {
    console.log('Database is connected 📦');
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port} 🔥`);
    });
}).catch((error) => console.log(error));
