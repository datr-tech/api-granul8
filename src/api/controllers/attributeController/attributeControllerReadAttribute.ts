import { AttributeModel } from '@app-ag/api/models';

export const attributeControllerReadAttribute = async ({ attributeId }) => {
  const attribute = await AttributeModel.findById(attributeId);

  return attribute;
};
