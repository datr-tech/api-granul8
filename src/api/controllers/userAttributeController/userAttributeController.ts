import { userAttributeControllerCreateUserAttribute } from './userAttributeControllerCreateUserAttribute';
import { userAttributeControllerUpdateUserAttribute } from './userAttributeControllerUpdateUserAttribute';
import { userAttributeControllerReadUserAttribute } from './userAttributeControllerReadUserAttribute';
import { userAttributeControllerDeleteUserAttribute } from './userAttributeControllerDeleteUserAttribute';

export const userAttributeController = {
  createUserAttribute: userAttributeControllerCreateUserAttribute,
  updateUserAttribute: userAttributeControllerUpdateUserAttribute,
  readUserAttribute: userAttributeControllerReadUserAttribute,
  deleteUserAttribute: userAttributeControllerDeleteUserAttribute,
};
