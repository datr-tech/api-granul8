import { attributeTypeControllerCreateAttributeType } from './attributeTypeControllerCreateAttributeType';
import { attributeTypeControllerDeleteAttributeType } from './attributeTypeControllerDeleteAttributeType';
import { attributeTypeControllerReadAttributeType } from './attributeTypeControllerReadAttributeType';
import { attributeTypeControllerUpdateAttributeType } from './attributeTypeControllerUpdateAttributeType';

export const attributeTypeController = {
  createAttributeType: attributeTypeControllerCreateAttributeType,
  updateAttributeType: attributeTypeControllerUpdateAttributeType,
  readAttributeType: attributeTypeControllerReadAttributeType,
  deleteAttributeType: attributeTypeControllerDeleteAttributeType,
};
