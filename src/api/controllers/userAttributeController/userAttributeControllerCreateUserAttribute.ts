import { Types } from 'mongoose';
import { UserAttributeModel } from '@app/api/models';

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
