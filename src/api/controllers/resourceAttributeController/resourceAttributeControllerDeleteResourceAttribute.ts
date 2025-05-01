import { ResourceAttributeModel } from '@app-ag/api/models';
import { baseStat } from '@app-ag/api/util/baseStat';
import {
  IResourceAttributeControllerDeleteResourceAttribute,
  IResourceAttributeControllerDeleteResourceAttributeOutputError,
  IResourceAttributeControllerDeleteResourceAttributeOutputSuccess,
} from '@app-ag/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * resourceAttributeControllerDeleteResourceAttribute
 *
 * The granul8 API delete resourceAttribute controller.
 *
 * @param { IResourceAttributeControllerDeleteResourceAttributeInput } params
 * @param { Types.ObjectId } params.resourceAttributeId
 *
 * @returns { Promise<IResourceAttributeControllerDeleteResourceAttributeOutput> }
 * @returns { Promise<IResourceAttributeControllerDeleteResourceAttributeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IResourceAttributeControllerDeleteResourceAttributeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { resourceAttributeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const resourceAttributeControllerDeleteResourceAttribute: IResourceAttributeControllerDeleteResourceAttribute =
  async ({ resourceAttributeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'ResourceAttributeModel'
       * using the received 'resourceAttributeId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
      await ResourceAttributeModel.findOneAndUpdate(
        {
          _id: resourceAttributeId,
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
      stat.payload = { resourceAttributeId };

      /*
       * Cast the response object to
       * 'IResourceAttributeControllerDeleteResourceAttributeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IResourceAttributeControllerDeleteResourceAttributeOutput'.
       */
      return stat as IResourceAttributeControllerDeleteResourceAttributeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IResourceAttributeControllerDeleteResourceAttributeOutputError',
       */
      return stat as IResourceAttributeControllerDeleteResourceAttributeOutputError;
    }
  };
