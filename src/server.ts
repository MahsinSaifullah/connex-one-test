import express from 'express';

import { timeRouter } from './route';

const app = express();
const PORT = process.env.PORT || 5000;

//Init Middleware
app.use(express.json());

//Init Routes
app.use('/api/time', timeRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
