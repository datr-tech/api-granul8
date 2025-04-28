import { IAttributeTypeControllerUpdateAttributeTypeInput } from './IAttributeTypeControllerUpdateAttributeTypeInput';
import { IAttributeTypeControllerUpdateAttributeTypeOutput } from './IAttributeTypeControllerUpdateAttributeTypeOutput';

export interface IAttributeTypeControllerUpdateAttributeType {
  (
    args: IAttributeTypeControllerUpdateAttributeTypeInput,
  ): Promise<IAttributeTypeControllerUpdateAttributeTypeOutput>;
}
