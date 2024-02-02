import {logger} from '../Logger';
import {wait} from '../Utilities';
import {config} from '../config';

export class Poller {
  constructor() {}

  async run() {
    logger.info('Starting Poller...');

    const continueWithExecution = true;
    while (continueWithExecution) {
      logger.info('Starting iteration...');

      await wait(config.poller.interval);

      logger.info('Ending iteration...');
    }
  }
}
