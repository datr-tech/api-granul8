import { IUserAttributeControllerReadUserAttributeInput } from './IUserAttributeControllerReadUserAttributeInput';
import { IUserAttributeControllerReadUserAttributeOutput } from './IUserAttributeControllerReadUserAttributeOutput';

export interface IUserAttributeControllerReadUserAttribute {
  (
    args: IUserAttributeControllerReadUserAttributeInput,
  ): Promise<IUserAttributeControllerReadUserAttributeOutput>;
}
