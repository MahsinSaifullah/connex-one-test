import express from 'express';

interface TimeData {
  epoch: number;
}

//@route    GET /time
//@desc     Get current server time, in epoch seconds
//@access   Private
export const getServerTime = async (
  req: express.Request,
  res: express.Response
) => {
  const currentServerTime = Math.round(Date.now() / 1000);
  const responseObject: TimeData = {
    epoch: currentServerTime,
  };

  res.status(200);
  res.json(responseObject);
};
