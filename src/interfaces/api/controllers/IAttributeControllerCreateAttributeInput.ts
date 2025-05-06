import { Types } from 'mongoose';

export interface IAttributeControllerCreateAttributeInput {
  attributeTypeId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
