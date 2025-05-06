import { Types } from 'mongoose';

export interface IUserAttributeControllerCreateUserAttributeInput {
  attributeId: Types.ObjectId;
  userId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
