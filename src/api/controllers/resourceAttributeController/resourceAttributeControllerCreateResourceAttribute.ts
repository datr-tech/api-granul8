import { ResourceAttributeModel } from '@app-ag/api/models';
import { Types } from 'mongoose';

export const resourceAttributeControllerCreateResourceAttribute = async ({
  attributeId,
  resourceId,
  description,
  name,
  adminStatusId,
  adminUserId,
}) => {
  const resourceAttributeId = new Types.ObjectId();
  const modelParams = {
    resourceAttributeId,
    attributeId,
    resourceId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const resourceAttributeModel = new ResourceAttributeModel(modelParams);
  await resourceAttributeModel.save();

  return resourceAttributeModel._id;
};
