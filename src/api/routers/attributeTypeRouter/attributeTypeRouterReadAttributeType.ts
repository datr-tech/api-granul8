import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { attributeTypeValidationSchemaReadAttributeType } from '@freight/granul8-router-validation-schemas';
import { attributeTypeController } from '@app/api/controllers/attributeTypeController';

export const attributeTypeRouterReadAttributeType = Router(options).get(
  '/',
  checkSchema(<Schema>attributeTypeValidationSchemaReadAttributeType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { attributeTypeId } = matchedData(req);
      const attributeType = await attributeTypeController.readAttributeType({ attributeTypeId });

      res.status(200).send({ attributeType });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
