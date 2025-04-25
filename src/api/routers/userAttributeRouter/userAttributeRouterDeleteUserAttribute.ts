import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@datr.tech/leith-config-api-router-options';
import { userAttributeValidationSchemaDeleteUserAttribute } from '@datr.tech/cargo-router-validation-schemas-granul8';
import { userAttributeController } from '@app/api/controllers/userAttributeController';

export const userAttributeRouterDeleteUserAttribute = Router(options).get(
  '/',
  checkSchema(<Schema>userAttributeValidationSchemaDeleteUserAttribute),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { userAttributeId } = matchedData(req);
      const deleteResponse = await userAttributeController.deleteUserAttribute({ userAttributeId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
