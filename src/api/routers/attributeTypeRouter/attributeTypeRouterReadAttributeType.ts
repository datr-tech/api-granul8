import { attributeTypeController } from '@app-ag/api/controllers/attributeTypeController';
import {
  IAttributeTypeControllerReadAttributeTypeOutputError as IControllerError,
  IAttributeTypeControllerReadAttributeTypeOutputSuccess as IControllerSuccess,
} from '@app-ag/interfaces/api/controllers';
import { IAttributeTypeModel } from '@app-ag/interfaces/api/models/IAttributeTypeModel';
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

/**
 * @name					attributeTypeRouterReadAttributeType
 *
 * @description		The 'readAttributeType' router for 'attributeType', whose expected
 *                inputs have been defined within the following schema:
 *                'attributeTypeValidationSchemaReadAttributeType'.
 *
 *                The schema will be used by 'express-validator' to perform input validation.
 *                When the validation process succeeds, control will pass to the associated
 *                controller, 'attributeTypeController', which, when successful, will return
 *                a common status (or 'stat') object, whose 'payload' will contain
 *                'attributeTypeModel'.
 *
 * @param					{Request}		req		The Express request.
 * @param         {Response}	res		The Express response.
 * @return				{undefined}
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 *
 * @see		        | Outcomes                    | HTTP status codes |
 *                | --------------------------- | ----------------- |
 *                | On success                  | 200               |
 *                | Router validation error     | 422               |
 *                | Controller validation error | 404               |
 *                | Server error                | 500               |
 */
export const attributeTypeRouterReadAttributeType = Router(options).get(
  '/',
  checkSchema(<Schema>attributeTypeValidationSchemaReadAttributeType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    try {
      /*
       * Handle validation errors
       * ------------------------
       *
       * Handle validation errors in relation to the fields
       * defined within 'attributeTypeValidationSchemaReadAttributeType'.
       * Additionally, and because of the inclusion of 'checkExact()'
       * above, ONLY fields defined within the schema will be accepted.
       */
      if (!errors.isEmpty()) {
        res.status(422).send({ error: errors.array() });
      }

      /*
       * Pass the validated params to the controller
       * -------------------------------------------
       *
       * On validation success, retrieve the 'validatedParams' object
       * from the received 'req' (using 'matchedData') and pass them
       * to 'attributeTypeController'.
       */

      const validatedParams = matchedData<IAttributeTypeModel>(req);
      const stat = await attributeTypeController.readAttributeType(validatedParams);

      /*
       * Handle controller errors
       * ------------------------
       *
       * If the common controller response object, 'stat', is not truthy, or if
       * 'stat.error' equals true, then handle the error returned by the controller.
       */
      if (!stat || stat.error) {
        const { message, responseStatusCode } = (stat as IControllerError).payload;
        res.status(responseStatusCode).send({ error: message });
      }

      /*
       * Handle successful controller responses
       * --------------------------------------
       *
       * If the controller call proved to be successful, extract
       * 'attributeTypeModel' from 'stat.payload' and return
       * it with an appropriate status code.
       */

      const { attributeTypeModel, responseStatusCode } = (stat as IControllerSuccess)
        .payload;
      res.status(responseStatusCode).send({ attributeTypeModel });
    } catch (error) {
      /*
       * Handle any errors not caught above.
       */
      const { message } = error;
      res.status(500).send({ error: message });
    }
  },
);
