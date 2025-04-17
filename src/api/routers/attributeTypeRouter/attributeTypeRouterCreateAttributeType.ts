import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { attributeTypeValidationSchemaCreateAttributeType } from '@freight/granul8-router-validation-schemas';
import { attributeTypeController } from '@app/api/controllers/attributeTypeController';
import { IAttributeTypeModel } from '@app/interfaces/api/models/IAttributeTypeModel';

export const attributeTypeRouterCreateAttributeType = Router(options).post(
  '/',
  checkSchema(<Schema>attributeTypeValidationSchemaCreateAttributeType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IAttributeTypeModel>(req);
      const attributeTypeId = await attributeTypeController.createAttributeType(validatedParams);

      res.status(201).send({ attributeTypeId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
