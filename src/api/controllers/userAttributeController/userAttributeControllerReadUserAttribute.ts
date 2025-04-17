import { UserAttributeModel } from '@app/api/models';

export const userAttributeControllerReadUserAttribute = async ({ userAttributeId }) => {
  const userAttribute = await UserAttributeModel.findById(userAttributeId);

  return userAttribute;
};
