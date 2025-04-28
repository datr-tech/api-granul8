import { Types } from 'mongoose';

export interface IAttributeControllerUpdateAttributeOutputSuccess {
  error: false;
  payload: {
    attributeId: Types.ObjectId;
  };
}
