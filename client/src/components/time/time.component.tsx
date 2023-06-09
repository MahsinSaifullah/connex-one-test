import * as React from 'react';

import { useTime } from '../../hooks';
import { Card, Loading, Title } from '../shared';

export const Time: React.FC = () => {
  const { timeDifferenceDisplay, serverTime, isLoading } = useTime();

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <Title title="Server Timestamp" />
      <Card className="sm:min-w-[600px] h-[400px] xl:h-[500px] max-w-sm lg:max-w-2xl flex flex-col space-y-10 p-10 justify-center items-center">
        {isLoading ? (
          <Loading loadingText="Updating" />
        ) : (
          <>
            <div className="text-sm sm:text-lg tracking-wider">
              <span className="text-sm sm:text-2xl bg-black text-white mr-2 p-2 rounded">
                Server Timestamp:
              </span>{' '}
              <span data-testid="server-time">{serverTime.epoch}</span>
            </div>
            <div className="text:sm sm:text-lg tracking-wider">
              <span className="text-sm sm:text-2xl bg-rose-700 text-white mr-2 p-2 rounded">
                Time Difference:
              </span>{' '}
              <span data-testid="time-difference">{timeDifferenceDisplay}</span>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};
