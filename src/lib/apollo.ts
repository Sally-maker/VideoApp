import { ApolloClient, InMemoryCache } from "@apollo/client";

import { getEnv } from '../utils/get-env';

export const client = new ApolloClient({
  uri: getEnv('VITE_API_BASE_URL'),
  headers: {
    'Authorization': `Bearer ${getEnv('VITE_JSON_WEB_TOKEN')}`
  },
  cache: new InMemoryCache()
})