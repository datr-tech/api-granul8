import { AttributeModel } from '@app-ag/api/models';
import { baseStat } from '@app-ag/api/util/baseStat';
import {
  IAttributeControllerCreateAttribute,
  IAttributeControllerCreateAttributeOutputError,
  IAttributeControllerCreateAttributeOutputSuccess,
} from '@app-ag/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * attributeControllerCreateAttribute
 *
 * The granul8 API create attribute controller.
 *
 * @param { IAttributeControllerCreateAttributeInput } params
 * @param { Types.ObjectId } params.attributeId
 * @param { Types.ObjectId } params.attributeTypeId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt  (Optional)
 *
 * @returns { Promise<IAttributeControllerCreateAttributeOutput> }
 * @returns { Promise<IAttributeControllerCreateAttributeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IAttributeControllerCreateAttributeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { attributeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const attributeControllerCreateAttribute: IAttributeControllerCreateAttribute =
  async ({
    attributeTypeId,
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
      const attributeId = new Types.ObjectId();
      const modelParams = {
        attributeId,
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
       * to create a new instance of 'AttributeModel'.
       * 'db-granul8'. Then save the created
       * model to the associated store: 'db-granul8',
       */
      const attributeModel = new AttributeModel(modelParams);
      await attributeModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model's primary key.
       */
      stat.error = false;
      stat.payload = {
        attributeId,
        responseStatusCode: 201,
      };

      /*
       * Cast the response object to
       * 'IAttributeControllerCreateAttributeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IAttributeControllerCreateAttributeOutput'.
       */
      return stat as IAttributeControllerCreateAttributeOutputSuccess;
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
       * Cast the response object to 'IAttributeControllerCreateAttributeOutputError',
       */
      return stat as IAttributeControllerCreateAttributeOutputError;
    }
  };
