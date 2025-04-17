import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { attributeValidationSchemaReadAttribute } from '@freight/granul8-router-validation-schemas';
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
