import { Router } from 'express';
import { options } from '@datr.tech/leith-config-api-router-options';
import { attributeTypeRouterCreateAttributeType } from './attributeTypeRouterCreateAttributeType';
import { attributeTypeRouterDeleteAttributeType } from './attributeTypeRouterDeleteAttributeType';
import { attributeTypeRouterReadAttributeType } from './attributeTypeRouterReadAttributeType';
import { attributeTypeRouterUpdateAttributeType } from './attributeTypeRouterUpdateAttributeType';

export const attributeTypeRouter = Router(options)
  .use('/', attributeTypeRouterCreateAttributeType)
  .use('/:attributeTypeId', attributeTypeRouterDeleteAttributeType)
  .use('/:attributeTypeId', attributeTypeRouterReadAttributeType)
  .use('/:attributeTypeId', attributeTypeRouterUpdateAttributeType);
