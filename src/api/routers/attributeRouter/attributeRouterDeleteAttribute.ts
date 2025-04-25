import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@datr.tech/leith-config-api-router-options';
import { attributeValidationSchemaDeleteAttribute } from '@datr.tech/cargo-router-validation-schemas-granul8';
import { attributeController } from '@app/api/controllers/attributeController';

export const attributeRouterDeleteAttribute = Router(options).get(
  '/',
  checkSchema(<Schema>attributeValidationSchemaDeleteAttribute),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { attributeId } = matchedData(req);
      const deleteResponse = await attributeController.deleteAttribute({ attributeId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
