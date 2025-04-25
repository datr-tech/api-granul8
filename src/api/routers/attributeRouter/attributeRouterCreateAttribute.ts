import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@datr.tech/leith-config-api-router-options';
import { attributeValidationSchemaCreateAttribute } from '@datr.tech/cargo-router-validation-schemas-granul8';
import { attributeController } from '@app/api/controllers/attributeController';
import { IAttributeModel } from '@app/interfaces/api/models/IAttributeModel';

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
