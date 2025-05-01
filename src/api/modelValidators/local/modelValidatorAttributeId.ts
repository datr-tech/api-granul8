import { AttributeModel } from '@app-ag/api/models';

export const modelValidatorAttributeId = async (doc, next) => {
  let attribute;
  let attributeId;

  if (doc && typeof doc.attributeId !== 'undefined') {
    attributeId = doc.attributeId;
  }

  if (attributeId) {
    attribute = await AttributeModel.findById(attributeId);
  }

  if (!attribute) {
    throw new Error('attributeId: invalid');
  }

  next();
};
