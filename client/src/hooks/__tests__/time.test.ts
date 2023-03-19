import { renderHook, waitFor, cleanup } from '@testing-library/react';

import * as services from '../../services';
import { useTime } from '../time.hook';

beforeEach(cleanup);
jest.useFakeTimers();
jest.spyOn(global, 'setInterval');
jest.mock('../../services', () => {
  return {
    __esModule: true,
    ...jest.requireActual('../../services'),
  };
});

const spiedGetServerTime = jest.spyOn(services, 'getServerTime');

describe('useTime hook', () => {
  it('should render with correct values on load', async () => {
    const { result } = renderHook(() => useTime());

    await waitFor(() => {
      expect(result.current).toEqual({
        isLoading: true,
        serverTime: {
          epoch: 0,
        },
        timeDifferenceDisplay: '00:00:00',
        isError: false,
      });
    });
  });

  it('should update serverTime state on successful API call', async () => {
    spiedGetServerTime.mockResolvedValueOnce({ epoch: 10 });
    const { result } = renderHook(() => useTime());

    await waitFor(() => {
      expect(result.current).toEqual({
        isLoading: false,
        serverTime: {
          epoch: 10,
        },
        timeDifferenceDisplay: '00:00:00',
        isError: false,
      });
    });
  });

  it('should call setTimeinterval twice on successful API call', async () => {
    spiedGetServerTime.mockResolvedValueOnce({ epoch: 10 });

    await waitFor(() => {
      renderHook(() => useTime());
    });

    await waitFor(() => {
      expect(setInterval).toHaveBeenCalledTimes(2);
    });
  });

  it('should update error state when API call is unsuccessful', async () => {
    spiedGetServerTime.mockRejectedValueOnce(new Error('error'));
    const { result } = renderHook(() => useTime());

    await waitFor(() => {
      expect(result.current).toEqual({
        isLoading: false,
        serverTime: {
          epoch: 0,
        },
        timeDifferenceDisplay: '00:00:00',
        isError: true,
      });
    });
  });
});
