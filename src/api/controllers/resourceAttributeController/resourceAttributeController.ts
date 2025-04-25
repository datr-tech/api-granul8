import { resourceAttributeControllerCreateResourceAttribute } from './resourceAttributeControllerCreateResourceAttribute';
import { resourceAttributeControllerDeleteResourceAttribute } from './resourceAttributeControllerDeleteResourceAttribute';
import { resourceAttributeControllerReadResourceAttribute } from './resourceAttributeControllerReadResourceAttribute';
import { resourceAttributeControllerUpdateResourceAttribute } from './resourceAttributeControllerUpdateResourceAttribute';

export const resourceAttributeController = {
  createResourceAttribute: resourceAttributeControllerCreateResourceAttribute,
  updateResourceAttribute: resourceAttributeControllerUpdateResourceAttribute,
  readResourceAttribute: resourceAttributeControllerReadResourceAttribute,
  deleteResourceAttribute: resourceAttributeControllerDeleteResourceAttribute,
};
