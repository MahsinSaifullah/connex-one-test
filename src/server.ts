import express from 'express';
import prometheus from 'express-prometheus-middleware';
import cors from 'cors';
import * as dotenv from 'dotenv';

import { timeRouter } from './route';
import { auth } from './middleware';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//Init Middleware
app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());
app.use(auth);
app.use(
  prometheus({
    metricsPath: '/metrics',
    collectDefaultMetrics: true,
  })
);

//Init Routes
app.use('/time', timeRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
