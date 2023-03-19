import * as React from 'react';

export interface Title {
  title: string;
}

export const Title: React.FC<Title> = ({ title }) => {
  return <h2 className="text-2xl font-bold tracking-widest">{title}</h2>;
};
