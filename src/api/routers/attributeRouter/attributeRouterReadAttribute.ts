import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@datr.tech/leith-config-api-router-options';
import { attributeValidationSchemaReadAttribute } from '@datr.tech/cargo-router-validation-schemas-granul8';
import { attributeController } from '@app/api/controllers/attributeController';

export const attributeRouterReadAttribute = Router(options).get(
  '/',
  checkSchema(<Schema>attributeValidationSchemaReadAttribute),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { attributeId } = matchedData(req);
      const attribute = await attributeController.readAttribute({ attributeId });

      res.status(200).send({ attribute });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
