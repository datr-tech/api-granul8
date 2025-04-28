import { IResourceAttributeControllerDeleteResourceAttributeInput } from './IResourceAttributeControllerDeleteResourceAttributeInput';
import { IResourceAttributeControllerDeleteResourceAttributeOutput } from './IResourceAttributeControllerDeleteResourceAttributeOutput';

export interface IResourceAttributeControllerDeleteResourceAttribute {
  (
    args: IResourceAttributeControllerDeleteResourceAttributeInput,
  ): Promise<IResourceAttributeControllerDeleteResourceAttributeOutput>;
}
