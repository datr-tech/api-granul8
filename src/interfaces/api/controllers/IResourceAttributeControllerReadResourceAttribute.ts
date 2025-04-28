import { IResourceAttributeControllerReadResourceAttributeInput } from './IResourceAttributeControllerReadResourceAttributeInput';
import { IResourceAttributeControllerReadResourceAttributeOutput } from './IResourceAttributeControllerReadResourceAttributeOutput';

export interface IResourceAttributeControllerReadResourceAttribute {
  (
    args: IResourceAttributeControllerReadResourceAttributeInput,
  ): Promise<IResourceAttributeControllerReadResourceAttributeOutput>;
}
