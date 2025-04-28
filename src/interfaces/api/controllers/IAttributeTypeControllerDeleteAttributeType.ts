import { IAttributeTypeControllerDeleteAttributeTypeInput } from './IAttributeTypeControllerDeleteAttributeTypeInput';
import { IAttributeTypeControllerDeleteAttributeTypeOutput } from './IAttributeTypeControllerDeleteAttributeTypeOutput';

export interface IAttributeTypeControllerDeleteAttributeType {
  (
    args: IAttributeTypeControllerDeleteAttributeTypeInput,
  ): Promise<IAttributeTypeControllerDeleteAttributeTypeOutput>;
}
