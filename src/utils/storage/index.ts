import { createStorage as create } from './Storage';
import { getEnv } from '../env'
const DEFAULT_PREFIX_KEY = getEnv()

const createOptions = (storage = sessionStorage) => {
  return {
    storage,
    prefixKey: DEFAULT_PREFIX_KEY || '',
  };
};
export const WebStorage = create(createOptions());

export const createStorage = (storage: Storage = sessionStorage) => {
  return create(createOptions(storage))!;
};
export default WebStorage;
