import { Types } from 'mongoose';

export interface IAttributeTypeControllerCreateAttributeTypeOutputSuccess {
  error: false;
  payload: {
    attributeTypeId: Types.ObjectId;
  };
}
