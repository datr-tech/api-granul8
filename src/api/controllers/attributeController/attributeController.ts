import { attributeControllerCreateAttribute } from './attributeControllerCreateAttribute';
import { attributeControllerUpdateAttribute } from './attributeControllerUpdateAttribute';
import { attributeControllerReadAttribute } from './attributeControllerReadAttribute';
import { attributeControllerDeleteAttribute } from './attributeControllerDeleteAttribute';

export const attributeController = {
  createAttribute: attributeControllerCreateAttribute,
  updateAttribute: attributeControllerUpdateAttribute,
  readAttribute: attributeControllerReadAttribute,
  deleteAttribute: attributeControllerDeleteAttribute,
};
