import { Types } from 'mongoose';

export interface IResourceAttributeControllerUpdateResourceAttributeInput {
  resourceAttributeId: Types.ObjectId;
  payload: {
    attributeId?: Types.ObjectId;

    resourceId?: Types.ObjectId;

    description?: string;

    name?: string;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
