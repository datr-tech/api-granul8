import { AttributeModel } from '@app/api/models';

export const attributeControllerReadAttribute = async ({ attributeId }) => {
  const attribute = await AttributeModel.findById(attributeId);

  return attribute;
};
