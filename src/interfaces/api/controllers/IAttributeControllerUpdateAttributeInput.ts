import { Types } from 'mongoose';

export interface IAttributeControllerUpdateAttributeInput {
  attributeId: Types.ObjectId;
  payload: {
    attributeTypeId?: Types.ObjectId;

    description?: string;

    name?: string;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
