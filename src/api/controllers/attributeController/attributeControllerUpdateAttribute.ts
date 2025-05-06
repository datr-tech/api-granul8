import { AttributeModel } from '@app-ag/api/models';
import { baseStat } from '@app-ag/api/util/baseStat';
import {
  IAttributeControllerUpdateAttribute,
  IAttributeControllerUpdateAttributeOutputError,
  IAttributeControllerUpdateAttributeOutputSuccess,
} from '@app-ag/interfaces/api/controllers';

/**
 * attributeControllerUpdateAttribute
 *
 * The granul8 API update attribute controller.
 *
 * @param { IAttributeControllerUpdateAttributeInput } params
 * @param { Types.ObjectId } params.attributeId
 * @param { Types.ObjectId } params.payload.attributeTypeId  (Optional)
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IAttributeControllerUpdateAttributeOutput> }
 * @returns { Promise<IAttributeControllerUpdateAttributeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IAttributeControllerUpdateAttributeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { attributeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const attributeControllerUpdateAttribute: IAttributeControllerUpdateAttribute =
  async ({ attributeId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'AttributeModel'
       * using the received 'attributeId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await AttributeModel.findOneAndUpdate(
        {
          _id: attributeId,
        },
        payload,
        {
          includeResultMetadata: true,
        },
      );

      /*
       * Use the standard controller response object,
       * 'stat', to return the updated model's primary key.
       */
      stat.error = false;
      stat.payload = {
        attributeId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to 'IAttributeControllerUpdateAttributeOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'IAttributeControllerUpdateAttributeOutput'.
       */
      return stat as IAttributeControllerUpdateAttributeOutputSuccess;
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
       * Cast the response object to 'IAttributeControllerUpdateAttributeOutputError',
       */
      return stat as IAttributeControllerUpdateAttributeOutputError;
    }
  };
