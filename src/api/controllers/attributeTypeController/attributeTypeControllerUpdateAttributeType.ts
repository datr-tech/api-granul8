import { AttributeTypeModel } from '@app-ag/api/models';
import { baseStat } from '@app-ag/api/util/baseStat';
import {
  IAttributeTypeControllerUpdateAttributeType,
  IAttributeTypeControllerUpdateAttributeTypeOutputError,
  IAttributeTypeControllerUpdateAttributeTypeOutputSuccess,
} from '@app-ag/interfaces/api/controllers';

/**
 * attributeTypeControllerUpdateAttributeType
 *
 * The granul8 API update attributeType controller.
 *
 * @param { IAttributeTypeControllerUpdateAttributeTypeInput } params
 * @param { Types.ObjectId } params.attributeTypeId
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IAttributeTypeControllerUpdateAttributeTypeOutput> }
 * @returns { Promise<IAttributeTypeControllerUpdateAttributeTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IAttributeTypeControllerUpdateAttributeTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { attributeTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const attributeTypeControllerUpdateAttributeType: IAttributeTypeControllerUpdateAttributeType =
  async ({ attributeTypeId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'AttributeTypeModel'
       * using the received 'attributeTypeId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await AttributeTypeModel.findOneAndUpdate(
        {
          _id: attributeTypeId,
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
        attributeTypeId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to 'IAttributeTypeControllerUpdateAttributeTypeOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'IAttributeTypeControllerUpdateAttributeTypeOutput'.
       */
      return stat as IAttributeTypeControllerUpdateAttributeTypeOutputSuccess;
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
       * Cast the response object to 'IAttributeTypeControllerUpdateAttributeTypeOutputError',
       */
      return stat as IAttributeTypeControllerUpdateAttributeTypeOutputError;
    }
  };
