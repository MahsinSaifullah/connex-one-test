import { renderHook, waitFor, cleanup } from '@testing-library/react';

import * as services from '../../services';
import { useMetric } from '../metric.hook';

beforeEach(cleanup);
jest.useFakeTimers();
jest.spyOn(global, 'setInterval');
jest.mock('../../services', () => {
  return {
    __esModule: true,
    ...jest.requireActual('../../services'),
  };
});

const spiedGetMetrics = jest.spyOn(services, 'getMetrics');

describe('useMetric hook', () => {
  it('should render with correct values on load', async () => {
    const { result } = renderHook(() => useMetric());

    await waitFor(() => {
      expect(result.current).toEqual({
        metric: undefined,
        isLoading: false,
        isError: false,
      });
    });
  });

  it('should update metric state on successful API call', async () => {
    spiedGetMetrics.mockResolvedValueOnce('test');
    const { result } = renderHook(() => useMetric());

    await waitFor(() => {
      expect(result.current).toEqual({
        metrics: 'test',
        isLoading: false,
        isError: false,
      });
    });
  });

  it('should call setTimeinterval once on successful API call', async () => {
    spiedGetMetrics.mockResolvedValueOnce('test');

    await waitFor(() => {
      renderHook(() => useMetric());
    });

    await waitFor(() => {
      expect(setInterval).toHaveBeenCalledTimes(1);
    });
  });

  it('should update error state when API call is unsuccessful', async () => {
    spiedGetMetrics.mockRejectedValueOnce(new Error('error'));
    const { result } = renderHook(() => useMetric());

    await waitFor(() => {
      expect(result.current).toEqual({
        metrics: '',
        isLoading: false,
        isError: true,
      });
    });
  });
});
