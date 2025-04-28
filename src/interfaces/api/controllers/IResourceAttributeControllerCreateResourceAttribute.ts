import { IResourceAttributeControllerCreateResourceAttributeInput } from './IResourceAttributeControllerCreateResourceAttributeInput';
import { IResourceAttributeControllerCreateResourceAttributeOutput } from './IResourceAttributeControllerCreateResourceAttributeOutput';

export interface IResourceAttributeControllerCreateResourceAttribute {
  (
    args: IResourceAttributeControllerCreateResourceAttributeInput,
  ): Promise<IResourceAttributeControllerCreateResourceAttributeOutput>;
}
