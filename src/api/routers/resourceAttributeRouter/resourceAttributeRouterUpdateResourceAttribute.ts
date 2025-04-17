import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { resourceAttributeValidationSchemaUpdateResourceAttribute } from '@freight/granul8-router-validation-schemas';
import { resourceAttributeController } from '@app/api/controllers/resourceAttributeController';

export const resourceAttributeRouterUpdateResourceAttribute = Router(options).patch(
  '/',
  checkSchema(<Schema>resourceAttributeValidationSchemaUpdateResourceAttribute),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { resourceAttributeId, ...payload } = matchedData(req);
      const updateStatus = await resourceAttributeController.updateResourceAttribute({ resourceAttributeId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
