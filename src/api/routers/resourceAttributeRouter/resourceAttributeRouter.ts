import { Router } from 'express';
import { options } from '@datr.tech/leith-config-api-router-options';
import { resourceAttributeRouterCreateResourceAttribute } from './resourceAttributeRouterCreateResourceAttribute';
import { resourceAttributeRouterDeleteResourceAttribute } from './resourceAttributeRouterDeleteResourceAttribute';
import { resourceAttributeRouterReadResourceAttribute } from './resourceAttributeRouterReadResourceAttribute';
import { resourceAttributeRouterUpdateResourceAttribute } from './resourceAttributeRouterUpdateResourceAttribute';

export const resourceAttributeRouter = Router(options)
  .use('/', resourceAttributeRouterCreateResourceAttribute)
  .use('/:resourceAttributeId', resourceAttributeRouterDeleteResourceAttribute)
  .use('/:resourceAttributeId', resourceAttributeRouterReadResourceAttribute)
  .use('/:resourceAttributeId', resourceAttributeRouterUpdateResourceAttribute);
