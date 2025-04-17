import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { attributeValidationSchemaUpdateAttribute } from '@freight/granul8-router-validation-schemas';
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
