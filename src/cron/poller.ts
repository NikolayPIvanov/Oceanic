import {logger} from '../Logger';
import {wait} from '../Utilities';

export class Poller {
  constructor() {}

  async run() {
    logger.info('Starting Poller...');

    const continueWithExecution = true;
    while (continueWithExecution) {
      logger.info('Starting iteration...');

      await wait(1000);

      logger.info('Ending iteration...');
    }
  }
}
