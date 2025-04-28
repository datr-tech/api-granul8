import { IAttributeControllerReadAttributeInput } from './IAttributeControllerReadAttributeInput';
import { IAttributeControllerReadAttributeOutput } from './IAttributeControllerReadAttributeOutput';

export interface IAttributeControllerReadAttribute {
  (
    args: IAttributeControllerReadAttributeInput,
  ): Promise<IAttributeControllerReadAttributeOutput>;
}
