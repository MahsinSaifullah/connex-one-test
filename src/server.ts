import express from 'express';
import prometheus from 'express-prometheus-middleware';

import { timeRouter } from './route';

const app = express();
const PORT = process.env.PORT || 5000;

//Init Middleware
app.use(express.json());
app.use(
  prometheus({
    metricsPath: '/metrics',
    collectDefaultMetrics: true,
  })
);

//Init Routes
app.use('/time', timeRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
