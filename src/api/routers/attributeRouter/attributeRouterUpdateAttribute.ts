import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@datr.tech/leith-config-api-router-options';
import { attributeValidationSchemaUpdateAttribute } from '@datr.tech/cargo-router-validation-schemas-granul8';
import { attributeController } from '@app/api/controllers/attributeController';

export const attributeRouterUpdateAttribute = Router(options).patch(
  '/',
  checkSchema(<Schema>attributeValidationSchemaUpdateAttribute),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { attributeId, ...payload } = matchedData(req);
      const updateStatus = await attributeController.updateAttribute({ attributeId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
