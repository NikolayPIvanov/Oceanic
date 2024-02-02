import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  poller: {
    interval: process.env.POLLER_INTERVAL
      ? +process.env.POLLER_INTERVAL
      : 10000,
  },
};
