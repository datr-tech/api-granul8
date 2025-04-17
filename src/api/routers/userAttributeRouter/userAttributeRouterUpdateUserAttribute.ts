import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { userAttributeValidationSchemaUpdateUserAttribute } from '@freight/granul8-router-validation-schemas';
import { userAttributeController } from '@app/api/controllers/userAttributeController';

export const userAttributeRouterUpdateUserAttribute = Router(options).patch(
  '/',
  checkSchema(<Schema>userAttributeValidationSchemaUpdateUserAttribute),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { userAttributeId, ...payload } = matchedData(req);
      const updateStatus = await userAttributeController.updateUserAttribute({ userAttributeId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
