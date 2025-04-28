import { Types } from 'mongoose';

export interface IAttributeControllerCreateAttributeOutputSuccess {
  error: false;
  payload: {
    attributeId: Types.ObjectId;
  };
}
