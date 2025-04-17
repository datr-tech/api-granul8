import { AttributeTypeModel } from '@app/api/models';

export const attributeTypeControllerReadAttributeType = async ({ attributeTypeId }) => {
  const attributeType = await AttributeTypeModel.findById(attributeTypeId);

  return attributeType;
};
