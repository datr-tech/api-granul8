import { IUserAttributeControllerUpdateUserAttributeInput } from './IUserAttributeControllerUpdateUserAttributeInput';
import { IUserAttributeControllerUpdateUserAttributeOutput } from './IUserAttributeControllerUpdateUserAttributeOutput';

export interface IUserAttributeControllerUpdateUserAttribute {
  (
    args: IUserAttributeControllerUpdateUserAttributeInput,
  ): Promise<IUserAttributeControllerUpdateUserAttributeOutput>;
}
