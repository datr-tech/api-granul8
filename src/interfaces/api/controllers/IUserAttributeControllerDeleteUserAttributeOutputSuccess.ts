import { Types } from 'mongoose';

export interface IUserAttributeControllerDeleteUserAttributeOutputSuccess {
  error: false;
  payload: {
    userAttributeId: Types.ObjectId;
    responseStatusCode: number;
  };
}
