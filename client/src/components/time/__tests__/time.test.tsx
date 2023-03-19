import { render, screen } from '@testing-library/react';

import * as hooks from '../../../hooks';
import { Time } from '../time.component';

jest.mock('../../../hooks', () => {
  return {
    __esModule: true,
    ...jest.requireActual('../../../hooks'),
  };
});

const spiedTimeHook = jest.spyOn(hooks, 'useTime');

describe('Time Component', () => {
  it('should render loading component if isLoading is true', () => {
    spiedTimeHook.mockReturnValue({
      serverTime: { epoch: 0 },
      timeDifferenceDisplay: '',
      isLoading: true,
      isError: false,
    });

    const { asFragment } = render(<Time />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render time component if isLoading is false', () => {
    spiedTimeHook.mockReturnValue({
      serverTime: { epoch: 100 },
      timeDifferenceDisplay: '0:0:0',
      isLoading: false,
      isError: false,
    });

    const { asFragment } = render(<Time />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correct server time and time difference', () => {
    spiedTimeHook.mockReturnValue({
      serverTime: { epoch: 100 },
      timeDifferenceDisplay: '10:10:10',
      isLoading: false,
      isError: false,
    });

    render(<Time />);
    expect(screen.getByTestId('server-time').innerHTML).toBe('100');
    expect(screen.getByTestId('time-difference').innerHTML).toBe('10:10:10');
  });
});
