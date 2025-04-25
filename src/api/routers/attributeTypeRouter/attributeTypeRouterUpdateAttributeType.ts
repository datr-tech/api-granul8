import { attributeTypeController } from '@app-ag/api/controllers/attributeTypeController';
import { attributeTypeValidationSchemaUpdateAttributeType } from '@datr.tech/cargo-router-validation-schemas-granul8';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const attributeTypeRouterUpdateAttributeType = Router(options).patch(
  '/',
  checkSchema(<Schema>attributeTypeValidationSchemaUpdateAttributeType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { attributeTypeId, ...payload } = matchedData(req);
      const updateStatus = await attributeTypeController.updateAttributeType({
        attributeTypeId,
        payload,
      });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
