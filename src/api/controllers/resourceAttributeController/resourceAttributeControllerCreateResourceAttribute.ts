import { ResourceAttributeModel } from '@app-ag/api/models';
import { baseStat } from '@app-ag/api/util/baseStat';
import {
  IResourceAttributeControllerCreateResourceAttribute,
  IResourceAttributeControllerCreateResourceAttributeOutputError,
  IResourceAttributeControllerCreateResourceAttributeOutputSuccess,
} from '@app-ag/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * resourceAttributeControllerCreateResourceAttribute
 *
 * The granul8 API create resourceAttribute controller.
 *
 * @param { IResourceAttributeControllerCreateResourceAttributeInput } params
 * @param { Types.ObjectId } params.resourceAttributeId
 * @param { Types.ObjectId } params.attributeId
 * @param { Types.ObjectId } params.resourceId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt  (Optional)
 *
 * @returns { Promise<IResourceAttributeControllerCreateResourceAttributeOutput> }
 * @returns { Promise<IResourceAttributeControllerCreateResourceAttributeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IResourceAttributeControllerCreateResourceAttributeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { resourceAttributeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const resourceAttributeControllerCreateResourceAttribute: IResourceAttributeControllerCreateResourceAttribute =
  async ({
    attributeId,
    resourceId,
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
      const resourceAttributeId = new Types.ObjectId();
      const modelParams = {
        resourceAttributeId,
        attributeId,
        resourceId,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'ResourceAttributeModel'.
       * 'db-granul8'. Then save the created
       * model to the associated store: 'db-granul8',
       */
      const resourceAttributeModel = new ResourceAttributeModel(modelParams);
      await resourceAttributeModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model's primary key.
       */
      stat.error = false;
      stat.payload = {
        resourceAttributeId,
        responseStatusCode: 201,
      };

      /*
       * Cast the response object to
       * 'IResourceAttributeControllerCreateResourceAttributeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IResourceAttributeControllerCreateResourceAttributeOutput'.
       */
      return stat as IResourceAttributeControllerCreateResourceAttributeOutputSuccess;
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
       * Cast the response object to 'IResourceAttributeControllerCreateResourceAttributeOutputError',
       */
      return stat as IResourceAttributeControllerCreateResourceAttributeOutputError;
    }
  };
