import * as React from 'react';
import { getMetrics } from '../services';

export const useMetric = () => {
  const [metrics, setMetrics] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const metricFetchRef = React.useRef<NodeJS.Timer>();

  const getPromMetrics = async () => {
    try {
      setIsLoading(true);
      const _metrics = await getMetrics();
      setMetrics(_metrics);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    getPromMetrics();

    if (metricFetchRef.current) {
      clearInterval(metricFetchRef.current);
    }

    metricFetchRef.current = setInterval(async () => {
      setIsError(false);
      await getPromMetrics();
    }, 30000);

    return () => {
      clearInterval(metricFetchRef.current);
    };
  }, []);

  return {
    metrics,
    isError,
    isLoading,
  };
};
