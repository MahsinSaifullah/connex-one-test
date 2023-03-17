import express from 'express';

export const auth = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.headers.authorization !== process.env.AUTH_TOKEN) {
    return res.status(403).json({ message: 'Authorization header is missing' });
  }

  next();
};
