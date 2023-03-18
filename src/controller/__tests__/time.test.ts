import { getMockReq, getMockRes } from '@jest-mock/express';

import { getServerTime } from '../time.controller';

const mockRequest = getMockReq();
const mockResponse = getMockRes().res;

describe('Time Controller', () => {
  it('should return a 200 status response', () => {
    getServerTime(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
  });

  it('should call res.json once', () => {
    getServerTime(mockRequest, mockResponse);
    expect(mockResponse.json).toHaveBeenCalledTimes(1);
  });
});
