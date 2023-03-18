import * as React from 'react';

import { useMetric } from '../../hooks/metric.hook';

export const Metric: React.FC = () => {
  useMetric();
  return <div>metric</div>;
};
