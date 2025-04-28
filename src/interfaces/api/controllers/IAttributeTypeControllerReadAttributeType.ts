import { IAttributeTypeControllerReadAttributeTypeInput } from './IAttributeTypeControllerReadAttributeTypeInput';
import { IAttributeTypeControllerReadAttributeTypeOutput } from './IAttributeTypeControllerReadAttributeTypeOutput';

export interface IAttributeTypeControllerReadAttributeType {
  (
    args: IAttributeTypeControllerReadAttributeTypeInput,
  ): Promise<IAttributeTypeControllerReadAttributeTypeOutput>;
}
