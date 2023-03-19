import * as React from 'react';

export interface LoadingProps {
  loadingText: string;
}

export const Loading: React.FC<LoadingProps> = ({ loadingText }) => {
  return <div className="text-2xl animate-pulse">{loadingText} ...</div>;
};
