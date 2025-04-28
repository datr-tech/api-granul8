import { AttributeTypeModel } from '@app-ag/api/models';
import { baseStat } from '@app-ag/api/util/baseStat';
import {
  IAttributeTypeControllerCreateAttributeType,
  IAttributeTypeControllerCreateAttributeTypeOutputError,
  IAttributeTypeControllerCreateAttributeTypeOutputSuccess,
} from '@app-ag/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * attributeTypeControllerCreateAttributeType
 *
 * The granul8 API create attributeType controller.
 *
 * @param { IAttributeTypeControllerCreateAttributeTypeInput } params
 * @param { Types.ObjectId } params.attributeTypeId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IAttributeTypeControllerCreateAttributeTypeOutput> }
 * @returns { Promise<IAttributeTypeControllerCreateAttributeTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IAttributeTypeControllerCreateAttributeTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { attributeTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const attributeTypeControllerCreateAttributeType: IAttributeTypeControllerCreateAttributeType =
  async ({ description, name, adminStatusId, adminUserId, createdAt, updatedAt }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Populate the local 'modelParams' variable
       * with the received inputs.
       */
      const attributeTypeId = new Types.ObjectId();
      const modelParams = {
        attributeTypeId,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'AttributeTypeModel'.
       * 'db-granul8'. Then save the created
       * model to the associated store: 'db-granul8',
       */
      const attributeTypeModel = new AttributeTypeModel(modelParams);
      await attributeTypeModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model's primary key.
       */
      stat.error = false;
      stat.payload = { attributeTypeId };

      /*
       * Cast the response object to
       * 'IAttributeTypeControllerCreateAttributeTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IAttributeTypeControllerCreateAttributeTypeOutput'.
       */
      return stat as IAttributeTypeControllerCreateAttributeTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IAttributeTypeControllerCreateAttributeTypeOutputError',
       */
      return stat as IAttributeTypeControllerCreateAttributeTypeOutputError;
    }
  };
