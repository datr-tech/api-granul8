import { attributeTypeController } from '@app-ag/api/controllers/attributeTypeController';
import { IAttributeTypeModel } from '@app-ag/interfaces/api/models/IAttributeTypeModel';
import { attributeTypeValidationSchemaCreateAttributeType } from '@datr.tech/cargo-router-validation-schemas-granul8';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const attributeTypeRouterCreateAttributeType = Router(options).post(
  '/',
  checkSchema(<Schema>attributeTypeValidationSchemaCreateAttributeType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IAttributeTypeModel>(req);
      const attributeTypeId =
        await attributeTypeController.createAttributeType(validatedParams);

      res.status(201).send({ attributeTypeId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
