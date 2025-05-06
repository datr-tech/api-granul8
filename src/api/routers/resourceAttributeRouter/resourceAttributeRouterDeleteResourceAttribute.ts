import { resourceAttributeController } from '@app-ag/api/controllers/resourceAttributeController';
import {
  IResourceAttributeControllerDeleteResourceAttributeOutputError as IControllerError,
  IResourceAttributeControllerDeleteResourceAttributeOutputSuccess as IControllerSuccess,
} from '@app-ag/interfaces/api/controllers';
import { IResourceAttributeModel } from '@app-ag/interfaces/api/models/IResourceAttributeModel';
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

/**
 * @name					resourceAttributeRouterDeleteResourceAttribute
 *
 * @description		The 'deleteResourceAttribute' router for 'resourceAttribute', whose expected
 *                inputs have been defined within the following schema:
 *                'resourceAttributeValidationSchemaDeleteResourceAttribute'.
 *
 *                The schema will be used by 'express-validator' to perform input validation.
 *                When the validation process succeeds, control will pass to the associated
 *                controller, 'resourceAttributeController', which, when successful, will return
 *                a common status (or 'stat') object, whose 'payload' will contain
 *                'resourceAttributeId'.
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
export const resourceAttributeRouterDeleteResourceAttribute = Router(options).delete(
  '/',
  checkSchema(<Schema>resourceAttributeValidationSchemaDeleteResourceAttribute),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    try {
      /*
       * Handle validation errors
       * ------------------------
       *
       * Handle validation errors in relation to the fields
       * defined within 'resourceAttributeValidationSchemaDeleteResourceAttribute'.
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
       * to 'resourceAttributeController'.
       */

      const validatedParams = matchedData<IResourceAttributeModel>(req);
      const stat =
        await resourceAttributeController.deleteResourceAttribute(validatedParams);

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
       * 'resourceAttributeId' from 'stat.payload' and return
       * it with an appropriate status code.
       */

      const controllerResponsePayload = (stat as IControllerSuccess).payload;
      const { responseStatusCode } = controllerResponsePayload;
      res
        .status(responseStatusCode)
        .send({ resourceAttributeId: controllerResponsePayload['resourceAttributeId'] });
    } catch (error) {
      /*
       * Handle any errors not caught above.
       */
      const { message } = error;
      res.status(500).send({ error: message });
    }
  },
);
