interface TimeData {
  epoch: number;
}

export const getServerTimeResponseObject = (): TimeData => {
  const currentServerTime = Math.round(Date.now() / 1000);

  return {
    epoch: currentServerTime,
  };
};
