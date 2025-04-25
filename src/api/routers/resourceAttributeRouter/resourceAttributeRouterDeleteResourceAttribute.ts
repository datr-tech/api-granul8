import { resourceAttributeController } from '@app-ag/api/controllers/resourceAttributeController';
import { resourceAttributeValidationSchemaDeleteResourceAttribute } from '@datr.tech/cargo-router-validation-schemas-granul8';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const resourceAttributeRouterDeleteResourceAttribute = Router(options).get(
  '/',
  checkSchema(<Schema>resourceAttributeValidationSchemaDeleteResourceAttribute),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { resourceAttributeId } = matchedData(req);
      const deleteResponse = await resourceAttributeController.deleteResourceAttribute({
        resourceAttributeId,
      });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
