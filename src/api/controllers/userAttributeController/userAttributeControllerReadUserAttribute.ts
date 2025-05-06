import { UserAttributeModel } from '@app-ag/api/models';
import { baseStat } from '@app-ag/api/util/baseStat';
import {
  IUserAttributeControllerReadUserAttribute,
  IUserAttributeControllerReadUserAttributeOutputError,
  IUserAttributeControllerReadUserAttributeOutputSuccess,
} from '@app-ag/interfaces/api/controllers';

/**
 * userAttributeControllerReadUserAttribute
 *
 * The granul8 API read userAttribute controller.
 *
 * @param { IUserAttributeControllerReadUserAttributeInput } params
 * @param { Types.ObjectId } params.userAttributeId
 *
 * @returns { Promise<IUserAttributeControllerReadUserAttributeOutput> }
 * @returns { Promise<IUserAttributeControllerReadUserAttributeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IUserAttributeControllerReadUserAttributeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { userAttributeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const userAttributeControllerReadUserAttribute: IUserAttributeControllerReadUserAttribute =
  async ({ userAttributeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'UserAttributeModel'
       * using the received 'userAttributeId' param.
       */
      const userAttributeModel = await UserAttributeModel.findById(userAttributeId);

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = {
        userAttributeModel,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to
       * 'IUserAttributeControllerReadUserAttributeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IUserAttributeControllerReadUserAttributeOutput'.
       */
      return stat as IUserAttributeControllerReadUserAttributeOutputSuccess;
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
       * Cast the response object to 'IUserAttributeControllerReadUserAttributeOutputError',
       */
      return stat as IUserAttributeControllerReadUserAttributeOutputError;
    }
  };
