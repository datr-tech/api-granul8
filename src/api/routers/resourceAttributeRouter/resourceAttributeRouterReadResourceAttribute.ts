import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@datr.tech/leith-config-api-router-options';
import { resourceAttributeValidationSchemaReadResourceAttribute } from '@datr.tech/cargo-router-validation-schemas-granul8';
import { resourceAttributeController } from '@app/api/controllers/resourceAttributeController';

export const resourceAttributeRouterReadResourceAttribute = Router(options).get(
  '/',
  checkSchema(<Schema>resourceAttributeValidationSchemaReadResourceAttribute),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { resourceAttributeId } = matchedData(req);
      const resourceAttribute = await resourceAttributeController.readResourceAttribute({ resourceAttributeId });

      res.status(200).send({ resourceAttribute });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
