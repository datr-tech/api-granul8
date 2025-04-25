import { attributeController } from '@app-ag/api/controllers/attributeController';
import { IAttributeModel } from '@app-ag/interfaces/api/models/IAttributeModel';
import { attributeValidationSchemaCreateAttribute } from '@datr.tech/cargo-router-validation-schemas-granul8';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const attributeRouterCreateAttribute = Router(options).post(
  '/',
  checkSchema(<Schema>attributeValidationSchemaCreateAttribute),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IAttributeModel>(req);
      const attributeId = await attributeController.createAttribute(validatedParams);

      res.status(201).send({ attributeId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
