import express from 'express';

import { getServerTimeResponseObject } from '../utils';

//@route    GET /time
//@desc     Get current server time, in epoch seconds
//@access   Private
export const getServerTime = async (
  req: express.Request,
  res: express.Response
) => {
  res.status(200);
  res.json(getServerTimeResponseObject());
};
