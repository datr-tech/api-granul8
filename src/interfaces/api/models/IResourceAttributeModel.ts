import { Types } from 'mongoose';

export interface IResourceAttributeModel {
  resourceAttributeId: Types.ObjectId;
  attributeId: Types.ObjectId;
  resourceId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId | undefined;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
