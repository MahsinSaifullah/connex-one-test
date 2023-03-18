import { ITimeDifference } from '../models';

export const convertEpochToHourMinSec = (epoch: number): ITimeDifference => {
  const date = new Date(epoch * 1000);

  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
};

export const formatTimeDisplay = ({
  hours,
  minutes,
  seconds,
}: ITimeDifference) => {
  return (
    hours.toString().padStart(2, '0') +
    ':' +
    minutes.toString().padStart(2, '0') +
    ':' +
    seconds.toString().padStart(2, '0')
  );
};
