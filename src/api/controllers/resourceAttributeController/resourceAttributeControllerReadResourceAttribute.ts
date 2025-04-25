import { ResourceAttributeModel } from '@app-ag/api/models';

export const resourceAttributeControllerReadResourceAttribute = async ({
  resourceAttributeId,
}) => {
  const resourceAttribute = await ResourceAttributeModel.findById(resourceAttributeId);

  return resourceAttribute;
};
