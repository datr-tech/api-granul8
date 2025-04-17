import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { userAttributeValidationSchemaCreateUserAttribute } from '@freight/granul8-router-validation-schemas';
import { userAttributeController } from '@app/api/controllers/userAttributeController';
import { IUserAttributeModel } from '@app/interfaces/api/models/IUserAttributeModel';

export const userAttributeRouterCreateUserAttribute = Router(options).post(
  '/',
  checkSchema(<Schema>userAttributeValidationSchemaCreateUserAttribute),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IUserAttributeModel>(req);
      const userAttributeId = await userAttributeController.createUserAttribute(validatedParams);

      res.status(201).send({ userAttributeId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
