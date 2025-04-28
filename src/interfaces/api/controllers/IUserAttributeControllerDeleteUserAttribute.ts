import { IUserAttributeControllerDeleteUserAttributeInput } from './IUserAttributeControllerDeleteUserAttributeInput';
import { IUserAttributeControllerDeleteUserAttributeOutput } from './IUserAttributeControllerDeleteUserAttributeOutput';

export interface IUserAttributeControllerDeleteUserAttribute {
  (
    args: IUserAttributeControllerDeleteUserAttributeInput,
  ): Promise<IUserAttributeControllerDeleteUserAttributeOutput>;
}
