import * as React from 'react';

export interface TitleProps {
  title: string;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ title, className }) => {
  return (
    <h2
      className={`text-lg sm:text-2xl font-bold tracking-widest ${className}`}
    >
      {title}
    </h2>
  );
};
