import { IAttributeControllerDeleteAttributeInput } from './IAttributeControllerDeleteAttributeInput';
import { IAttributeControllerDeleteAttributeOutput } from './IAttributeControllerDeleteAttributeOutput';

export interface IAttributeControllerDeleteAttribute {
  (
    args: IAttributeControllerDeleteAttributeInput,
  ): Promise<IAttributeControllerDeleteAttributeOutput>;
}
