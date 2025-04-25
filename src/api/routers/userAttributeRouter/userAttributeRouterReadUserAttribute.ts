import { userAttributeController } from '@app-ag/api/controllers/userAttributeController';
import { userAttributeValidationSchemaReadUserAttribute } from '@datr.tech/cargo-router-validation-schemas-granul8';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const userAttributeRouterReadUserAttribute = Router(options).get(
  '/',
  checkSchema(<Schema>userAttributeValidationSchemaReadUserAttribute),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { userAttributeId } = matchedData(req);
      const userAttribute = await userAttributeController.readUserAttribute({
        userAttributeId,
      });

      res.status(200).send({ userAttribute });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
