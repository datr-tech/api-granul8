import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { attributeRouter } from './attributeRouter';
import { attributeTypeRouter } from './attributeTypeRouter';
import { resourceAttributeRouter } from './resourceAttributeRouter';
import { userAttributeRouter } from './userAttributeRouter';

export const apiRouter = Router(options)
  .use('/api/v1/attribute', attributeRouter)
  .use('/api/v1/attributeType', attributeTypeRouter)
  .use('/api/v1/resourceAttribute', resourceAttributeRouter)
  .use('/api/v1/userAttribute', userAttributeRouter);
