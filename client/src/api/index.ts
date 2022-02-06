import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'https://health.bobbypalko.com/api/',
});

export const addWeight = (weight: string): Promise<AxiosResponse<any>> =>
  api.post('weights', weight);
export const getAllWeights = (): Promise<AxiosResponse<any>> =>
  api.get('weights');

const apis = {
  addWeight,
  getAllWeights,
};

export default apis;
