import { userAttributeController } from '@app-ag/api/controllers/userAttributeController';
import { IUserAttributeModel } from '@app-ag/interfaces/api/models/IUserAttributeModel';
import { userAttributeValidationSchemaCreateUserAttribute } from '@datr.tech/cargo-router-validation-schemas-granul8';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const userAttributeRouterCreateUserAttribute = Router(options).post(
  '/',
  checkSchema(<Schema>userAttributeValidationSchemaCreateUserAttribute),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IUserAttributeModel>(req);
      const userAttributeId =
        await userAttributeController.createUserAttribute(validatedParams);

      res.status(201).send({ userAttributeId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
