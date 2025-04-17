import { Types } from 'mongoose';

export interface IAttributeModel {
  attributeId: Types.ObjectId;
  attributeTypeId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId | undefined;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
