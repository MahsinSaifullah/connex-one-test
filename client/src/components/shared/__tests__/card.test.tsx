import { render } from '@testing-library/react';

import { Card } from '../card.component';

const TestCard = () => {
  return (
    <Card>
      <div>Test</div>
    </Card>
  );
};

describe('Title Component', () => {
  it('should render title component correctly', () => {
    const { asFragment } = render(<TestCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
