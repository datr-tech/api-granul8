import { Types } from 'mongoose';

export interface IResourceAttributeControllerCreateResourceAttributeOutputSuccess {
  error: false;
  payload: {
    resourceAttributeId: Types.ObjectId;
  };
}
