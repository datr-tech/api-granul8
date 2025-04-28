import { Types } from 'mongoose';

export interface IUserAttributeControllerUpdateUserAttributeOutputSuccess {
  error: false;
  payload: {
    userAttributeId: Types.ObjectId;
  };
}
