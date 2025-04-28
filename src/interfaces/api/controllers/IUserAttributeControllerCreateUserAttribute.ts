import { IUserAttributeControllerCreateUserAttributeInput } from './IUserAttributeControllerCreateUserAttributeInput';
import { IUserAttributeControllerCreateUserAttributeOutput } from './IUserAttributeControllerCreateUserAttributeOutput';

export interface IUserAttributeControllerCreateUserAttribute {
  (
    args: IUserAttributeControllerCreateUserAttributeInput,
  ): Promise<IUserAttributeControllerCreateUserAttributeOutput>;
}
