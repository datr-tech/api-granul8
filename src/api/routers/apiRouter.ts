import { Router } from 'express';
import { options } from '@datr.tech/leith-config-api-router-options';
import { attributeRouter } from './attributeRouter';
import { attributeTypeRouter } from './attributeTypeRouter';
import { resourceAttributeRouter } from './resourceAttributeRouter';
import { userAttributeRouter } from './userAttributeRouter';

export const apiRouter = Router(options)
  .use('/api/v1/attributeRouter', attributeRouter)
  .use('/api/v1/attributeTypeRouter', attributeTypeRouter)
  .use('/api/v1/resourceAttributeRouter', resourceAttributeRouter)
  .use('/api/v1/userAttributeRouter', userAttributeRouter);
