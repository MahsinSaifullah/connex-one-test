import axios, { AxiosError } from 'axios';
import { IServerTime } from '../models';

export const getServerTime = async () => {
  try {
    const { data } = await axios.get<IServerTime>(
      `${process.env.REACT_APP_API_BASE_URL}/time`
    );

    return data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};
