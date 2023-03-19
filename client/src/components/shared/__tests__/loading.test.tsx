import { render } from '@testing-library/react';

import { Loading } from '../loading.component';

describe('Title Component', () => {
  it('should render title component correctly', () => {
    const { asFragment } = render(<Loading loadingText="test loading text" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
