import * as React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <article
      className={`rounded shadow-lg bg-white overflow-scroll ${className}`}
    >
      {children}
    </article>
  );
};
