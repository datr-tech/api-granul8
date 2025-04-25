import { AttributeTypeModel } from '@app-ag/api/models';

export const attributeTypeControllerReadAttributeType = async ({ attributeTypeId }) => {
  const attributeType = await AttributeTypeModel.findById(attributeTypeId);

  return attributeType;
};
