import * as React from 'react';

import { useTime } from '../../hooks';
import { Card, Loading, Title } from '../shared';

export const Time: React.FC = () => {
  const { timeDifferenceDisplay, serverTime, isLoading } = useTime();

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <Title title="Server Timestamp" />
      <Card className="min-w-[600px] flex flex-col space-y-10 p-10 justify-center items-center max-w-2xl h-[500px]">
        {isLoading ? (
          <Loading loadingText="Updating" />
        ) : (
          <>
            <div className="text-xl tracking-wider">
              <span className="text-2xl bg-black text-white mr-2 p-2 rounded">
                Server Timestamp:
              </span>{' '}
              {serverTime.epoch}
            </div>
            <div className="text-lg tracking-wider">
              <span className="text-2xl bg-rose-700 text-white mr-2 p-2 rounded">
                Time Difference:
              </span>{' '}
              {timeDifferenceDisplay}
            </div>
          </>
        )}
      </Card>
    </div>
  );
};
