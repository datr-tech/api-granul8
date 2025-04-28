import { userAttributeControllerCreateUserAttribute } from './userAttributeControllerCreateUserAttribute';
import { userAttributeControllerDeleteUserAttribute } from './userAttributeControllerDeleteUserAttribute';
import { userAttributeControllerReadUserAttribute } from './userAttributeControllerReadUserAttribute';
import { userAttributeControllerUpdateUserAttribute } from './userAttributeControllerUpdateUserAttribute';

export const userAttributeController = {
  createUserAttribute: userAttributeControllerCreateUserAttribute,
  updateUserAttribute: userAttributeControllerUpdateUserAttribute,
  readUserAttribute: userAttributeControllerReadUserAttribute,
  deleteUserAttribute: userAttributeControllerDeleteUserAttribute,
};
