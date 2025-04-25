import { UserAttributeModel } from '@app-ag/api/models';
import { Types } from 'mongoose';

export const userAttributeControllerCreateUserAttribute = async ({
  attributeId,
  userId,
  description,
  name,
  adminStatusId,
  adminUserId,
}) => {
  const userAttributeId = new Types.ObjectId();
  const modelParams = {
    userAttributeId,
    attributeId,
    userId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const userAttributeModel = new UserAttributeModel(modelParams);
  await userAttributeModel.save();

  return userAttributeModel._id;
};
