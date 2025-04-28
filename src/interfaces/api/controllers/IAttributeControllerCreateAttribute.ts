import { IAttributeControllerCreateAttributeInput } from './IAttributeControllerCreateAttributeInput';
import { IAttributeControllerCreateAttributeOutput } from './IAttributeControllerCreateAttributeOutput';

export interface IAttributeControllerCreateAttribute {
  (
    args: IAttributeControllerCreateAttributeInput,
  ): Promise<IAttributeControllerCreateAttributeOutput>;
}
