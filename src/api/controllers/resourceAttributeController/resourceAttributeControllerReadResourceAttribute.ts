import { ResourceAttributeModel } from '@app-ag/api/models';
import { baseStat } from '@app-ag/api/util/baseStat';
import {
  IResourceAttributeControllerReadResourceAttribute,
  IResourceAttributeControllerReadResourceAttributeOutputError,
  IResourceAttributeControllerReadResourceAttributeOutputSuccess,
} from '@app-ag/interfaces/api/controllers';

/**
 * resourceAttributeControllerReadResourceAttribute
 *
 * The granul8 API read resourceAttribute controller.
 *
 * @param { IResourceAttributeControllerReadResourceAttributeInput } params
 * @param { Types.ObjectId } params.resourceAttributeId
 *
 * @returns { Promise<IResourceAttributeControllerReadResourceAttributeOutput> }
 * @returns { Promise<IResourceAttributeControllerReadResourceAttributeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IResourceAttributeControllerReadResourceAttributeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { resourceAttributeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const resourceAttributeControllerReadResourceAttribute: IResourceAttributeControllerReadResourceAttribute =
  async ({ resourceAttributeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'ResourceAttributeModel'
       * using the received 'resourceAttributeId' param.
       */
      const resourceAttributeModel =
        await ResourceAttributeModel.findById(resourceAttributeId);

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = {
        resourceAttributeModel,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to
       * 'IResourceAttributeControllerReadResourceAttributeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IResourceAttributeControllerReadResourceAttributeOutput'.
       */
      return stat as IResourceAttributeControllerReadResourceAttributeOutputSuccess;
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
       * Cast the response object to 'IResourceAttributeControllerReadResourceAttributeOutputError',
       */
      return stat as IResourceAttributeControllerReadResourceAttributeOutputError;
    }
  };
