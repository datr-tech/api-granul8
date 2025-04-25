import { AttributeTypeModel } from '@app-ag/api/models';
import { Types } from 'mongoose';

export const attributeTypeControllerCreateAttributeType = async ({
  description,
  name,
  adminStatusId,
  adminUserId,
}) => {
  const attributeTypeId = new Types.ObjectId();
  const modelParams = {
    attributeTypeId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const attributeTypeModel = new AttributeTypeModel(modelParams);
  await attributeTypeModel.save();

  return attributeTypeModel._id;
};
