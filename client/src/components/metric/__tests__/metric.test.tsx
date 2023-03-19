import { render, screen } from '@testing-library/react';

import * as hooks from '../../../hooks';
import { Metric } from '../metric.component';

jest.mock('../../../hooks', () => {
  return {
    __esModule: true,
    ...jest.requireActual('../../../hooks'),
  };
});

const spiedMetricHook = jest.spyOn(hooks, 'useMetric');

describe('Metric Component', () => {
  it('should render loading component if isLoading is true', () => {
    spiedMetricHook.mockReturnValue({
      metrics: '',
      isLoading: true,
      isError: false,
    });

    const { asFragment } = render(<Metric />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render Metric component if isLoading is false', () => {
    spiedMetricHook.mockReturnValue({
      metrics: 'test',
      isLoading: false,
      isError: false,
    });

    const { asFragment } = render(<Metric />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the correct metrics', () => {
    spiedMetricHook.mockReturnValue({
      metrics: 'test',
      isLoading: false,
      isError: false,
    });

    render(<Metric />);
    expect(screen.getByTestId('metrics').innerHTML).toBe('test');
  });
});
