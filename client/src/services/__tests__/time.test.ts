import axios, { AxiosError } from 'axios';

import { getServerTime } from '../time.service';

const spiedAxios = jest.spyOn(axios, 'get');

describe('getServerTime', () => {
  it('should return the correct value on successful request', async () => {
    spiedAxios.mockResolvedValueOnce({ data: { epoch: 10 } });
    expect(await getServerTime()).toStrictEqual({ epoch: 10 });
  });

  it('should throw error on unsuccessful request', async () => {
    spiedAxios.mockRejectedValue(new AxiosError('error'));

    try {
      await getServerTime();
    } catch (error) {
      expect((error as AxiosError).message).toBe('error');
    }
  });
});
