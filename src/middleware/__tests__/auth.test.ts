import { getMockReq, getMockRes } from '@jest-mock/express';

import { auth } from '../auth.middleware';

const mockResponse = getMockRes().res;
const mockNextFunction = getMockRes().next;
process.env.AUTH_TOKEN = 'mysecrettoken';

describe('Auth Middleware', () => {
  it('should return a 403 status response if authentication header is missing', () => {
    const mockRequest = getMockReq();
    auth(mockRequest, mockResponse, mockNextFunction);
    expect(mockResponse.status).toHaveBeenCalledWith(403);
  });

  it('should return a 403 status response if authentication header is invalid', () => {
    const mockRequest = getMockReq({
      headers: {
        authorization: 'invalid',
      },
    });
    auth(mockRequest, mockResponse, mockNextFunction);
    expect(mockResponse.status).toHaveBeenCalledWith(403);
  });

  it('should call the next function if authentication header is valid', () => {
    const mockRequest = getMockReq({
      headers: {
        authorization: 'mysecrettoken',
      },
    });
    auth(mockRequest, mockResponse, mockNextFunction);
    expect(mockNextFunction).toHaveBeenCalledTimes(1);
  });
});
