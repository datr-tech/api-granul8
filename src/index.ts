import 'dotenv/config';

import { logger } from '@datr.tech/leith-common-logger';
import { db } from '@datr.tech/leith-common-mongodb-connector';
import { granul8Seeder } from '@datr.tech/leith-common-seeders';

import { app } from '@app-ag/api';
import {
  AttributeModel,
  AttributeTypeModel,
  ResourceAttributeModel,
  UserAttributeModel,
} from '@app-ag/api/models';
import { apiName, apiPort, dbHost, dbName, dbPort } from '@app-ag/config';

app.listen(apiPort, () => {
  logger.info(`api-${apiName} listening on ${apiPort}`);

  (async () => {
    const stat = await db.connect({
      host: dbHost,
      name: dbName,
      port: dbPort,
      user: undefined,
      pass: undefined,
    });

    const { isConnected } = stat;

    if (isConnected) {
      await granul8Seeder(
        AttributeModel,
        AttributeTypeModel,
        ResourceAttributeModel,
        UserAttributeModel,
      );
    }
  })();
});
