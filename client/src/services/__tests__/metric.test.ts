import axios, { AxiosError } from 'axios';

import { getMetrics } from '../metric.service';

const spiedAxios = jest.spyOn(axios, 'get');

describe('getMetrics', () => {
  it('should return the correct value on successful request', async () => {
    spiedAxios.mockResolvedValueOnce({ data: 'test' });
    expect(await getMetrics()).toStrictEqual('test');
  });

  it('should throw error on unsuccessful request', async () => {
    spiedAxios.mockRejectedValue(new AxiosError('error'));

    try {
      await getMetrics();
    } catch (error) {
      expect((error as AxiosError).message).toBe('error');
    }
  });
});
