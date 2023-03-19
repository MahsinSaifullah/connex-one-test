import * as React from 'react';

import { useMetric } from '../../hooks';
import { Card, Loading, Title } from '../shared';

export const Metric: React.FC = () => {
  const { metrics, isLoading } = useMetric();
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <Title title="Prometheus Metrics" />
      <Card className="sm:min-w-[600px] max-w-sm lg:max-w-xl h-[400px] xl:h-[500px] px-4 py-2">
        {isLoading ? (
          <Loading loadingText="Loading" />
        ) : (
          <pre className="text-xs sm:text-sm tracking-widest font-mono font-bold">
            {metrics}
          </pre>
        )}
      </Card>
    </div>
  );
};
