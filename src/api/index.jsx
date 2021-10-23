import axios from 'axios';

const NETWORK = 'mainnet';

const apiService = axios.create({
  baseURL: `https://api.teztracker.com/v2/data/tezos/${NETWORK}`,
});

const getBlocks = () => {
  return apiService.get('blocks', {});
};

export default getBlocks;
