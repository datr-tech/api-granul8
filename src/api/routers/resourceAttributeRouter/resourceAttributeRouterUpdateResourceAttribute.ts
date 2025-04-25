import { resourceAttributeController } from '@app-ag/api/controllers/resourceAttributeController';
import { resourceAttributeValidationSchemaUpdateResourceAttribute } from '@datr.tech/cargo-router-validation-schemas-granul8';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const resourceAttributeRouterUpdateResourceAttribute = Router(options).patch(
  '/',
  checkSchema(<Schema>resourceAttributeValidationSchemaUpdateResourceAttribute),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { resourceAttributeId, ...payload } = matchedData(req);
      const updateStatus = await resourceAttributeController.updateResourceAttribute({
        resourceAttributeId,
        payload,
      });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
