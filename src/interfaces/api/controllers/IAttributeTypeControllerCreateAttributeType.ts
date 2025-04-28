import { IAttributeTypeControllerCreateAttributeTypeInput } from './IAttributeTypeControllerCreateAttributeTypeInput';
import { IAttributeTypeControllerCreateAttributeTypeOutput } from './IAttributeTypeControllerCreateAttributeTypeOutput';

export interface IAttributeTypeControllerCreateAttributeType {
  (
    args: IAttributeTypeControllerCreateAttributeTypeInput,
  ): Promise<IAttributeTypeControllerCreateAttributeTypeOutput>;
}
