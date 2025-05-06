import { Types } from 'mongoose';

export interface IResourceAttributeControllerUpdateResourceAttributeOutputSuccess {
  error: false;
  payload: {
    resourceAttributeId: Types.ObjectId;
    responseStatusCode: number;
  };
}
