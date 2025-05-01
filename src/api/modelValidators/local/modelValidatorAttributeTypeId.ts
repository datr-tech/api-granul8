import { AttributeTypeModel } from '@app-ag/api/models';

export const modelValidatorAttributeTypeId = async (doc, next) => {
  let attributeType;
  let attributeTypeId;

  if (doc && typeof doc.attributeTypeId !== 'undefined') {
    attributeTypeId = doc.attributeTypeId;
  }

  if (attributeTypeId) {
    attributeType = await AttributeTypeModel.findById(attributeTypeId);
  }

  if (!attributeType) {
    throw new Error('attributeTypeId: invalid');
  }

  next();
};
