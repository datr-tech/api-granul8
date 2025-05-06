import { ResourceAttributeModel } from '@app-ag/api/models';
import { baseStat } from '@app-ag/api/util/baseStat';
import {
  IResourceAttributeControllerUpdateResourceAttribute,
  IResourceAttributeControllerUpdateResourceAttributeOutputError,
  IResourceAttributeControllerUpdateResourceAttributeOutputSuccess,
} from '@app-ag/interfaces/api/controllers';

/**
 * resourceAttributeControllerUpdateResourceAttribute
 *
 * The granul8 API update resourceAttribute controller.
 *
 * @param { IResourceAttributeControllerUpdateResourceAttributeInput } params
 * @param { Types.ObjectId } params.resourceAttributeId
 * @param { Types.ObjectId } params.payload.attributeId  (Optional)
 * @param { Types.ObjectId } params.payload.resourceId  (Optional)
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IResourceAttributeControllerUpdateResourceAttributeOutput> }
 * @returns { Promise<IResourceAttributeControllerUpdateResourceAttributeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IResourceAttributeControllerUpdateResourceAttributeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { resourceAttributeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const resourceAttributeControllerUpdateResourceAttribute: IResourceAttributeControllerUpdateResourceAttribute =
  async ({ resourceAttributeId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'ResourceAttributeModel'
       * using the received 'resourceAttributeId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await ResourceAttributeModel.findOneAndUpdate(
        {
          _id: resourceAttributeId,
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
        resourceAttributeId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to 'IResourceAttributeControllerUpdateResourceAttributeOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'IResourceAttributeControllerUpdateResourceAttributeOutput'.
       */
      return stat as IResourceAttributeControllerUpdateResourceAttributeOutputSuccess;
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
       * Cast the response object to 'IResourceAttributeControllerUpdateResourceAttributeOutputError',
       */
      return stat as IResourceAttributeControllerUpdateResourceAttributeOutputError;
    }
  };
