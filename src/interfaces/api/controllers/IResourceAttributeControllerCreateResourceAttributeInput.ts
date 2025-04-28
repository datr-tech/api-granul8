import { Types } from 'mongoose';

export interface IResourceAttributeControllerCreateResourceAttributeInput {
  attributeId: Types.ObjectId;
  resourceId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt: number;
}
