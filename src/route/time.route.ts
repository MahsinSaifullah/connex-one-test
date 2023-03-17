import express from 'express';

import { getServerTime } from '../controller';

const timeRouter = express.Router();

timeRouter.get('/', getServerTime);

export { timeRouter };
