import { ITimeDifference } from '../models';

export const calculateTimeDifference = (serverTime: number) => {
  return Math.round(Date.now() / 1000) - serverTime;
};

export const convertSecondToHourMinSec = (sec: number): ITimeDifference => {
  return {
    hours: Math.floor(sec / 3600),
    minutes: Math.floor(sec / 60) % 60,
    seconds: sec % 60,
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
