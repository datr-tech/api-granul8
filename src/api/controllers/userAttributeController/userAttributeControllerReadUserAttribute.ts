import { UserAttributeModel } from '@app-ag/api/models';

export const userAttributeControllerReadUserAttribute = async ({ userAttributeId }) => {
  const userAttribute = await UserAttributeModel.findById(userAttributeId);

  return userAttribute;
};
