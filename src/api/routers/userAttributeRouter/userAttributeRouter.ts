import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { userAttributeRouterCreateUserAttribute } from './userAttributeRouterCreateUserAttribute';
import { userAttributeRouterDeleteUserAttribute } from './userAttributeRouterDeleteUserAttribute';
import { userAttributeRouterReadUserAttribute } from './userAttributeRouterReadUserAttribute';
import { userAttributeRouterUpdateUserAttribute } from './userAttributeRouterUpdateUserAttribute';

export const userAttributeRouter = Router(options)
  .use('/', userAttributeRouterCreateUserAttribute)
  .use('/:userAttributeId', userAttributeRouterDeleteUserAttribute)
  .use('/:userAttributeId', userAttributeRouterReadUserAttribute)
  .use('/:userAttributeId', userAttributeRouterUpdateUserAttribute);
