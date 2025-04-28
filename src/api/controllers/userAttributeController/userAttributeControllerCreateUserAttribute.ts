import { UserAttributeModel } from '@app-ag/api/models';
import { baseStat } from '@app-ag/api/util/baseStat';
import {
  IUserAttributeControllerCreateUserAttribute,
  IUserAttributeControllerCreateUserAttributeOutputError,
  IUserAttributeControllerCreateUserAttributeOutputSuccess,
} from '@app-ag/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * userAttributeControllerCreateUserAttribute
 *
 * The granul8 API create userAttribute controller.
 *
 * @param { IUserAttributeControllerCreateUserAttributeInput } params
 * @param { Types.ObjectId } params.userAttributeId
 * @param { Types.ObjectId } params.attributeId
 * @param { Types.ObjectId } params.userId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IUserAttributeControllerCreateUserAttributeOutput> }
 * @returns { Promise<IUserAttributeControllerCreateUserAttributeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IUserAttributeControllerCreateUserAttributeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { userAttributeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const userAttributeControllerCreateUserAttribute: IUserAttributeControllerCreateUserAttribute =
  async ({
    attributeId,
    userId,
    description,
    name,
    adminStatusId,
    adminUserId,
    createdAt,
    updatedAt,
  }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Populate the local 'modelParams' variable
       * with the received inputs.
       */
      const userAttributeId = new Types.ObjectId();
      const modelParams = {
        userAttributeId,
        attributeId,
        userId,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'UserAttributeModel'.
       * 'db-granul8'. Then save the created
       * model to the associated store: 'db-granul8',
       */
      const userAttributeModel = new UserAttributeModel(modelParams);
      await userAttributeModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model's primary key.
       */
      stat.error = false;
      stat.payload = { userAttributeId };

      /*
       * Cast the response object to
       * 'IUserAttributeControllerCreateUserAttributeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IUserAttributeControllerCreateUserAttributeOutput'.
       */
      return stat as IUserAttributeControllerCreateUserAttributeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IUserAttributeControllerCreateUserAttributeOutputError',
       */
      return stat as IUserAttributeControllerCreateUserAttributeOutputError;
    }
  };
