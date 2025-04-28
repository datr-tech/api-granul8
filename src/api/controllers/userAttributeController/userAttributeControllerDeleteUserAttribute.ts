import { UserAttributeModel } from '@app-ag/api/models';
import { baseStat } from '@app-ag/api/util/baseStat';
import {
  IUserAttributeControllerDeleteUserAttribute,
  IUserAttributeControllerDeleteUserAttributeOutputError,
  IUserAttributeControllerDeleteUserAttributeOutputSuccess,
} from '@app-ag/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * userAttributeControllerDeleteUserAttribute
 *
 * The granul8 API delete userAttribute controller.
 *
 * @param { IUserAttributeControllerDeleteUserAttributeInput } params
 * @param { Types.ObjectId } params.userAttributeId
 *
 * @returns { Promise<IUserAttributeControllerDeleteUserAttributeOutput> }
 * @returns { Promise<IUserAttributeControllerDeleteUserAttributeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IUserAttributeControllerDeleteUserAttributeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { userAttributeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const userAttributeControllerDeleteUserAttribute: IUserAttributeControllerDeleteUserAttribute =
  async ({ userAttributeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'UserAttributeModel'
       * using the received 'userAttributeId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
      const userAttributeModel = await UserAttributeModel.findOneAndUpdate(
        {
          _id: userAttributeId,
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
      stat.payload = { userAttributeId };

      /*
       * Cast the response object to
       * 'IUserAttributeControllerDeleteUserAttributeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IUserAttributeControllerDeleteUserAttributeOutput'.
       */
      return stat as IUserAttributeControllerDeleteUserAttributeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IUserAttributeControllerDeleteUserAttributeOutputError',
       */
      return stat as IUserAttributeControllerDeleteUserAttributeOutputError;
    }
  };
