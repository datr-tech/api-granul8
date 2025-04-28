import { UserAttributeModel } from '@app-ag/api/models';
import { baseStat } from '@app-ag/api/util/baseStat';
import {
  IUserAttributeControllerUpdateUserAttribute,
  IUserAttributeControllerUpdateUserAttributeOutputError,
  IUserAttributeControllerUpdateUserAttributeOutputSuccess,
} from '@app-ag/interfaces/api/controllers';

/**
 * userAttributeControllerUpdateUserAttribute
 *
 * The granul8 API update userAttribute controller.
 *
 * @param { IUserAttributeControllerUpdateUserAttributeInput } params
 * @param { Types.ObjectId } params.userAttributeId
 * @param { Types.ObjectId } params.payload.attributeId  (Optional)
 * @param { Types.ObjectId } params.payload.userId  (Optional)
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IUserAttributeControllerUpdateUserAttributeOutput> }
 * @returns { Promise<IUserAttributeControllerUpdateUserAttributeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IUserAttributeControllerUpdateUserAttributeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { userAttributeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const userAttributeControllerUpdateUserAttribute: IUserAttributeControllerUpdateUserAttribute =
  async ({ userAttributeId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'UserAttributeModel'
       * using the received 'userAttributeId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await UserAttributeModel.findOneAndUpdate(
        {
          _id: userAttributeId,
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
      stat.payload = { userAttributeId };

      /*
       * Cast the response object to 'IUserAttributeControllerUpdateUserAttributeOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'IUserAttributeControllerUpdateUserAttributeOutput'.
       */
      return stat as IUserAttributeControllerUpdateUserAttributeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IUserAttributeControllerUpdateUserAttributeOutputError',
       */
      return stat as IUserAttributeControllerUpdateUserAttributeOutputError;
    }
  };
