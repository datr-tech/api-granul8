import { Types } from 'mongoose';

export interface IAttributeTypeControllerDeleteAttributeTypeOutputSuccess {
  error: false;
  payload: {
    attributeTypeId: Types.ObjectId;
    responseStatusCode: number;
  };
}
