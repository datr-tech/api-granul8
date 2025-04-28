import { AttributeTypeModel } from '@app-ag/api/models';
import { baseStat } from '@app-ag/api/util/baseStat';
import {
  IAttributeTypeControllerReadAttributeType,
  IAttributeTypeControllerReadAttributeTypeOutputError,
  IAttributeTypeControllerReadAttributeTypeOutputSuccess,
} from '@app-ag/interfaces/api/controllers';

/**
 * attributeTypeControllerReadAttributeType
 *
 * The granul8 API read attributeType controller.
 *
 * @param { IAttributeTypeControllerReadAttributeTypeInput } params
 * @param { Types.ObjectId } params.attributeTypeId
 *
 * @returns { Promise<IAttributeTypeControllerReadAttributeTypeOutput> }
 * @returns { Promise<IAttributeTypeControllerReadAttributeTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IAttributeTypeControllerReadAttributeTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { attributeTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const attributeTypeControllerReadAttributeType: IAttributeTypeControllerReadAttributeType =
  async ({ attributeTypeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'AttributeTypeModel'
       * using the received 'attributeTypeId' param.
       */
      const attributeTypeModel = await AttributeTypeModel.findById(attributeTypeId);

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = { attributeTypeModel };

      /*
       * Cast the response object to 'IAttributeTypeControllerReadAttributeTypeOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'IAttributeTypeControllerReadAttributeTypeOutput'.
       */
      return stat as IAttributeTypeControllerReadAttributeTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IAttributeTypeControllerReadAttributeTypeOutputError',
       */
      return stat as IAttributeTypeControllerReadAttributeTypeOutputError;
    }
  };
