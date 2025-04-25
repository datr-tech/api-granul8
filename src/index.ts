import { app } from '@app-ag/api';
import { apiName, apiPort, dbHost, dbName, dbPort } from '@app-ag/config';
import { logger } from '@datr.tech/leith-common-logger';
import { db } from '@datr.tech/leith-common-mongodb-connector';
import 'dotenv/config';

app.listen(apiPort, () => {
  logger.info(`${apiName} listening on ${apiPort}`);

  (async () => {
    await db.connect({
      host: dbHost,
      name: dbName,
      port: dbPort,
      user: undefined,
      pass: undefined,
    });
  })();
});
