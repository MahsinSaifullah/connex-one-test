import * as React from 'react';

import { IServerTime, ITimeDifference } from '../models';
import { getServerTime } from '../services';

export const useTime = () => {
  const [serverTime, setServerTime] = React.useState<IServerTime>({
    epoch: 0,
  });
  const [timeDiff, setTimeDiff] = React.useState<ITimeDifference>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const timeFetchRef = React.useRef<NodeJS.Timer>();

  const getTime = async () => {
    try {
      setIsLoading(true);
      const time = await getServerTime();
      setServerTime(time);
    } catch (error) {
      setIsError(false);
    }

    setIsLoading(false);
  };

  React.useEffect(() => {
    getTime();

    if (timeFetchRef.current) {
      clearInterval(timeFetchRef.current);
    }

    timeFetchRef.current = setInterval(async () => {
      await getTime();
    }, 30000);

    return () => {
      clearInterval(timeFetchRef.current);
    };
  }, []);

  return {
    serverTime,
    isLoading,
    isError,
  };
};
