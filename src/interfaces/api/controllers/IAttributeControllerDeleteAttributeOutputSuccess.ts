import { Types } from 'mongoose';

export interface IAttributeControllerDeleteAttributeOutputSuccess {
  error: false;
  payload: {
    attributeId: Types.ObjectId;
  };
}
