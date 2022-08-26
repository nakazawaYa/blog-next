import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'nkzzzblog',
    apiKey: process.env.API_KEY,
});