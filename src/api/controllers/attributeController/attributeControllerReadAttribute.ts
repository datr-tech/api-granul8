import { AttributeModel } from '@app-ag/api/models';
import { baseStat } from '@app-ag/api/util/baseStat';
import {
  IAttributeControllerReadAttribute,
  IAttributeControllerReadAttributeOutputError,
  IAttributeControllerReadAttributeOutputSuccess,
} from '@app-ag/interfaces/api/controllers';

/**
 * attributeControllerReadAttribute
 *
 * The granul8 API read attribute controller.
 *
 * @param { IAttributeControllerReadAttributeInput } params
 * @param { Types.ObjectId } params.attributeId
 *
 * @returns { Promise<IAttributeControllerReadAttributeOutput> }
 * @returns { Promise<IAttributeControllerReadAttributeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IAttributeControllerReadAttributeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { attributeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const attributeControllerReadAttribute: IAttributeControllerReadAttribute =
  async ({ attributeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'AttributeModel'
       * using the received 'attributeId' param.
       */
      const attributeModel = await AttributeModel.findById(attributeId);

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = { attributeModel };

      /*
       * Cast the response object to
       * 'IAttributeControllerReadAttributeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IAttributeControllerReadAttributeOutput'.
       */
      return stat as IAttributeControllerReadAttributeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IAttributeControllerReadAttributeOutputError',
       */
      return stat as IAttributeControllerReadAttributeOutputError;
    }
  };
