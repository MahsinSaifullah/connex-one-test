import axios, { AxiosError } from 'axios';

export const getMetrics = async () => {
  try {
    const { data } = await axios.get<string>(
      `${process.env.REACT_APP_API_BASE_URL}/metrics`
    );

    return data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};
