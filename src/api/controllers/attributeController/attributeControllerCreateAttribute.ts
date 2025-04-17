import { Types } from 'mongoose';
import { AttributeModel } from '@app/api/models';

export const attributeControllerCreateAttribute = async ({ attributeTypeId, description, name, adminStatusId, adminUserId }) => {
  const attributeId = new Types.ObjectId();
  const modelParams = {
    attributeId,
    attributeTypeId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const attributeModel = new AttributeModel(modelParams);
  await attributeModel.save();

  return attributeModel._id;
};
