import { AttributeModel } from '@app-ag/api/models';
import { baseStat } from '@app-ag/api/util/baseStat';
import {
  IAttributeControllerDeleteAttribute,
  IAttributeControllerDeleteAttributeOutputError,
  IAttributeControllerDeleteAttributeOutputSuccess,
} from '@app-ag/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * attributeControllerDeleteAttribute
 *
 * The granul8 API delete attribute controller.
 *
 * @param { IAttributeControllerDeleteAttributeInput } params
 * @param { Types.ObjectId } params.attributeId
 *
 * @returns { Promise<IAttributeControllerDeleteAttributeOutput> }
 * @returns { Promise<IAttributeControllerDeleteAttributeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IAttributeControllerDeleteAttributeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { attributeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const attributeControllerDeleteAttribute: IAttributeControllerDeleteAttribute =
  async ({ attributeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'AttributeModel'
       * using the received 'attributeId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
      await AttributeModel.findOneAndUpdate(
        {
          _id: attributeId,
        },
        {
          adminStatusId: new Types.ObjectId(),
        },
        {
          includeResultMetadata: true,
        },
      );

      /*
       * Use the standard controller response object,
       * 'stat', to return the primary key of the
       * "soft deleted" model.
       */
      stat.error = false;
      stat.payload = {
        attributeId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to
       * 'IAttributeControllerDeleteAttributeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IAttributeControllerDeleteAttributeOutput'.
       */
      return stat as IAttributeControllerDeleteAttributeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = {
        message,
        responseStatusCode: 404,
      };

      /*
       * Cast the response object to 'IAttributeControllerDeleteAttributeOutputError',
       */
      return stat as IAttributeControllerDeleteAttributeOutputError;
    }
  };
