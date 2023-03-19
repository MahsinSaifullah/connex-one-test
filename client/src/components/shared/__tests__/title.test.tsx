import { render } from '@testing-library/react';

import { Title } from '../title.component';

describe('Title Component', () => {
  it('should render title component correctly', () => {
    const { asFragment } = render(<Title title="test title" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
