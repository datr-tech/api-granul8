import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { resourceAttributeValidationSchemaDeleteResourceAttribute } from '@freight/granul8-router-validation-schemas';
import { resourceAttributeController } from '@app/api/controllers/resourceAttributeController';

export const resourceAttributeRouterDeleteResourceAttribute = Router(options).get(
  '/',
  checkSchema(<Schema>resourceAttributeValidationSchemaDeleteResourceAttribute),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { resourceAttributeId } = matchedData(req);
      const deleteResponse = await resourceAttributeController.deleteResourceAttribute({ resourceAttributeId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
