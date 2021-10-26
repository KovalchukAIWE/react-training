import axios from 'axios';

const NETWORK = 'mainnet';

const apiService = axios.create({
  baseURL: `https://api.teztracker.com/v2/data/tezos/${NETWORK}`,
});

const getBlocks = async (limit, offset) => {
  const { data } = await apiService.get(
    `/blocks?offset=${offset}&limit=${limit}`,
    {},
  );
  return data;
};

export default getBlocks;
