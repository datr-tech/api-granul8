import { IResourceAttributeControllerUpdateResourceAttributeInput } from './IResourceAttributeControllerUpdateResourceAttributeInput';
import { IResourceAttributeControllerUpdateResourceAttributeOutput } from './IResourceAttributeControllerUpdateResourceAttributeOutput';

export interface IResourceAttributeControllerUpdateResourceAttribute {
  (
    args: IResourceAttributeControllerUpdateResourceAttributeInput,
  ): Promise<IResourceAttributeControllerUpdateResourceAttributeOutput>;
}
