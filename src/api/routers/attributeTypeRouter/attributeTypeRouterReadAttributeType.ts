import { attributeTypeController } from '@app-ag/api/controllers/attributeTypeController';
import { attributeTypeValidationSchemaReadAttributeType } from '@datr.tech/cargo-router-validation-schemas-granul8';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const attributeTypeRouterReadAttributeType = Router(options).get(
  '/',
  checkSchema(<Schema>attributeTypeValidationSchemaReadAttributeType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { attributeTypeId } = matchedData(req);
      const attributeType = await attributeTypeController.readAttributeType({
        attributeTypeId,
      });

      res.status(200).send({ attributeType });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
