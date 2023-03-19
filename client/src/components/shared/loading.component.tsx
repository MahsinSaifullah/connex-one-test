import * as React from 'react';

export interface LoadingProps {
  loadingText: string;
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({ loadingText, className }) => {
  return (
    <div className={`text-2xl animate-pulse ${className}`}>
      {loadingText} ...
    </div>
  );
};
