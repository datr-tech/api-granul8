import { IAttributeControllerUpdateAttributeInput } from './IAttributeControllerUpdateAttributeInput';
import { IAttributeControllerUpdateAttributeOutput } from './IAttributeControllerUpdateAttributeOutput';

export interface IAttributeControllerUpdateAttribute {
  (
    args: IAttributeControllerUpdateAttributeInput,
  ): Promise<IAttributeControllerUpdateAttributeOutput>;
}
