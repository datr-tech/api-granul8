import { attributeControllerCreateAttribute } from './attributeControllerCreateAttribute';
import { attributeControllerDeleteAttribute } from './attributeControllerDeleteAttribute';
import { attributeControllerReadAttribute } from './attributeControllerReadAttribute';
import { attributeControllerUpdateAttribute } from './attributeControllerUpdateAttribute';

export const attributeController = {
  createAttribute: attributeControllerCreateAttribute,
  updateAttribute: attributeControllerUpdateAttribute,
  readAttribute: attributeControllerReadAttribute,
  deleteAttribute: attributeControllerDeleteAttribute,
};
