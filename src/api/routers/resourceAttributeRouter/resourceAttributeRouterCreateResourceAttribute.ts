import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@datr.tech/leith-config-api-router-options';
import { resourceAttributeValidationSchemaCreateResourceAttribute } from '@datr.tech/cargo-router-validation-schemas-granul8';
import { resourceAttributeController } from '@app/api/controllers/resourceAttributeController';
import { IResourceAttributeModel } from '@app/interfaces/api/models/IResourceAttributeModel';

export const resourceAttributeRouterCreateResourceAttribute = Router(options).post(
  '/',
  checkSchema(<Schema>resourceAttributeValidationSchemaCreateResourceAttribute),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IResourceAttributeModel>(req);
      const resourceAttributeId = await resourceAttributeController.createResourceAttribute(validatedParams);

      res.status(201).send({ resourceAttributeId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
