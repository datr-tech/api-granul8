import { AttributeTypeModel } from '@app-ag/api/models';
import { baseStat } from '@app-ag/api/util/baseStat';
import {
  IAttributeTypeControllerDeleteAttributeType,
  IAttributeTypeControllerDeleteAttributeTypeOutputError,
  IAttributeTypeControllerDeleteAttributeTypeOutputSuccess,
} from '@app-ag/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * attributeTypeControllerDeleteAttributeType
 *
 * The granul8 API delete attributeType controller.
 *
 * @param { IAttributeTypeControllerDeleteAttributeTypeInput } params
 * @param { Types.ObjectId } params.attributeTypeId
 *
 * @returns { Promise<IAttributeTypeControllerDeleteAttributeTypeOutput> }
 * @returns { Promise<IAttributeTypeControllerDeleteAttributeTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IAttributeTypeControllerDeleteAttributeTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { attributeTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const attributeTypeControllerDeleteAttributeType: IAttributeTypeControllerDeleteAttributeType =
  async ({ attributeTypeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'AttributeTypeModel'
       * using the received 'attributeTypeId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
      await AttributeTypeModel.findOneAndUpdate(
        {
          _id: attributeTypeId,
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
      stat.payload = {
        attributeTypeId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to
       * 'IAttributeTypeControllerDeleteAttributeTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IAttributeTypeControllerDeleteAttributeTypeOutput'.
       */
      return stat as IAttributeTypeControllerDeleteAttributeTypeOutputSuccess;
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
       * Cast the response object to 'IAttributeTypeControllerDeleteAttributeTypeOutputError',
       */
      return stat as IAttributeTypeControllerDeleteAttributeTypeOutputError;
    }
  };
