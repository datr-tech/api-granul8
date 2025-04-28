import { Types } from 'mongoose';

export interface IUserAttributeControllerUpdateUserAttributeInput {
  userAttributeId: Types.ObjectId;
  payload: {
    attributeId?: Types.ObjectId;

    userId?: Types.ObjectId;

    description?: string;

    name?: string;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
