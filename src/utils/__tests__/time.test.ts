import { getServerTimeResponseObject } from '../time.utils';

describe('Time Util function', () => {
  it('should return the response object in the correct shape', () => {
    expect(getServerTimeResponseObject()).toHaveProperty('epoch');
  });
});
