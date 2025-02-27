import express from 'express';
import 'dotenv/config';
import { router } from './router/router';

const PORT = process.env.PORT || 5000;

const start = () => {
    try {
        const app = express();
        app.use(express.json())
        app.use('/', router)
        app.listen(PORT, () => console.log("Run", PORT))
    } catch (e) {
        console.log(e.message);
    }
}
start()