import { Router } from 'express';
import { options } from '@datr.tech/leith-config-api-router-options';
import { attributeRouterCreateAttribute } from './attributeRouterCreateAttribute';
import { attributeRouterDeleteAttribute } from './attributeRouterDeleteAttribute';
import { attributeRouterReadAttribute } from './attributeRouterReadAttribute';
import { attributeRouterUpdateAttribute } from './attributeRouterUpdateAttribute';

export const attributeRouter = Router(options)
  .use('/', attributeRouterCreateAttribute)
  .use('/:attributeId', attributeRouterDeleteAttribute)
  .use('/:attributeId', attributeRouterReadAttribute)
  .use('/:attributeId', attributeRouterUpdateAttribute);
