import { Types } from 'mongoose';

export interface IUserAttributeControllerCreateUserAttributeOutputSuccess {
  error: false;
  payload: {
    userAttributeId: Types.ObjectId;
  };
}
